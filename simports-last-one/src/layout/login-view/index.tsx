// <!-- login-view -->
import React, { useState, useEffect, useRef } from "react";

import { useWallet } from "@suiet/wallet-kit";

import ConnectWalletButton from "@/wallet/connect-wallet-botton";

const View: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); //点击触发弹窗
	const loginRef = useRef<HTMLDivElement>(null); // 创建一个引用
	const handleClickOutside = (event: MouseEvent) => {
		if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
			setIsMenuOpen(false);
		}
	};
	useEffect(() => {
		// 添加事件监听器
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// 清除事件监听器
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	const wallet = useWallet();
	const { disconnect, connected } = useWallet();

	return (
		<div className="flex-center">
			<ConnectWalletButton />
			<>
				{connected && (
					<div className="flex-center gap-2 font-primary ">
						{/* chain */}
						<div className="hidden md:flex-center gap-2 bg-white/10 py-2 px-4 rounded-md cursor-default">
							<p>{wallet.chain?.name}</p>
						</div>
						<div className="relative group" ref={loginRef}>
							{/* 钱包地址 */}
							<div
								className="flex-center gap-2 bg-white/10 py-2 px-4 rounded-md cursor-pointer"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
							>
								<img src={wallet.adapter?.icon} className="w-[24px] h-auto object-cover" />
								<p>
									{wallet.account?.address.slice(0, 5) + "..." + wallet.account?.address.slice(-4)}
								</p>
							</div>
							{/* 钱包信息 */}
							<div
								className={`${isMenuOpen ? "block md:hidden" : "hidden"} group-hover:block w-full absolute right-1/2 translate-x-[50%] pt-[10px] z-50`}
							>
								<div className="w-full border border-bgcolor-200 bg-bgcolor-100 rounded-lg p-2 flex flex-col gap-2">
									<p>{wallet.chain?.name}</p>
									<p>
										{wallet.account?.address.slice(0, 5) +
											"..." +
											wallet.account?.address.slice(-4)}
									</p>
									<button className="primary-button py-1" onClick={disconnect}>
										Disconnect
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</>
		</div>
	);
};

export default View;
