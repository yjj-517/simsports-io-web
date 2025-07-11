// simdunk
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SimdunkTop from "./simdunk-top/index";
import RouterTab from "@/components/router-tab/index";

const View: React.FC = () => {
	const [simdunkTabPath] = useState<string>("/simdunk"); //tab
	const [simdunkTab] = useState([
		{
			path: "/simdunk/overview",
			title: "Overview",
		},
		{
			path: "/simdunk/collections",
			title: "Collections",
		},
		{
			path: "/simdunk/cast",
			title: "Cast",
		},
	]);
	return (
		<>
			<SimdunkTop />
			<section className="main mt-10">
				<RouterTab routerTabData={simdunkTab} routerTabPath={simdunkTabPath} />
			</section>
			<Outlet />
			<div className="pt-20"></div>
		</>
	);
};

export default View;
