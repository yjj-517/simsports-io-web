// faucets
import React, { useState } from "react";
import { postRequestEth } from "@/http/modules/api"; //接口

import IconLoading from "@/assets/imgs/common/icon-loading.svg";

const View: React.FC = () => {
	const [inputValue, setInputValue] = useState({
		value: "",
		reg: /^0x[a-fA-F0-9]{40}$/i, //正则
		state: true, //正则错误
	});
	// faq文章
	const [faqText] = useState({
		title: "FAQs",
		content: [
			{
				titlt: "How to use it?",
				text: "Enter your wallet address, and hit “Send Me MNT”. We support wallets as received addresses but not smart contracts.",
			},
			{
				titlt: "How does it work?",
				text: "You must register a SimSports account and bind your wallet address. Each 24 hours can receive 0.1 Mantle Sepolia Testnet MNT!",
			},
			{
				titlt: "What is a Mantle Sepolia Testnet faucet?",
				text: "Interacting with Mantle Sepolia Testnet requires MNT tokens as Gas, and the platform provides a testing token collection channel to satisfy the basic on chain interaction Gas in this SimDunk test. Please collect as needed.",
			},
			{
				titlt:
					"I get an error saying “Your wallet address was missing from the request, so we did not send you any test token” even though I did copy my wallet address correctly. What is going on?",
				text: "An Mantle Sepolia Testnet address is 42 characters long including the “0x” at the front. We only support wallets that follow this spec, so please make sure your wallet meets the criteria!",
			},
			{
				titlt:
					"I have been failing the Google Captcha that pops-up when I request test tokens. What do I do?",
				text: "This happens when you are using a VPN, and that is a Google blocker which we do not control. We recommend not using a VPN if that is the case.",
			},
			{
				titlt:
					"If you have extra Sepolia MNT to donate to help other developers, we accept donations at: ",
				text: "0x30Cbeeb3a9bD56d32434614E14C6C6de6c6a09C2",
			},
		],
	});

	const [isLoading, setIsLoading] = useState<boolean>(false); //Loading
	const [errorText, setErrorText] = useState<string>(""); //errorText
	const [transactionHash, setTransactionHash] = useState<string>(""); //errorText
	// 监听input框变化
	const handleInputChangeAddress = (event: any) => {
		const { name, value } = event.target;
		const updatedItem = { ...inputValue };
		if (name === "address") {
			updatedItem.value = value;
			updatedItem.state = updatedItem.reg.test(value);
			if (updatedItem.state) {
				setErrorText("");
			} else {
				setErrorText("Wallet Address is error.");
			}
		}
		setInputValue(updatedItem);
	};
	// 点击按钮
	const onSend = () => {
		setTransactionHash("");
		if (inputValue.value && inputValue.state) {
			if (!isLoading) {
				setErrorText("");
				setIsLoading(true);
				postRequestEth({ user_address: inputValue.value })
					.then((res: any) => {
						setIsLoading(false);
						console.log(res);
						if (res.code === 0) {
							setTransactionHash(res.data.tx_hash);
						} else if (res.code === 11201) {
							setErrorText("One IP/account can only receive once a day.");
						} else if (res.code === 11202) {
							setErrorText("The faucet currently does not have enough balance.");
						} else {
							setErrorText(res.message);
						}
					})
					.catch(err => {
						console.log(err);
						setIsLoading(false);
						setErrorText("Unknown Error. Please check your network");
					});
			}
		} else {
			setErrorText("Wallet Address is error.");
		}
	};
	return (
		<>
			<div className="w-full min-h-[100vh] bg-linear-to-r from-[#00CD83] to-[#008FCD]">
				<section className="main">
					<p className="mt-44 text-5xl font-bold text-center">MANTLE SEPOLIA TESTNET FAUCET</p>
					<p className="mt-5 text-2xl text-center">
						Fast and reliable.One IP/account can only receive 0.1 Mantle Sepolia Testnet MNT/day.
					</p>
					<div className="mt-20 max-w-[1126px] bg-white text-black mx-auto p-6 rounded-2xl md:p-12">
						<div className="flex gap-5 flex-col md:flex-row md:items-center">
							<input
								type="text"
								placeholder="Enter Your Wallet Address (0x...)"
								name={"address"}
								value={inputValue.value}
								onChange={handleInputChangeAddress}
								className="bg-white border-2 border-text-200 rounded-lg min-h-[48px] px-2 flex-1 focus:outline-hidden "
							/>
							<button
								className="primary-button h-[48px] w-full md:w-[280px] text-white text-2xl"
								onClick={() => {
									onSend();
								}}
							>
								{isLoading ? (
									<img src={IconLoading} className="size-[24px] min-w-[24px] animate-spin" />
								) : (
									<span>Send Me MNT</span>
								)}
							</button>
						</div>
						{errorText ? <p className=" mt-5 text-disabled">{errorText}</p> : <></>}

						<div className="w-full h-px bg-text-200 mt-5"></div>
						<div className="mt-5 text-xl">
							<div className="h-[60px] px-3 rounded-t-xl bg-linear-to-r from-[#00CD83] to-[#008FCD] flex items-center text-white">
								Your Transactions
							</div>
							<div className="h-[60px] px-3 flex items-center border rounded-b-xl border-x-text-200 border-b-text-200">
								{transactionHash ? (
									<a
										href={"https://explorer.sepolia.mantle.xyz/tx/" + transactionHash}
										target="_blank"
										rel="nofollow noopener noreferrer"
										className="flex w-full items-center truncate hover:underline"
									>
										<span>{transactionHash}</span>
									</a>
								) : (
									<p>-</p>
								)}
							</div>
						</div>
					</div>
					<div className="mt-20 max-w-[1126px] bg-white text-black mx-auto p-6 rounded-2xl md:p-12">
						<p className="font-bold text-3xl">{faqText.title}</p>
						<div className="mt-5 flex flex-col gap-10">
							{faqText.content.map((item, index) => {
								return (
									<div key={index} className="flex flex-col gap-2">
										<p className="text-text-300 text-2xl">{item.titlt}</p>
										<p className="text-text-300 break-words">{item.text}</p>
									</div>
								);
							})}
						</div>
					</div>
				</section>
				<div className="pt-20"></div>
			</div>
		</>
	);
};

export default View;
