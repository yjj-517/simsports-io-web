<!-- home-keypoint -->
<template>
	<div id="keypoint-transform" class="main">
		<div class="governance-keypoint">
			<div v-for="(item, index) in governanceGames.arr" :key="index" class="keypoint-box">
				<div class="keypoint-box-content" :class="{ active: transform.state }">
					<p class="keypoint-box-title">
						<span> </span><span>{{ item.title }}</span> <span></span>
					</p>
					<div class="keypoint-box-text">
						<el-image :src="item.governanceImg" class="governance-background" />
						<p class="text-box" :class="{ active: transform.state }">
							{{ item.text }}
						</p>
					</div>
				</div>
				<el-image :src="item.imgurl" class="governance-game-people" :class="{ active: transform.state }" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue";
import governanceGamePeople01 from "@/assets/imgs/home/governance/governance-game-people01.png";
import governanceGamePeople02 from "@/assets/imgs/home/governance/governance-game-people02.png";
import governanceGamePeople03 from "@/assets/imgs/home/governance/governance-game-people03.png";
import governanceGamePeople04 from "@/assets/imgs/home/governance/governance-game-people04.png";

import governanceGamebackground01 from "@/assets/imgs/home/governance/governance-game-background01.png";
import governanceGamebackground02 from "@/assets/imgs/home/governance/governance-game-background02.png";
import governanceGamebackground03 from "@/assets/imgs/home/governance/governance-game-background03.png";
import governanceGamebackground04 from "@/assets/imgs/home/governance/governance-game-background04.png";
const transform = reactive({
	state: false,
});
// 游戏数据
const governanceGames = reactive({
	arr: [
		{
			imgurl: governanceGamePeople01,
			governanceImg: governanceGamebackground01,
			title: "Participation in Infrastructure Development",
			text: "Addressing the requirements and maintenance rewards for constructing a distributed server node network for the gaming platform.",
		},
		{
			imgurl: governanceGamePeople02,
			governanceImg: governanceGamebackground02,
			title: "Governance Platform",
			text: "Token voting for proposals and decision-making on investments, infrastructure pricing, game partners, and platform features.",
		},
		{
			imgurl: governanceGamePeople03,
			governanceImg: governanceGamebackground03,
			title: "Game Operations",
			text: "Leasing distributed servers, airdrops to attract players, and special gameplay rewards.",
		},
		{
			imgurl: governanceGamePeople04,
			governanceImg: governanceGamebackground04,
			title: "Enhancing Gaming Experience",
			text: "Utilizing NFTs and Tokens on LaunchPad for game purchases, including exchanges and transaction fees.",
		},
	],
});
// 监听可视距离触发动画
const handleScroll = () => {
	const targetElement = document.getElementById("keypoint-transform");
	if (targetElement) {
		const targetElementPosition = targetElement.getBoundingClientRect().top; //当前元素距离可视屏幕的高度
		const scrollPosition = document.body.clientHeight / 2; //当前可视屏幕的高度
		if (scrollPosition >= targetElementPosition) {
			// 触发动画效果
			transform.state = true;
		}
	}
};
onMounted(() => {
	window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
	window.addEventListener("scroll", handleScroll);
});
</script>

<style lang="less" scoped>
.governance-keypoint {
	.keypoint-box {
		position: relative;
		overflow: hidden;
		height: 24.625rem;
		&:not(:first-child) {
			margin-top: -5rem;
		}
		&:nth-child(2n + 1) {
			.keypoint-box-content {
				right: -66rem;
				transition: transform 2.5s ease;
				&.active {
					transform: translateX(-70rem);
				}
				.text-box {
					top: 50%;
					right: -48rem;
					transform: translate(0, -50%);
					transition: transform 2s ease;
					&.active {
						transform: translate(-70rem, -50%);
					}
				}
			}
			.governance-game-people {
				left: -14.75rem;
				transition: transform 1s ease;
				&.active {
					transform: translateX(72rem);
				}
			}
		}
		&:nth-child(2n) {
			.keypoint-box-content {
				left: -66rem;
				transition: transform 2.5s ease;
				&.active {
					transform: translateX(70rem);
				}

				.text-box {
					top: 50%;
					left: -48rem;
					transform: translate(0, -50%);
					transition: transform 2s ease;
					&.active {
						transform: translate(70rem, -50%);
					}
				}
			}
			.governance-game-people {
				right: -14.75rem;
				transition: transform 1s ease;
				&.active {
					transform: translateX(-72rem);
				}
			}
		}
		.keypoint-box-content {
			position: absolute;
			top: 2rem;
			.keypoint-box-title {
				.mixin-flex (row,center,center,nowrap);
				span:last-child,
				span:first-child {
					.w-h(1.25rem,1.25rem);
					background-color: @COLOR_B;
					border-radius: 50%;
				}
				span:nth-of-type(2) {
					font-size: 2rem;
					font-weight: bold;
					margin: 0 1rem;
				}
			}
			.keypoint-box-text {
				.w-h(65.375rem, 12.375rem);
				margin-top: 1.25rem;
				position: relative;
				.text-box {
					width: 38rem;
					font-size: 1.625rem;
					line-height: 2rem;
					position: absolute;
				}
			}
		}
		.governance-game-people {
			width: 14.75rem;
			position: absolute;
		}
	}
}
</style>
