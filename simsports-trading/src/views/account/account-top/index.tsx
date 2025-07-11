// account-top
import React from "react";
import { accountStores, walletStores } from "@/store/index"; //store

import accountTopBg from "@/assets/imgs/account/top/account-top-bg.png";
import iconCopy from "@/assets/imgs/common/icon-copy.png";

const View: React.FC = () => {
	const { userInfo } = accountStores(); //account
	const { walletIfon } = walletStores(); //wallet
	return (
		<>
			<div className="relative h-[340px] overflow-hidden bg-black">
				<div className="w-[1920px] absolute left-2/4 translate-x-[-50%]">
					<img src={accountTopBg} className="h-[340px]" />
				</div>
				<section className="main">
					<div className="flex w-full h-full flex-col justify-end">
						<div className="flex items-end flex-wrap pb-14">
							<div className="flex flex-wrap items-center gap-6">
								<img src={userInfo.avatarImg} className="size-[100px] object-cover rounded-full" />
								<div className="flex gap-1 items-center">
									<div className="font-Quantico font-bold text-lg">
										<span> {walletIfon.address.slice(0, 6) + "..." + walletIfon.address.slice(-4)}</span>
									</div>
									<button
										className="flex"
										onClick={() => {
											navigator.clipboard.writeText(walletIfon.address);
										}}
									>
										<img src={iconCopy} className="size-8" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default View;
