// 404
import React from "react";
import icon404 from "@/assets/imgs/exception/icon-404.png";
const View: React.FC = () => {
	return (
		<>
			<div className="absolute w-full h-full flex flex-col items-center justify-center text-center px-5">
				<img src={icon404} alt="404" className="w-[109px]" />
				<p className="font-Quantico text-primary font-bold text-3xl mt-12">Page not found</p>
				<p className="text-text-100 mt-5">The page you are looking for doesn’t exist or another error occurred</p>
			</div>
		</>
	);
};

export default View;
