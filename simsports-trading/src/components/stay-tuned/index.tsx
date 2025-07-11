// stay-tuned
import React from "react";

import iconNotavailable from "@/assets/imgs/components/stay-tuned/icon-notavailable.png";
const View: React.FC = () => {
	return (
		<>
			<div className="absolute w-full h-full flex flex-col items-center justify-center text-center px-5">
				<img src={iconNotavailable} className="w-[190px]" />
				<p className="mt-9 font-bold">The Feature is not yet available. Please stay tuned.</p>
			</div>
		</>
	);
};

export default View;
