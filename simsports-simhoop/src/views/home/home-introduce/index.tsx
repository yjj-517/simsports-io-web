// home-introduce
import React, { useState } from "react";
import "./index.less";

import { Carousel } from "antd";
import introduceBanner01 from "@/assets/imgs/home/introduce/introduce-banner01.png";
import introduceBanner02 from "@/assets/imgs/home/introduce/introduce-banner02.png";
import introduceBanner03 from "@/assets/imgs/home/introduce/introduce-banner03.png";
import introduceBanner04 from "@/assets/imgs/home/introduce/introduce-banner04.png";
import introduceBanner05 from "@/assets/imgs/home/introduce/introduce-banner05.png";

const View: React.FC = () => {
	// 展示数据-轮播图
	const [carouselData] = useState([
		{
			imgurl: introduceBanner01,
		},
		{
			imgurl: introduceBanner02,
		},
		{
			imgurl: introduceBanner03,
		},
		{
			imgurl: introduceBanner04,
		},
		{
			imgurl: introduceBanner05,
		},
	]);
	return (
		<>
			<div className="main home-introduce">
				<h2 className="fillet-h2-title">INTRODUCE</h2>
				<p className="fillet-paragraph-text02 introduce-text01">
					SimHoop is gearing up for its premier street basketball league, standing out with its high-level matches and intense
					competition, attracting a community of free-spirited enthusiasts of street basketball culture, as well as the attention
					of top players worldwide.
				</p>
				<p className="fillet-paragraph-text02 introduce-text02">
					Distinguished by innovative and flexible rules, SimHoop encourages players to unleash their imagination and showcase
					their unique basketball styles. Beyond traditional arenas, SimHoop's courts span across streets and open spaces,
					allowing players to freely sweat it out beside vibrant walls. With a diverse range of gameplay, SimHoop celebrates
					players' individuality, passion, and freedom, redefining the allure of basketball and ushering in a new era for street
					basketball.
				</p>
				{/* 轮播图 */}
				<Carousel autoplay className="carousel-box">
					{carouselData.map((item, index) => {
						return <img src={item.imgurl} key={index} className="carousel-banner-img" />;
					})}
				</Carousel>
			</div>
		</>
	);
};

export default View;
