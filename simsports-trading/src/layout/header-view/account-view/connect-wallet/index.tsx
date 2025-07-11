// connect-wallet
import React from "react";

import { layoutStores } from "@/store/index"; //store
import WalletDialog from "./wallet-dialog/index";

const View: React.FC = () => {
	const { walletConnectDialog, setWalletConnectDialog } = layoutStores(); //layout
	return (
		<>
			<button
				className="fillet-button px-3.5 py-2"
				onClick={() => {
					setWalletConnectDialog(true); //连接钱包弹窗(true);
				}}
			>
				Connect Wallet
			</button>
			{walletConnectDialog ? <WalletDialog /> : <></>}
		</>
	);
};

export default View;
