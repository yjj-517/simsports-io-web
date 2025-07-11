// <!-- home-title -->
import React, { useState, useRef, useEffect } from "react";

import SlashWhite from "@/assets/imgs/common/slash-white.png";

interface ViewProps {
	TitleData: any;
	Align: boolean; //对齐方式，左对齐为true,反之为右
}

const View: React.FC<ViewProps> = ({ TitleData, Align }: ViewProps) => {
	// 动画title从1->0
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{
				root: null,
				threshold: 0.8, // 组件中心 % 可见时触发
			},
		);
		if (ref.current) observer.observe(ref.current);
		return () => {
			if (ref.current) observer.unobserve(ref.current);
		};
	}, []);
	return (
		<div className={` ${Align ? "" : "items-end text-right "} w-full flex flex-col `} ref={ref}>
			<div
				className={` ${Align ? " lg:flex-row " : " lg:flex-row-reverse "} font-regular flex flex-col lg:items-end `}
				style={{
					opacity: isVisible ? 1 : 0,
					transform: isVisible ? "none" : "translateY(60px) translateZ(0px)",
					transition: "opacity 0.5s ease, transform 0.5s ease",
				}}
			>
				<p className="text-[100px] md:text-[150px] lg:text-[200px] leading-none">
					{TitleData.serial}
				</p>
				<div className="text-[40px] md:text-[60px] lg:text-[80px] leading-none">
					<p>{TitleData.name01}</p>
					<div
						className={` ${Align ? " flex-row " : " flex-row-reverse "} flex items-end gap-2 flex-wrap `}
					>
						<p>{TitleData.name02}</p>
						<span className="size-2 md:size-3 lg:size-4 bg-white mb-1 md:mb-[6px]"></span>
					</div>
				</div>
			</div>
			<div
				style={{
					opacity: isVisible ? 1 : 0,
					transform: isVisible ? "none" : "translateY(60px) translateZ(0px)",
					transition: "opacity 0.7s ease, transform 0.7s ease",
				}}
			>
				<img src={SlashWhite} className="h-[18px] md:h-[24px] lg:h-[34px] w-auto object-cover" />
			</div>
			<p
				className="mt-3 text-base md:text-2xl text-white/80"
				style={{
					opacity: isVisible ? 1 : 0,
					transform: isVisible ? "none" : "translateY(60px) translateZ(0px)",
					transition: "opacity 1s ease, transform 1s ease",
				}}
			>
				{TitleData.text}
			</p>
		</div>
	);
};

export default View;
