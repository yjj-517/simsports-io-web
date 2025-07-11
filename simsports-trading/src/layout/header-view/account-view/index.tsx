// <!-- account-view -->
import React, { useEffect } from "react";
import AcceptProtocolDialog from "./accept-protocol-dialog/index";
import ConnectWallet from "./connect-wallet/index";
import AccountInfo from "./account-info/index";
import { accountStores, layoutStores } from "@/store/index"; //store
import { changeWallet } from "@/wallet/wallet"; //钱包
const View: React.FC = () => {
	useEffect(() => {
		// 监听钱包变化
		changeWallet();
	}, []);
	const { userState } = accountStores(); //account
	const { userAgreementDialog } = layoutStores(); //layout-用户协议
	return (
		<>
			{userAgreementDialog ? <AcceptProtocolDialog /> : <></>}
			<div className="shrink-0">
				<div className="flex flex-row gap-3 items-center">{userState ? <AccountInfo /> : <ConnectWallet />}</div>
			</div>
		</>
	);
};

export default View;
