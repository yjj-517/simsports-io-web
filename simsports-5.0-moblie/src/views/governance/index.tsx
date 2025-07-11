// governance
import React from "react";
import GovernanceTop from "./governance-top/index";
import GovernanceToken from "./governance-token/index";
import GovernanceUtilities from "./governance-utilities/index";
const View: React.FC = () => {
	return (
		<>
			<GovernanceTop />
			<GovernanceToken />
			<GovernanceUtilities />
		</>
	);
};

export default View;
