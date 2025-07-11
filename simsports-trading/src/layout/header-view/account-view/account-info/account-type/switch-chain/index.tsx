// <!-- switch-chain -->
import React, { useState, useEffect } from "react";

import ChainDialog from "./chain-dialog/index";
import { chainData } from "@/utils/wallet";

import { walletStores } from "@/store/index"; //store
const View: React.FC = () => {
	const [showModal, setShowModal] = useState<boolean>(false); //弹窗
	const [chainDatas] = useState([chainData.ethereum, chainData.arbitumOne, chainData.arbitrumSepolia]); //chain
	// 修改弹窗状态
	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const { walletIfon } = walletStores(); //wallet
	const [isLoading, setIsLoading] = useState<boolean>(false); //Loading
	// 监听chain改变
	const isChain = () => {
		const isChainExists = chainDatas.some(chain => chain.id === walletIfon.chainId);
		if (isChainExists) {
			setIsLoading(true); //Loading
		} else {
			setIsLoading(false); //Loading
		}
	};
	useEffect(() => {
		isChain();
	}, [walletIfon.chainId]);
	return (
		<>
			<div className="flex justify-center items-center gap-2">
				{isLoading ? (
					<button
						className="bg-bgcolor-400 rounded-lg size-10 flex items-center justify-center"
						onClick={() => {
							toggleModal();
						}}
					>
						{chainDatas.map((item, index) => {
							return (
								<span key={index}>{walletIfon.chainId === item.id ? <img src={item.icon} className="size-6" /> : <></>}</span>
							);
						})}
					</button>
				) : (
					<button
						className="fillet-button px-3.5 py-2"
						onClick={() => {
							toggleModal();
						}}
					>
						Switch Network
					</button>
				)}
			</div>
			<ChainDialog showModal={showModal} toggleModal={toggleModal} />
		</>
	);
};

export default View;
