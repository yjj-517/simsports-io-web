<!-- build-game-solutions -->
<template>
	<div id="build-game-ai-solutions" class="build-game-solutions">
		<h2 class="fillet-h2-title">Game AI Solutions</h2>
		<p class="fillet-paragraph-text game-solutions-text">
			SimSports platform offers game creators multi-dimensional A.I.solutions, including Al video motion capture technology, Al
			character model generation, and adaptive game Al solutions.SimSports A.I. helps games creating massive great contents with
			10x faster than traditional game devs.
		</p>
		<div class="fillet-paragraph-ai">
			<el-image :src="solutionsGroup01" class="solutions-group01" />
			<div class="fillet-paragraph-ai-right">
				<h3 class="fillet-h3-title">Intelligent Agent Al</h3>
				<div class="fillet-paragraph-ai-list">
					<div class="list-box-left"></div>
					<div class="list-box-right">
						<div
							v-for="(item, index) in intelligentData.list"
							:key="index"
							class="list-box-right-list"
							:class="item.state ? 'color-important' : ''"
						>
							<div class="list-box-right-line"></div>
							<p class="fillet-paragraph-text" @click.stop="changeList(index)">
								{{ item.text }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="fillet-paragraph-ai">
			<div class="fillet-paragraph-ai-left">
				<h3 class="fillet-h3-title">Game AI Adaptive System</h3>
				<p class="fillet-paragraph-text02">
					From the player's perspective, Al can provide players with a more immersive gaming experience. Beyond bestowing NPCs
					with intelligence and enhancing competitive gameplay, Al can also contribute to creating a more balanced, fair, and
					orderly gaming environment. Utilizing reinforcement learning models, Al can be transformed into an automated game
					testing tool.
				</p>
				<p class="fillet-paragraph-text02">
					During the design of game characters, real gameplay data can be simulated to adjust character design and evaluate the
					impact of character additions on game balance, Through Al s matchmaking mechanism, it can accurately assess player skill
					levels, match players with similarly skilled teammates and opponents, ensuring fair matches and improving the overall
					gaming experience for players.
				</p>
			</div>
			<el-image :src="solutionsGroup02" class="solutions-group02" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import solutionsGroup01 from "@/assets/imgs/build/build-game-solutions/solutions-group01.png";
import solutionsGroup02 from "@/assets/imgs/build/build-game-solutions/solutions-group02.png";
const intelligentData = reactive({
	list: [
		{
			state: true,
			text: "Develop a comprehensive game Al algorithm based on a dual mechanism of reinforcement learning and imitation learning. Construct a neural network model with game state as input an character control actions as output.",
		},
		{
			state: false,
			text: "The model will act as a character in the game, trying different actions for various in-game situations, adjusting its strategy based on game feedback, until it flawlessly accomplishes the designated tasks.",
		},
		{
			state: false,
			text: "This approach eliminates dependence on manual design, allowing the Al to become intelligent and adaptable after billions of training iterations, capable of real-time perception, analysis, understanding reasoning, decision-making, and action, even in complex and dynamic real-world environments.",
		},
	],
});
// 修改list样式
const changeList = (num: Number) => {
	intelligentData.list.forEach((item: any, index: Number) => {
		if (index == num) {
			item.state = true;
		} else {
			item.state = false;
		}
	});
};
</script>

<style lang="less" scoped>
.build-game-solutions {
	padding: 1.6rem 0 0.8rem;
	.game-solutions-text {
		margin: 0.16rem auto 0;
		width: 10.56rem;
		text-align: center;
	}
	.fillet-paragraph-ai {
		margin-top: 1.26rem;
		.mixin-flex (row,space-between,flex-start,nowrap);
		.solutions-group01 {
			width: 4.32rem;
			margin-left: 0.52rem;
			box-shadow: 0 0.2rem 0.4rem rgba(#151f01);
		}
		.solutions-group02 {
			width: 5rem;
			margin-right: 0.16rem;
			box-shadow: 0 0.2rem 0.4rem rgba(#151f01);
		}
		.fillet-paragraph-ai-left {
			width: 6.2rem;
			.fillet-h3-title {
				margin-top: 0.56rem;
			}
			.fillet-paragraph-text02 {
				margin-top: 0.3rem;
			}
		}
		.fillet-paragraph-ai-right {
			width: 6rem;
			margin-top: 0.68rem;
			.fillet-h3-title {
				margin-left: 0.2rem;
			}
			.fillet-paragraph-ai-list {
				margin-top: 0.3rem;
				position: relative;
				.list-box-left {
					width: 0.03rem;
					background-color: #1f3000;
					position: absolute;
					height: 100%;
				}
				.list-box-right {
					position: relative;
					.list-box-right-list {
						&.color-important {
							.list-box-right-line {
								background-color: @COLOR_THEME;
							}
							.fillet-paragraph-text {
								color: #ffffff;
							}
						}
						.mixin-flex (row,space-between,stretch,nowrap);
						margin-top: 0.5rem;
						&:nth-of-type(1) {
							margin-top: 0;
						}
						.list-box-right-line {
							width: 0.03rem;
						}
						.fillet-paragraph-text {
							width: 5.8rem;
							cursor: pointer;
						}
					}
				}
			}
		}
	}
}
</style>
