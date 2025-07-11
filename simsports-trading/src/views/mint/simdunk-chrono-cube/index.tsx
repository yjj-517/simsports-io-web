// simdunk-chrono-cube
import React, { useState } from "react";

import ChronoCubev01 from "./chrono-cube-01/index";
import ChronoCubev02 from "./chrono-cube-02/index";

import bgImg from "@/assets/imgs/mint/simdunk-chrono-cube/bg-img.png";
import titleImg01 from "@/assets/imgs/mint/simdunk-chrono-cube/title-img01.png";
import titleImg02 from "@/assets/imgs/mint/simdunk-chrono-cube/title-img02.png";
import titleImg03 from "@/assets/imgs/mint/simdunk-chrono-cube/title-img03.png";

import boxBule from "@/assets/imgs/mint/simdunk-chrono-cube/box-bule.png";
import boxBuleText from "@/assets/imgs/mint/simdunk-chrono-cube/box-bule-text.png";
import boxGold from "@/assets/imgs/mint/simdunk-chrono-cube/box-gold.png";
import boxGoldText from "@/assets/imgs/mint/simdunk-chrono-cube/box-gold-text.png";
const View: React.FC = () => {
	const [showModal01, setShowModal01] = useState(false); //弹窗-01
	const [showModal02, setShowModal02] = useState(false); //弹窗-02
	// 修改弹窗状态
	const toggleModal01 = () => {
		setShowModal01(!showModal01);
	};
	const toggleModal02 = () => {
		setShowModal02(!showModal02);
	};

	return (
		<>
			<div className="relative min-h-[1080px] overflow-hidden bg-black">
				<div className="w-[1920px] absolute left-2/4 translate-x-[-50%]">
					<img src={bgImg} className="h-[1080px]" />
				</div>
				<section className="main">
					<div className="mt-10 flex flex-wrap justify-center items-center gap-3">
						<img src={titleImg01} className="max-h-[50px] md:max-h-[60px] lg:max-h-[80px]" />
						<img src={titleImg02} className="max-h-[50px] md:max-h-[60px] lg:max-h-[80px]" />
						<img src={titleImg03} className="max-h-[50px] md:max-h-[60px] lg:max-h-[80px]" />
					</div>
					<div className="flex justify-between items-center flex-col md:flex-row md:items-start">
						<div
							className="max-w-[480px] flex flex-col relative cursor-pointer pb-[50px]"
							onClick={() => {
								toggleModal01();
							}}
						>
							<div className="animate-spin-slow-5">
								<img src={boxBule} />
							</div>
							<div className="w-full absolute bottom-0">
								<img src={boxBuleText} className="m-auto w-[45%]" />
							</div>
						</div>
						<div
							className="md:mt-40 max-w-[480px] flex flex-col relative cursor-pointer pb-[50px]"
							onClick={() => {
								toggleModal02();
							}}
						>
							<div className="animate-spin-slow-5">
								<img src={boxGold} />
							</div>
							<div className="w-full absolute bottom-0">
								<img src={boxGoldText} className="m-auto w-[45%]" />
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="absolute left-2/4 translate-x-[-50%] overflow-hidden w-full"></div>
			{showModal01 && <ChronoCubev01 onClose={toggleModal01} />}
			{showModal02 && <ChronoCubev02 onClose={toggleModal02} />}
		</>
	);
};

export default View;
