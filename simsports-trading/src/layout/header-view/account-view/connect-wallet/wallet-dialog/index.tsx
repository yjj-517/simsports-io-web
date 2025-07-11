// wallet-dialog
import React, { useState } from "react";
import ModalView from "@/components/modal-view/index";
import { connectConnectKit } from "@/wallet/wallet"; //钱包
import { osStores, walletStores, accountStores, walletConnectHistoryStores, layoutStores } from "@/store/index"; //store

import { walleListData, walletTutorialData } from "@/utils/wallet";
import { setSignmessage } from "@/utils/wallet"; //签名数据

import { postAuthLogin } from "@/http/modules/account"; //接口

import { message } from "antd";

import connectwallectImg from "@/assets/imgs/wallet/img-connectwallect.png";
import IconFaq from "@/assets/imgs/common/icon-faq.svg?react";
import IconSpin from "@/assets/imgs/common/icon-spin.svg?react";
import IconArrowPulldown from "@/assets/imgs/layout/common/icon-arrow-pulldown.svg?react";

const View: React.FC = () => {
	const { walletHistory, setWalletHistory } = walletConnectHistoryStores(); //wallet-history
	const [walletData, setWalletData] = useState(walleListData); //wallet-list

	const { setWalletConnectDialog, setUserAgreementDialog } = layoutStores(); //layout
	// 连接钱包弹窗
	const onClose = () => {
		setWalletConnectDialog(false);
	};

	const { addUser } = accountStores(); //store
	const [isLoading, setIsLoading] = useState<boolean>(false); //按钮等待
	const { setWalletSignType } = walletStores(); //wallet

	// 连接=绑定
	const connectBind = async (item: any) => {
		if (!isLoading) {
			setIsLoading(true); //Loading
			if (item.state === false) {
				// 点击按钮变为ture
				const updatedWalletData = walletData.map(walletItem => {
					if (walletItem.id === item.id) {
						return { ...walletItem, state: true };
					}
					return walletItem; // 其他项不变
				});
				// 点击按钮变为false
				const noupdatedWalletData = walletData.map(walletItem => {
					if (walletItem.id === item.id) {
						return { ...walletItem, state: false };
					}
					return walletItem; // 其他项不变
				});
				setWalletData(updatedWalletData); //按钮改变
				try {
					// 连接钱包
					const res = await connectConnectKit(item.name);
					if (res) {
						setWalletHistory(item.name);
						// 签名验证
						await setWalletSignType(1); //绑定
						const signmessageStr = setSignmessage(walletStores.getState().walletSignType);
						const signPromise = res?.signer.signMessage(signmessageStr);
						if (signPromise) {
							signPromise
								.then((res: any) => {
									// 绑定签名成功请求接口
									const obj = {
										address: walletStores.getState().walletIfon.address,
										wallet_type: item.id,
										signature: res,
										sign_date: signmessageStr,
									};
									// 签名验证接口
									postAuthLogin(obj)
										.then((res: any) => {
											if (res.code === 0) {
												// 添加账号
												addUser(res.data.user_info, res.data.token_info.token);
												if (accountStores.getState().userInfo.agree_status === 1) {
													setUserAgreementDialog(true); // 未同意用户协议-弹窗
													setWalletConnectDialog(false); //关闭连接钱包弹窗
												} else {
													setWalletConnectDialog(false); //关闭连接钱包弹窗
												}
											} else {
												message.warning(res.message);
											}
											setIsLoading(false); //Loading
											setWalletData(noupdatedWalletData); //修改按钮
										})
										.catch((err: any) => {
											// 接口失败
											message.warning(err.message);
											setIsLoading(false); //Loading
											setWalletData(noupdatedWalletData); //修改按钮
										});
								})
								.catch(() => {
									// 取消绑定签名
									setIsLoading(false); //Loading
									setWalletData(noupdatedWalletData); //修改按钮
								});
						}
					}
				} catch {
					// 连接钱包失败
					setIsLoading(false); //Loading
					setWalletData(noupdatedWalletData); //修改按钮
				}
			}
		}
	};
	const { os } = osStores(); //设备
	// connect wallet
	const walletConnect = async (item: any) => {
		// 手机端
		if (item.name === "metamask" && os === "isMobile" && window.ethereum == null) {
			const url = window.location.href;
			let redirectToAppStore = true;
			window.location.href = "https://metamask.app.link/dapp/" + url;
			setTimeout(function () {
				// 检查是否已经重定向到了 MetaMask 应用链接
				if (window.location.href.startsWith("https://metamask.app.link/dapp/")) {
					// 如果已经重定向到了 MetaMask 应用链接，则取消后续的重定向
					redirectToAppStore = false;
					setWalletConnectDialog(false); //关闭连接钱包弹窗
				}
				// 如果需要重定向到 App Store，则执行重定向操作
				if (redirectToAppStore) {
					window.open("https://metamask.app.link/dapp/", "_blank");
					setWalletConnectDialog(false); //关闭连接钱包弹窗
				}
			}, 3000);
		} else if (item.name === "metamask" && os === "isPc" && window.ethereum == null) {
			// PC需要重定向到 MetaMask
			window.open("https://metamask.app.link/dapp/", "_blank");
		} else {
			// 连接钱包
			connectBind(item);
		}
	};

	return (
		<>
			<ModalView onClose={onClose} width="740px" closable={true}>
				<h2 className="text-center text-2xl font-Quantico text-primary font-bold">Connect Wallet</h2>
				<div className="mt-10 flex justify-between items-start">
					<div className="flex flex-col gap-5 w-full md:w-[60%] ">
						{walletData.map((item: any, index: React.Key | null | undefined) => {
							return (
								<div
									key={index}
									className="flex relative justify-between items-center gap-10 px-5 h-[64px] min-w-[280px] max-w-[400px] bg-black rounded-lg border border-dotted border-text-300 cursor-pointer hover:border-primary"
									onClick={() => {
										walletConnect(item);
									}}
								>
									<div className="flex items-center flex-1 gap-5">
										<img src={item.icon} className="size-[44px]" />
										{item.state ? (
											<IconSpin className="size-6 text-primary animate-spin-slow-1" />
										) : (
											<p className="text-lg">{item.title}</p>
										)}
									</div>
									{walletHistory.includes(item.name) ? <p className="text-primary">Regular</p> : <></>}
								</div>
							);
						})}
					</div>
					<div className="flex-col flex-1 items-center hidden md:flex">
						<img src={connectwallectImg} className="w-[160px]" />
					</div>
				</div>
				<div className="mt-8">
					<div className="flex items-center gap-1">
						<IconFaq className="size-[24px]" />
						<p className="text-text-300">FAQ</p>
					</div>
					<div className="flex mt-4 flex-wrap gap-y-3 gap-x-10">
						{walletTutorialData.map((item, index) => {
							return (
								<a
									key={index}
									href={item.link}
									target="_blank"
									rel="nofollow noopener noreferrer"
									className=" group flex gap-1 items-center text-sm text-text-300 min-w-[200px] hover:text-white "
								>
									<span className="size-1 bg-text-300 m-1 group-hover:bg-white"></span>
									<span className="">{item.name}</span>
								</a>
							);
						})}
					</div>
					<div className="mt-4">
						<a
							href={"#"}
							target="_blank"
							rel="nofollow noopener noreferrer"
							className="flex text-sm items-center text-text-300 hover:text-white"
						>
							<span className="">Learn More</span>
							<IconArrowPulldown className="rotate-[270deg] size-5" />
						</a>
					</div>
				</div>
			</ModalView>
		</>
	);
};

export default View;
