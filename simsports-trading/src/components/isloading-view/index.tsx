// isloading-vies
import React from "react";

import IconSpin from "@/assets/imgs/common/icon-spin.svg?react";
const View: React.FC = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center">
				<IconSpin className="size-10 text-primary animate-spin-slow-1" />
			</div>
		</>
	);
};

export default View;
