// special-esport-event
import React, { useState, useEffect } from "react";

import SubmitDialog from "./submit-dialog/index";
import SuccessDialog from "./success-dialog/index";

import { layoutStores, accountStores, walletStores } from "@/store/index"; //store
import { getListByGroup } from "@/http/modules/collections"; //接口
import IconSpin from "@/assets/imgs/common/icon-spin.svg?react";

interface EventsProps {
	eventData: any;
	showModal02: boolean;
	toggleModal02: () => void;
}
const View: React.FC<EventsProps> = ({ eventData, showModal02, toggleModal02 }: EventsProps) => {
	const [showModal01, setShowModal01] = useState<boolean>(false); //form弹窗
	// 修改弹窗状态
	const toggleModal01 = () => {
		setShowModal01(!showModal01);
	};

	const { userState } = accountStores(); //account
	const { setWalletConnectDialog } = layoutStores(); //layout
	// 报名禁止
	const [disabledButton] = useState<boolean>(true); //禁止点击

	// 游戏数据
	const [itemCardData, setItemCardData] = useState<any[]>([]);
	const [spinning, setSpinning] = useState<boolean>(true); //Spinning
	const [whitelistState, setWhitelistState] = useState<string>("-"); //whitelist
	// 是否拥有卡片
	const getContract = async () => {
		setSpinning(true); //Spinning
		if (accountStores.getState().userInfo.address) {
			// 钱包-连接
			const objs = {
				user_address: walletStores.getState().walletIfon.address, //userInfo-address-
				contract_address: import.meta.env.VITE_CONTRACT_SPECIALTICKET_ADDR, //contract
				token_id: "", //token_id
				network: "", //chain
			};
			getListByGroup(objs)
				.then((res: any) => {
					// console.log(res);
					const data = res.data.list;
					console.log(data);
					// 是否存在card
					if (data.length > 0) {
						setWhitelistState("YES");
					} else {
						setWhitelistState("NO");
					}
					setItemCardData(data);
					setSpinning(false); //Spinning
				})
				.catch(() => {
					setSpinning(false); //Spinning
				});
		} else {
			setSpinning(false); //Spinning
		}
	};
	useEffect(() => {
		getContract();
	}, [accountStores.getState().userInfo.address]);
	// 点击报名
	const onEventSubmit = async () => {
		if (disabledButton) {
			if (userState) {
				if (whitelistState == "YES") {
					setShowModal01(true);
				}
			} else {
				// 未登录
				setWalletConnectDialog(true); //打开wallet
			}
		}
	};
	return (
		<>
			<div className="mt-14">
				<h2 className="text-primary text-2xl">Event Registration</h2>
				<p className="font-bold mt-5">Hold SimDunk Alpha Special Esport Tickets</p>
				<div
					className={`${whitelistState === "YES" ? " border-primary " : whitelistState === "NO" ? " border-disabled " : " border-black "} mt-5 flex flex-wrap justify-between items-center px-5 py-3 bg-black border-[1px] rounded-lg `}
				>
					<span className="break-all">
						{accountStores.getState().userInfo.address ? accountStores.getState().userInfo.address : "-"}
					</span>
					{spinning ? (
						<IconSpin className="size-5 text-primary animate-spin-slow-1" />
					) : (
						<span
							className={`${whitelistState === "YES" ? " text-primary " : whitelistState === "NO" ? " text-disabled " : "  "} `}
						>
							{whitelistState}
						</span>
					)}
				</div>
				<div className="mt-6">
					{disabledButton ? (
						<button
							className="fillet-button py-3 px-10"
							onClick={() => {
								onEventSubmit();
							}}
						>
							Registration
						</button>
					) : (
						<button className="fillet-button-trumpet-disabled py-3 px-10">Registration Closed</button>
					)}
				</div>
			</div>
			{showModal01 ? (
				<SubmitDialog eventData={eventData} onClose01={toggleModal01} onClose02={toggleModal02} itemCardData={itemCardData} />
			) : (
				<></>
			)}
			{showModal02 ? <SuccessDialog onClose={toggleModal02} /> : <></>}
		</>
	);
};

export default View;
