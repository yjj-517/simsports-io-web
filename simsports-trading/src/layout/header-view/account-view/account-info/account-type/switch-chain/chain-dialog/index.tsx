// chain-dialog
import React, { useState } from "react";

import ModalView from "@/components/modal-view/index";
import { chainData } from "@/utils/wallet";
import { walletStores } from "@/store/index"; //store

import { ArbitrumOne, ArbitrumSepolia, Ethereum } from "@particle-network/chains"; //chain
import { switchWalletChain } from "@/wallet/wallet"; //钱包

import SimsportsLogo from "@/assets/imgs/logo/simsports-logo.svg?react";

interface ViewProps {
	toggleModal: () => void;
	showModal: boolean;
}

const View: React.FC<ViewProps> = ({ showModal, toggleModal }: ViewProps) => {
	const [chainDatas] = useState([chainData.ethereum, chainData.arbitumOne, chainData.arbitrumSepolia]); //chain
	const { walletIfon } = walletStores(); //wallet
	// change -chain
	const changeChain = async (chainid: any) => {
		if (chainid == "1") {
			await switchWalletChain(Ethereum);
		} else if (chainid == "42161") {
			await switchWalletChain(ArbitrumOne);
		} else if (chainid == "421614") {
			await switchWalletChain(ArbitrumSepolia);
		}
	};
	return (
		<>
			{showModal && (
				<ModalView onClose={toggleModal} width="360px" closable={true}>
					<SimsportsLogo className="w-[64px] h-[84px] text-primary mx-auto" />
					<p className="mt-5 text-lg text-center">Switch Chain</p>
					<div className="mt-5 flex flex-col gap-5">
						{chainDatas.map((item, index) => {
							return (
								<div
									key={index}
									onClick={() => {
										changeChain(item.id);
									}}
									className={`${walletIfon.chainId === item.id ? "bg-primary hover:bg-primary" : "bg-black hover:bg-bgcolor-500"} flex flex-row justify-between items-center p-2 rounded-xl  cursor-pointer  `}
								>
									<div className="flex items-center gap-2">
										<img src={item.icon} className="size-7" />
										<span className="font-bold">{item.name}</span>
									</div>
									{walletIfon.chainId === item.id ? (
										<div className="flex items-center gap-2">
											<span>Connected</span>
											<span className="size-2 bg-secondary rounded-full"></span>
										</div>
									) : (
										<></>
									)}
								</div>
							);
						})}
					</div>
				</ModalView>
			)}
		</>
	);
};

export default View;
