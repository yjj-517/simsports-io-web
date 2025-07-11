// partners-view
import React, { useState } from "react";

import IconFinewill from "@/assets/imgs/partners/icon-finewill.svg?react";
import IconInterval from "@/assets/imgs/partners/icon-interval.svg?react";
import SimsportsLogo from "@/assets/imgs/logo/simsports-logo-text.svg?react"; //logo

const PartnerItem: React.FC<{ item: any; AlignState?: boolean }> = ({ item, AlignState }) => {
	return (
		<div className="h-[32px] flex items-center shrink-0">
			{item.icon ? (
				<item.icon
					className={`${item.icon === SimsportsLogo ? "h-[50px] " : " h-full "} ${AlignState ? "" : "text-primary"} w-auto`}
				/>
			) : (
				<p className={`${AlignState ? "" : "text-primary"} text-2xl font-regular`}>{item.text}</p>
			)}
			<IconInterval className={`${AlignState ? "" : "text-primary"} h-full w-auto px-3`} />
		</div>
	);
};

interface ViewProps {
	AlignState?: boolean; //移动方向-默认-false-左-true-右
}

const View: React.FC<ViewProps> = ({ AlignState }: ViewProps) => {
	// 动画时长
	const [animatedTime] = useState(400);
	// 赞助商数组
	const [partnersData] = useState([
		{
			icon: IconFinewill,
			text: "ANGEL ROUND FUNDED BY FINE VISION",
		},
		{
			icon: SimsportsLogo,
			text: "ANGEL ROUND FUNDED BY FINE VISION",
		},
		{
			icon: "",
			text: "ANGEL ROUND FUNDED BY FINE VISION",
		},
	]);
	// 生成一个新数组，重复 partnersData 3 次
	const repeatedPartnersData = Array.from({ length: 10 }, () => partnersData).flat();
	return (
		<>
			<div
				className={`${AlignState ? "bg-linear-to-r from-primary to-regular" : "bg-bgcolor-100 "} flex overflow-hidden h-[54px]`}
			>
				<div
					className="flex items-center shrink-0"
					style={{
						animation: `${AlignState ? "animation-right-01" : "animation-left-01"} ${animatedTime}s linear infinite `,
					}}
				>
					{repeatedPartnersData.map((item, index) => (
						<PartnerItem key={index} item={item} AlignState={AlignState} />
					))}
				</div>
				<div
					className="flex items-center shrink-0"
					style={{
						animation: `${AlignState ? "animation-right-02" : "animation-left-02"} ${animatedTime}s linear infinite `,
						animationDelay: `calc(${animatedTime}s / -2)`,
					}}
				>
					{repeatedPartnersData.map((item, index) => (
						<PartnerItem key={index} item={item} AlignState={AlignState} />
					))}
				</div>
			</div>
		</>
	);
};

export default View;
