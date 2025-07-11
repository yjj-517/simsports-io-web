// events-title
import React from "react";

import simdunkLogo from "@/assets/imgs/logo/simdunk-logo.png";

interface EventsProps {
	eventsTitleData: any;
}
const View: React.FC<EventsProps> = ({ eventsTitleData }: EventsProps) => {
	return (
		<>
			<div className="mt-10">
				<img className="w-[110px]" src={simdunkLogo} />
				<h1 className="mt-4 text-3xl font-bold">{eventsTitleData.title}</h1>
				<img className="mt-10 w-[1200px]" src={eventsTitleData.imgurl} />
			</div>
		</>
	);
};

export default View;
