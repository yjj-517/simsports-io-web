import React, { useState } from "react";
import { useWallet, ConnectModal } from "@suiet/wallet-kit";

const View: React.FC = () => {
	const { connected } = useWallet();
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			{connected ? (
				<></>
			) : (
				<ConnectModal open={showModal} onOpenChange={open => setShowModal(open)}>
					<button
						className="primary-button w-full min-w-[140px] p-2 text-lg"
						onClick={() => setShowModal(true)}
					>
						Connect Wallet
					</button>
				</ConnectModal>
			)}
		</>
	);
};
export default View;
