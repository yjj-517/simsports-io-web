// predictplay-合约

import { Transaction } from "@mysten/sui/transactions";
import { SuiClient, getFullnodeUrl } from "@mysten/sui/client";
import { bcs } from "@mysten/sui/bcs";
import { MIST_PER_SUI } from "@mysten/sui/utils";

const suiClient = new SuiClient({ url: getFullnodeUrl("testnet") });

export const ZeroAddress = import.meta.env.VITE_ZERO_ADDRESS; //合约地址
export const PredictplayAddr = import.meta.env.VITE_PREDICTPLAY_ADDR; //合约地址
export const PredictplayObjectId = import.meta.env.VITE_PREDICTPLAY_OBJECT_ID; //合约地址

const MarketInfoBCS = bcs.struct(`${PredictplayAddr}::predictplay::MarketInfo`, {
	market_id: bcs.u64(),
	game_id: bcs.u64(),
	name: bcs.string(),
	end_time: bcs.u64(),
	yes_price: bcs.u64(),
	no_price: bcs.u64(),
	yes_liquidity: bcs.u64(),
	no_liquidity: bcs.u64(),
	status: bcs.u8(),
	total_liquidity: bcs.u64(),
	creator: bcs.Address,
	resolved_outcome: bcs.u8(),
});
const VecMarketInfo = bcs.vector(MarketInfoBCS);
export interface MarketInfo {
	market_id: string;
	game_id: string;
	name: string;
	end_time: string;
	yes_price: string;
	no_price: string;
	yes_liquidity: string;
	no_liquidity: string;
	status: number;
	//   yes_shares: number;
	//   no_shares: number;
	total_liquidity: string;
	creator: string;
	resolved_outcome: boolean | null;
}
// 不通过钱包构建合约
export const PredictplayAbiContract: any = async () => {
	const tx = new Transaction();
	const MARKETS_OBJECT_ID = tx.object(PredictplayObjectId); //合约地址
	const start = tx.pure.u64(0); //start
	const limit = tx.pure.u64(100); //limit
	tx.moveCall({
		target: `${PredictplayAddr}::predictplay::get_markets_list`,
		arguments: [
			MARKETS_OBJECT_ID, // ObjectId
			start, // 指定类型为 u64
			limit, // 指定类型为 bool
		],
		typeArguments: [], // 如有类型参数可在此传入
	});
	const resp = await suiClient.devInspectTransactionBlock({
		transactionBlock: tx,
		sender: ZeroAddress,
	});
	// console.log(resp);
	const bytes = resp.results?.[0]?.returnValues?.[0]?.[0];
	if (!bytes) return { marketsArr: [] }; // 直接提前返回空数组
	const raw = Uint8Array.from(bytes); // 一定有值才走到这
	// bcs 反序列化
	const decoded = VecMarketInfo.parse(raw) as any[]; // 反序列化得到数组
	// ④ 转成前端友好的对象数组
	const markets: MarketInfo[] = decoded.map(v => ({
		market_id: v.market_id.toString(),
		game_id: v.game_id.toString(),
		name: v.name,
		end_time: v.end_time.toString(),
		yes_price: v.yes_price.toString(),
		no_price: v.no_price.toString(),
		yes_liquidity: v.yes_liquidity.toString(),
		no_liquidity: v.no_liquidity.toString(),
		status: Number(v.status),
		total_liquidity: v.total_liquidity.toString(),
		creator: v.creator,
		resolved_outcome:
			Number(v.resolved_outcome) === 1 ? true : Number(v.resolved_outcome) === 2 ? false : null,
	}));
	// 修改数组--市场数据list
	const marketsArr = markets.map(item => ({
		...item,
		priceArr: [
			{
				id: 1,
				name: "Yes",
				price: Number(item.yes_price) / 10000,
			},
			{
				id: 2,
				name: "No",
				price: Number(item.no_price) / 10000,
			},
		],
	}));
	// console.log(marketsArr);
	return {
		marketsArr: marketsArr,
	};
};
// 尝试解码 u64
const decodeU64 = (bytes: number[]) => {
	// 使用 Buffer (Node.js/Webpack 环境)
	// return BigInt(`0x${Buffer.from(bytes).toString('hex')}`).toString();
	// 或者使用 DataView (浏览器原生)
	const buffer = new ArrayBuffer(8); // u64 is 8 bytes
	const view = new DataView(buffer);
	const uint8Array = new Uint8Array(bytes);
	// Ensure we copy only up to 8 bytes, assuming little-endian from Sui
	for (let i = 0; i < Math.min(bytes.length, 8); i++) {
		view.setUint8(i, uint8Array[i]);
	}
	// Read as little-endian 64-bit unsigned integer
	return view.getBigUint64(0, true).toString();
};
// 不通过钱包构建合约查询用户是否有余量
export const PredictplayAbiContractTotal: any = async (address: any, market_id: any) => {
	const tx = new Transaction();
	const MARKETS_OBJECT_ID = tx.object(PredictplayObjectId); //合约地址
	const MARKET_ID = tx.pure.u64(market_id); //start
	const ADDRESS = tx.pure.address(address); //limit
	tx.moveCall({
		target: `${PredictplayAddr}::predictplay::get_user_position`,
		arguments: [
			MARKETS_OBJECT_ID, // ObjectId
			MARKET_ID, // 指定类型为 u64
			ADDRESS, // 指定类型为 bool
		],
		typeArguments: [], // 如有类型参数可在此传入
	});
	const resp = await suiClient.devInspectTransactionBlock({
		transactionBlock: tx,
		sender: ZeroAddress,
	});
	const bytes = resp.results?.[0]?.returnValues;
	let yesShares: any;
	let noShares: any;
	if (bytes) {
		yesShares = Number(decodeU64(bytes[0][0])) / Number(MIST_PER_SUI);
		noShares = Number(decodeU64(bytes[1][0])) / Number(MIST_PER_SUI);
	}
	const sharesNum = {
		yesShares: yesShares,
		noShares: noShares,
	};
	return {
		sharesNum: sharesNum,
	};
};
