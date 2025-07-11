// <!-- exception -->
import React from "react";

import Exception from "@/assets/imgs/exception/exception.png"; //exception

const View: React.FC = () => {
	return (
		<div className="absolute z-20 w-full h-full flex flex-col items-center justify-center text-center px-5 bg-bgcolor-200">
			<img src={Exception} alt="404" className="w-28 object-cover" />
			<p className="font-bold text-3xl mt-12">Page not found</p>
			<p className="mt-5">The page you are looking for doesn't exist or another error occurred</p>
		</div>
	);
};

export default View;
