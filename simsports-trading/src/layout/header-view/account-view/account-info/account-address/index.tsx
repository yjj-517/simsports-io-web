// <!-- account-view -->
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { accountStores, walletStores } from "@/store/index"; //store
import { disConnectWallet } from "@/wallet/wallet"; //钱包

import { getProfile } from "@/http/modules/account"; //接口

import iconDunk from "@/assets/imgs/wallet/icon-simdunk-dunk.svg";
import iconCopy from "@/assets/imgs/common/icon-copy.png";
import IconClose from "@/assets/imgs/common/icon-close.svg?react";
import IconUser from "@/assets/imgs/account/top/icon-user.svg?react";
import IconUserDisconnect from "@/assets/imgs/account/top/icon-user-disconnect.svg?react";

const View: React.FC = () => {
	const { editUser } = accountStores(); //account
	const navigate = useNavigate(); //路由跳转
	const [display, setDisplay] = useState<boolean>(false); //定义user显示
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		// 定义点击user框外消失
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setDisplay(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);
	const { userInfo, delUser } = accountStores(); //account
	const { walletIfon, delWallet } = walletStores(); //wallet

	// 退出登录
	const exitUser = () => {
		delUser();
		delWallet();
		disConnectWallet();
	};
	// 获取用户信息
	const getUser = () => {
		if (accountStores.getState().userState) {
			getProfile().then((res: any) => {
				if (res.code === 0) {
					editUser(res.data.user_info);
				}
			});
		}
	};
	useEffect(() => {
		getUser();
	}, [display]);
	return (
		<>
			<div className="relative">
				<button
					className="flex justify-center items-center bg-bgcolor-400  rounded-lg overflow-hidden"
					onClick={() => {
						setDisplay(true);
					}}
				>
					<img src={userInfo.avatarImg} className="size-[40px] object-cover" />
					<span className="font-Quantico text-lg font-bold px-2.5 hidden md:block">
						{walletIfon.address.slice(0, 6) + "..." + walletIfon.address.slice(-4)}
					</span>
				</button>
				{display ? (
					<div
						ref={ref}
						className="absolute top-[50px] right-0 trove-scrollbar p-5 w-[90vw] md:w-[320px] max-h-[90vh] rounded-xl bg-bgcolor-400 flex flex-col gap-6"
					>
						<button
							className="absolute right-4 top-4 p-2 bg-bgcolor-100 rounded-full"
							onClick={() => {
								setDisplay(false);
							}}
						>
							<IconClose className="size-2.5" />
						</button>
						<div className="flex items-center gap-2">
							<img src={userInfo.avatarImg} className="size-[48px] object-cover rounded-full" />
							<p className="font-Quantico"> {walletIfon.address.slice(0, 5) + "..." + walletIfon.address.slice(-4)}</p>
							<button
								className="flex"
								onClick={() => {
									navigator.clipboard.writeText(walletIfon.address);
								}}
							>
								<img src={iconCopy} className="size-6" />
							</button>
						</div>
						<button
							className="group bg-bgcolor-100 h-[40px] rounded-lg flex items-center px-3 "
							onClick={() => {
								navigate("/account");
								setDisplay(false);
							}}
						>
							<IconUser className="size-7 " />
							<span className="ml-6 group-hover:underline ">My Profile</span>
						</button>
						<div className="border-t border-dashed border-text-300"></div>
						<div className="flex flex-col gap-3">
							<div className="font-bold">Currency Breakdown</div>
							<div className="flex justify-between items-center px-4 h-[56px] bg-bgcolor-100 rounded-lg">
								<div className="flex items-center gap-1.5">
									<img src={iconDunk} className="size-6 object-cover rounded-full" />
									<span>DUNK</span>
								</div>
								<p className="font-Quantico">{userInfo.dunkPrice}</p>
							</div>
						</div>
						<div className="border-t border-dashed border-text-300"></div>
						<div className="flex justify-end items-center">
							<button
								className="flex items-center gap-3 text-text-100 hover:text-white"
								onClick={() => {
									exitUser();
								}}
							>
								<span>Disconnect</span>
								<IconUserDisconnect />
							</button>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export default View;
