// <!-- account-info -->
import React from "react";
import AccountType from "./account-type/index";
import AccountAddress from "./account-address/index";

const View: React.FC = () => {
	return (
		<div className="flex flex-row gap-2 items-center">
			<div className="hidden md:flex">
				<AccountType />
			</div>
			<AccountAddress />
		</div>
	);
};

export default View;
