// <!-- suiet-wallet-kit -->
import React from "react";

import { WalletProvider } from "@suiet/wallet-kit";
import "@suiet/wallet-kit/style.css";

// Wrap your application with this component.
export const SuietWalletKit = ({ children }: React.PropsWithChildren) => {
	return <WalletProvider>{children}</WalletProvider>;
};
