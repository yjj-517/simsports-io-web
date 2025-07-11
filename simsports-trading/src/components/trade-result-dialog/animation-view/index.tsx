// <!-- animation-view -->
import React from "react";

import SimsportsLogo from "@/assets/imgs/logo/simsports-logo.svg?react";
import IconSpin from "@/assets/imgs/common/icon-spin.svg?react";

const View: React.FC = () => {
	return (
		<div className="flex flex-col items-center gap-10">
			<div>
				<SimsportsLogo className="text-primary w-[64px] h-[84px]" />
			</div>
			<div className="pb-10 flex gap-2 items-center">
				<span className="animate-spin-slow-1">
					<IconSpin className="size-6 text-primary" />
				</span>
				<span className="text-lg">Waiting for on-chain data feedback...</span>
			</div>
		</div>
	);
};

export default View;
