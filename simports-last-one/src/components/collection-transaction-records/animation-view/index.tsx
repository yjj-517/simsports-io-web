// <!-- animation-view -->
import React from "react";

import IconSpin from "@/assets/imgs/common/icon-spin.svg?react";

const View: React.FC = () => {
	return (
		<div className="flex flex-col items-center gap-8">
			<div className="pb-5 flex gap-2 items-center">
				<span className="animate-spin">
					<IconSpin className="size-6 text-primary" />
				</span>
				<span className="text-xl font-primary ">Your transaction is in progress...</span>
			</div>
		</div>
	);
};

export default View;
