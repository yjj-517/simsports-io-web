import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Toaster } from "react-hot-toast"; //Toaster-全局提示

import "@/styles/index.css"; //styles

import { SuietWalletKit } from "@/wallet/suiet-wallet-kit"; //SuietWalletKit

//StrictModew这是严格模式,检查仅在开发模式下运行；它们不会影响生产构建。建议ts初学者开启这个模式,便于代码的良好书写
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.StrictMode>
		<SuietWalletKit>
			<App />
			<Toaster toastOptions={{ duration: 3000 }} />
		</SuietWalletKit>
	</React.StrictMode>,
);
