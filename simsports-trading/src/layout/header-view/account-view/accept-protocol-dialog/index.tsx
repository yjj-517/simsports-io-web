// accept-accept-dialog
import React, { useState } from "react";

import { userInformationData } from "@/utils/medialink";
import ModalView from "@/components/modal-view/index";
import { postAgreeAgreement, getProfile } from "@/http/modules/account"; //接口

import { layoutStores, accountStores } from "@/store/index"; //store
import { message } from "antd";

import IconSpin from "@/assets/imgs/common/icon-spin.svg?react";
import SimsportsLogo from "@/assets/imgs/logo/simsports-logo.svg?react";

const View: React.FC = () => {
	const { setUserAgreementDialog } = layoutStores(); //layout
	const { editUser } = accountStores(); //account
	// 连接钱包弹窗
	const onClose = () => {
		setUserAgreementDialog(false);
	};
	const [isLoading, setIsLoading] = useState<boolean>(false); //Loading
	//同意协议
	const onAgreeAgreement = async () => {
		if (!isLoading) {
			setIsLoading(true); //Loading
			// 同意协议
			postAgreeAgreement()
				.then((res: any) => {
					if (res.code === 0) {
						// 重新获取用户信息
						getProfile().then((res: any) => {
							if (res.code === 0) {
								editUser(res.data.user_info);
							}
							setIsLoading(false); //Loading
							setUserAgreementDialog(false); //关闭弹窗
						});
					} else {
						message.warning(res.message);
						setIsLoading(false); //Loading
					}
				})
				.catch((err: any) => {
					message.warning(err.message);
					setIsLoading(false); //Loading
				});
		}
	};
	return (
		<>
			<ModalView onClose={onClose} width="480px" closable={true}>
				<div className="flex flex-col justify-center items-center max-w-[400px] mx-auto">
					<SimsportsLogo className="w-[64px] h-[84px] text-primary" />
					<p className="mt-10 text-lg">Welcome to SimSports</p>
					<div className="mt-6 text-text-100 text-center">
						<span>By connecting your wallet and using SimSports, you agree to our</span>
						<a
							href={userInformationData.termsOfUse.link}
							target="_blank"
							rel="nofollow noopener noreferrer"
							className="font-bold mx-1 text-primary hover:underline"
						>
							{userInformationData.termsOfUse.name}
						</a>
						<span>and</span>
						<a
							href={userInformationData.privacyPolicy.link}
							target="_blank"
							rel="nofollow noopener noreferrer"
							className="font-bold mx-1 text-primary hover:underline"
						>
							{userInformationData.privacyPolicy.name}
						</a>
						<span>.</span>
					</div>
					<button
						className="fillet-button mt-8 py-2.5 text-lg  w-full"
						onClick={() => {
							onAgreeAgreement();
						}}
					>
						{isLoading ? <IconSpin className="size-6 text-primary animate-spin-slow-1" /> : <span>Accept</span>}
					</button>
				</div>
			</ModalView>
		</>
	);
};

export default View;
