// <!-- exception -->
// exception
import React from "react";

import Exception from "@/assets/imgs/exception/exception.png"; //exception

const View: React.FC = () => {
	return (
		<div className="absolute w-full h-full flex flex-col items-center justify-center text-center px-5">
			<img src={Exception} alt="404" className="w-[109px] object-cover" />
			<p className="font-primary font-bold text-3xl mt-12">Page not found</p>
			<p className="mt-5">The page you are looking for doesn’t exist or another error occurred</p>
		</div>
	);
};

export default View;
