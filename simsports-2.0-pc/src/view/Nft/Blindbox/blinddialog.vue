<!-- mint弹窗 -->
<template>
	<el-dialog v-model="acceptData.state" :show-close="false" class="my-dialog" width="6.8rem">
		<!-- 标题 -->
		<template #header="{ close, titleId, titleClass }">
			<div class="my-header">
				<div :id="titleId" :class="titleClass"></div>
				<el-image :src="closeIcon" class="closeIcon" @click.stop="close" />
			</div>
		</template>
		<!-- 内容 -->
		<div class="dialog_box">
			<el-image :src="blindBox" class="blindBox" />
			<div class="nft_num">
				<div class="num_box">
					<el-image :src="subIcon" class="subIcon" @click.stop="subNum" />
					<span class="num_text">{{ nftPaly.priceNum }}</span>
					<el-image :src="addIcon" class="subIcon" @click.stop="addNum" />
				</div>
				<button class="input_box" @click.stop="onShopping">OK</button>
			</div>
		</div>
	</el-dialog>
</template>

<script setup lang="ts">
import { reactive, onMounted, watch } from "vue";
import closeIcon from "@/assets/imgs/dialog/closeIcon.png";
import blindBox from "@/assets/imgs/nft/blindBox.png";
import subIcon from "@/assets/imgs/nft/subIcon.png";
import addIcon from "@/assets/imgs/nft/addIcon.png";
import { SPlayerNFTAbi } from "@/ethers/SPlayerNFT/index"; //合约
import { ElMessage, ElLoading } from "element-plus"; //element 提示器
import { getWhitelist } from "@/http/api"; //接口
import { useStores } from "@/store/index"; //store
import { ethers } from "ethers"; //引入ethers.js

const useStore = useStores(); //用户信息
// 接收dialog的显示;
const props = defineProps({
	dialog: {
		type: Object,
		default: () => {},
	},
});
// 接受传过来的参数
const acceptData = reactive(props.dialog);
const nftPaly = reactive({
	loadingState: false, //loading
	priceNum: 1, //购买数量
	SPlayerNFT: {
		balanceOf: 1,
		mOnlyWhiteMint: false,
	},
});
// 获取用户的详情
const nftList = async () => {
	const loading = ElLoading.service({
		lock: true,
		text: "Loading",
		background: "rgba(0, 0, 0, 0.7)",
	});
	const contract = await SPlayerNFTAbi(); //构建合约
	nftPaly.SPlayerNFT = contract.items;
	if (nftPaly.SPlayerNFT.balanceOf == 5) {
		nftPaly.priceNum = 0;
	}
	loading.close();
};
// 点击sub
const subNum = () => {
	if (nftPaly.priceNum <= 0) {
		nftPaly.priceNum = 0;
	} else {
		nftPaly.priceNum--;
	}
};
// 点击add
const addNum = () => {
	if (nftPaly.priceNum >= 5 - nftPaly.SPlayerNFT.balanceOf) {
		nftPaly.priceNum = 5 - nftPaly.SPlayerNFT.balanceOf;
	} else {
		nftPaly.priceNum++;
	}
};
// 购买
const onShopping = async () => {
	if (nftPaly.SPlayerNFT.balanceOf == 5) {
		ElMessage.error("单个账户最多Mint5个");
	} else {
		if (nftPaly.priceNum == 0) {
			ElMessage.error("Mint数量最少为1个");
		} else {
			const contract = await SPlayerNFTAbi(); //构建合约
			let userLeaf: any = [];
			const price = ethers.parseEther(String(nftPaly.priceNum * contract.items.mPrice)); //购买价格
			if (nftPaly.SPlayerNFT.mOnlyWhiteMint) {
				await getWhitelist({
					address: contract.items.SPlayerNFTAddr,
					user_address: useStore.walletIfon.address,
				}).then((res: any) => {
					if (res.code == 0) {
						userLeaf = JSON.parse(res.data.whitelist_data);
						// 白名单购买
						contract.SPlayerNFTSigner.mint(nftPaly.priceNum, userLeaf, {
							value: price,
						})
							.then(async (res: any) => {
								await res
									.wait()
									.then(() => {
										ElMessage.success("Mint成功!");
									})
									.catch(() => {
										ElMessage.error("Mint失败!");
									});
							})
							.catch((err: any) => {
								console.log(err);
								ElMessage.error("Mint交易拒绝!");
							});
					} else {
						ElMessage.error("当前只能白名单用户Mint");
					}
				});
			} else {
				// 普通购买
				contract.SPlayerNFTSigner.mint(nftPaly.priceNum, userLeaf, { value: price })
					.then(async (res: any) => {
						await res
							.wait()
							.then(() => {
								ElMessage.success("Mint成功!");
							})
							.catch(() => {
								ElMessage.error("Mint失败!");
							});
					})
					.catch(() => {
						ElMessage.error("Mint交易拒绝!");
					});
			}
		}
	}
};
onMounted(() => {
	// 挂载时
	nftList();
});
watch([() => useStore.walletState, () => useStore.walletIfon.address, () => useStore.walletIfon.chainId], () => {
	acceptData.state = false;
});
</script>

<style lang="less" scoped>
.dialog_box {
	display: flex;
	.blindBox {
		.w-h(2.6rem,3.6rem);
	}
	.nft_num {
		margin: 1.24rem 0 0 1.2rem;
		.num_box {
			line-height: 0.3rem;
			.mixin-flex (row,flex-start,center,nowrap);
			.num_text {
				font-size: 0.26rem;
				color: @COLOR_Z;
				font-weight: bold;
				margin: 0 0.36rem;
			}
			.subIcon {
				.w-h(0.26rem,0.26rem);
				cursor: pointer;
				// cursor: not-allowed;//禁用手势
			}
		}
		.input_box {
			margin: 0.48rem auto;
			background-color: @COLOR_Z;
			color: @COLOR_L;
			width: 1.28rem;
			line-height: 0.38rem;
			text-align: center;
			border-radius: 0.1rem;
			font-size: 0.28rem;
			font-weight: bold;
			&:hover {
				background-color: @COLOR_Z1;
				color: @COLOR_L1;
			}
		}
	}
}
</style>
