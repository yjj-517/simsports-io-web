// overview
import React from "react";
import GameIntroduce from "./game-introduce/index";
import DownloadView from "./download/index";
const View: React.FC = () => {
	return (
		<>
			<section className="main">
				<div className="mt-8 flex flex-col-reverse gap-5 xl:flex-row ">
					<GameIntroduce />
					<DownloadView />
				</div>
			</section>
		</>
	);
};

export default View;
