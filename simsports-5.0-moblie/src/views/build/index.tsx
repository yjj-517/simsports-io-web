// Build
import React from "react";
import BuildSimsports from "./build-simsports/index";
import BuildGamePlatform from "./build-game-platform/index";
import BuildGameSolutions from "./build-game-solutions/index";

const View: React.FC = () => {
	return (
		<>
			<BuildSimsports />
			<BuildGamePlatform />
			<BuildGameSolutions />
		</>
	);
};

export default View;
