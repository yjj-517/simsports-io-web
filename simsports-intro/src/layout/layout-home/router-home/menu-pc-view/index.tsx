// router-home
import React from "react";

import { routerList, handleScroll } from "../menu"; //routerlist

const View: React.FC = () => {
	return (
		<>
			<div className=" hidden lg:flex justify-center items-center gap-6 ml-6">
				{routerList.map((item, index) => (
					<div
						key={index}
						className="text-xl  cursor-pointer hover:text-primary"
						onClick={() => {
							handleScroll(item.id);
						}}
					>
						{item.name}
					</div>
				))}
			</div>
		</>
	);
};

export default View;
