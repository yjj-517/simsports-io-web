// build-game-solutions
import React, { useState } from "react";
import "./index.less";

import { Image } from "antd-mobile";
import solutionsGroup01 from "@/assets/imgs/build/build-game-solutions/solutions-group01.png";
import solutionsGroup02 from "@/assets/imgs/build/build-game-solutions/solutions-group02.png";

const View: React.FC = () => {
	// 展示数据
	const [intelligentData] = useState([
		{
			title: "Intelligent Agent Al",
			listimg: solutionsGroup01,
			text: [
				"Develop a comprehensive game Al algorithm based on a dual mechanism of reinforcement learning and imitation learning. Construct a neural network model with game state as input an character control actions as output.",
				"The model will act as a character in the game, trying different actions for various in-game situations, adjusting its strategy based on game feedback, until it flawlessly accomplishes the designated tasks.",
				"This approach eliminates dependence on manual design, allowing the Al to become intelligent and adaptable after billions of training iterations, capable of real-time perception, analysis, understanding reasoning, decision-making, and action, even in complex and dynamic real-world environments.",
			],
		},
		{
			title: "Game AI Adaptive System",
			listimg: solutionsGroup02,
			text: [
				"From the player's perspective, Al can provide players with a more immersive gaming experience. Beyond bestowing NPCs with intelligence and enhancing competitive gameplay, Al can also contribute to creating a more balanced, fair, and orderly gaming environment. Utilizing reinforcement learning models, Al can be transformed into an automated game testing tool.",
				"During the design of game characters, real gameplay data can be simulated to adjust character design and evaluate the impact of character additions on game balance, Through Al s matchmaking mechanism, it can accurately assess player skill levels, match players with similarly skilled teammates and opponents, ensuring fair matches and improving the overall gaming experience for players.",
			],
		},
	]);
	return (
		<div className="main build-game-solutions">
			<h2 className="fillet-h2-title" style={{ textAlign: "left" }}>
				Game AI Solutions
			</h2>
			<p className="fillet-paragraph-text02">
				SimSports platform offers game creators multi-dimensional A.I.solutions, including Al video motion capture technology, Al
				character model generation, and adaptive game Al solutions.SimSports A.I. helps games creating massive great contents with
				10x faster than traditional game devs.
			</p>
			<div className="build-game-solutions-box">
				{intelligentData.map((item, index) => {
					return (
						<div className="list-box" key={index}>
							<h3 className="fillet-h3-title02">{item.title}</h3>
							<div className="list-box-content">
								<Image src={item.listimg} className="solutions-group-img" />
								<div className="list-box-text">
									{item.text.map((t, i) => {
										return (
											<p key={i} className="fillet-paragraph-text04">
												{t}
											</p>
										);
									})}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default View;
