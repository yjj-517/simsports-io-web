// video-modal
import React, { useState } from "react";

import { postSaveEmail } from "@/http/modules/api";

import WarningBoxView from "@/components/warning-box-view/index"; //warning
import MaskView from "@/components/pop-ups/mask-view/index"; //弹窗

import SimsportsLogo from "@/assets/imgs/logo/simsports-logo.svg?react";
import IconSpin from "@/assets/imgs/common/icon-spin.svg?react"; //IconSpin

import { message } from "antd";

interface ViewProps {
	ToggleModal: (state: boolean) => void;
}

const View: React.FC<ViewProps> = ({ ToggleModal }: ViewProps) => {
	// email表单数据状态
	const [emailData, setEmailData] = useState<any>({
		value: "", //input值
		state: true, //正则错误
		reg: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, //正则-邮箱
		warningText: "Your email is incorrect.Please try again.", //正则报错
	});
	// email输入框值变化的函数
	const handleInputChangeEmail = (event: any) => {
		const { value } = event.target;
		const isValid = emailData.reg.test(value);
		setEmailData({ ...emailData, value: value, state: isValid });
	};
	// 登录显示
	const [isLoading, setIsLoading] = useState<boolean>(false); //Loading
	// 点击登录
	const sendLogin = () => {
		if (emailData.value && emailData.state) {
			// 发送接口
			if (!isLoading) {
				setIsLoading(true); //Loading
				// 发送接口
				const obj = {
					email: emailData.value, //email
				};
				postSaveEmail(obj)
					.then((res: any) => {
						setIsLoading(false); //Loading
						if (res.code === 0) {
							//登录成功
							localStorage.setItem("sim-intro-email", obj.email);
							ToggleModal(false); //关闭弹窗
						} else {
							message.warning("Your email is incorrect.Please try again.");
						}
					})
					.catch(() => {
						// 取消修改
						setIsLoading(false); //Loading
					});
			}
		}
	};
	return (
		<>
			{/* 弹窗-video-play */}
			<MaskView
				onClose={() => {
					ToggleModal(true);
				}}
				width="500px"
			>
				<div className="max-w-[500px] w-full bg-bgcolor-100/50 backdrop-blur-lg rounded-2xl px-5 py-10">
					<div className="flex justify-center h-[60px]">
						<SimsportsLogo className="w-[240px] h-auto object-cover text-primary " />
					</div>
					<div className="mt-6 border-t border-white/50 w-full"></div>
					<div className="mt-4 flex flex-col gap-6">
						<div className="flex flex-col gap-1 w-full ">
							<input
								type="text"
								className="bg-white/10 h-[44px] px-3 rounded-lg w-full border border-transparent focus:outline-hidden focus:border-primary"
								placeholder="Email"
								onChange={handleInputChangeEmail}
								value={emailData.value}
							/>
							{/* email报错 */}
							{!emailData.state && <WarningBoxView warningData={emailData.warningText} />}
						</div>
						<button
							className={`${emailData.value && emailData.state ? "cursor-pointer" : "cursor-not-allowed"} primary-button w-full h-[40px] text-lg`}
							disabled={!emailData.value || !emailData.state}
							onClick={sendLogin}
						>
							{isLoading ? <IconSpin className="size-7 animate-spin" /> : <span>Welcome</span>}
						</button>
						<p className="text-sm text-text-100">
							For your convenience, you only need to log in once on the same device.
						</p>
					</div>
				</div>
			</MaskView>
		</>
	);
};
export default View;
