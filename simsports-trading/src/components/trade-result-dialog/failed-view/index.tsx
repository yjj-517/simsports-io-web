// <!-- failed-view -->
import React from "react";

import SimsportsLogo from "@/assets/imgs/logo/simsports-logo.svg?react";

interface ViewProps {
	tradeShowData: any;
}
const View: React.FC<ViewProps> = ({ tradeShowData }) => {
	return (
		<div className="flex flex-col items-center gap-10">
			<div>
				<SimsportsLogo className="text-primary w-[64px] h-[84px]" />
			</div>
			<div className="pb-10">
				<span className="text-lg">{tradeShowData.failedText}</span>
			</div>
		</div>
	);
};

export default View;
