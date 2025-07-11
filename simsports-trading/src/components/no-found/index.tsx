// no-found
import React from "react";

import iconNofound from "@/assets/imgs/account/collections/icon-nofound.png";

interface ViewProps {
	noFoundText: string;
}
const View: React.FC<ViewProps> = ({ noFoundText }: ViewProps) => {
	return (
		<>
			<div className="flex flex-col justify-center items-center gap-9">
				<img src={iconNofound} className="w-[48px] h-auto" />
				<p className="text-lg font-bold">{noFoundText}</p>
			</div>
		</>
	);
};

export default View;
