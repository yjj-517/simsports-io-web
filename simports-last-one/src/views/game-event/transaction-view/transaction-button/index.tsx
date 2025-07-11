// <!-- transaction-button -->
import React from "react";

import ConnectWalletButton from "@/wallet/connect-wallet-botton";

import IconSpin from "@/assets/imgs/common/icon-spin.svg?react";

import { useWallet } from "@suiet/wallet-kit";

interface ViewProps {
	isLoading: boolean; //价格数组
	transactionsId: any; //交易方式
	onClickButton: () => void; //点击按钮触发事件
}

const View: React.FC<ViewProps> = ({ isLoading, transactionsId, onClickButton }: ViewProps) => {
	const { connected } = useWallet();
	return (
		<div className="flex-center py-4">
			{connected ? (
				<button
					className="primary-button w-full p-2 text-lg"
					onClick={() => {
						onClickButton();
					}}
				>
					{isLoading ? (
						<IconSpin className="size-7 animate-spin" />
					) : (
						<>{transactionsId?.id === 1 ? <span>BUY</span> : <span>SELL</span>}</>
					)}
				</button>
			) : (
				<ConnectWalletButton />
			)}
		</div>
	);
};

export default View;
