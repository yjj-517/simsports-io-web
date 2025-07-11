<!-- home-game -->
<template>
	<div id="home-game" class="main">
		<!-- <el-image :src="logoName" class="logo-name" /> -->
		<h3>Esports games have unlimited possibilities in the world of Web3.</h3>
		<h2>
			<span>GAME</span>
			<el-image :src="gameIcon" class="game-icon" />
		</h2>
		<div id="game-transform" class="game-simdunk">
			<el-image :src="simdunkBackground" class="simdunk-background" :class="{ active: transform.state }" />
			<div class="game-simdunk-box">
				<el-image :src="gamePeople" class="simdunk-people" :class="{ active: transform.state }" />
				<div class="game-simdunk-text" :class="{ active: transform.state }">
					<p class="text-title">SIMDUNK</p>
					<div class="text-box">
						<p>
							SimDunk is a 3v3 street basketball game where players compete using character NFTs, earn $Dunk in-game coin by
							winning matches, and level up their NFTs to join esports events or profit from the NFT marketplace.
						</p>
					</div>
					<el-image :src="gameLogo" class="game-logo" />
					<!-- <button>View Game</button> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue";
import gameIcon from "@/assets/imgs/home/game/game-icon.png";
import simdunkBackground from "@/assets/imgs/home/game/simdunk-background.png";
import gamePeople from "@/assets/imgs/home/game/game-people.png";
import gameLogo from "@/assets/imgs/home/game/game-logo.png";
const transform = reactive({
	state: false,
});
// 监听可视距离触发动画
const handleScroll = () => {
	const targetElement = document.getElementById("game-transform");
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
.main {
	padding-top: 8rem;
	background: url("/src/assets/imgs/home/game/game-smoke.png") no-repeat;
	h3 {
		font-size: 2.25rem;
		width: 37.5rem;
		text-align: center;
		margin: 0 auto;
		line-height: 3.375rem;
	}
	h2 {
		margin-top: 4rem;
		font-size: 4.375rem;
		color: @COLOR_L;
		.mixin-flex (row,center,center,nowrap);
		.game-icon {
			margin-left: 1.25rem;
			width: 3.75rem;
		}
	}
	.game-simdunk {
		margin-top: 4.875rem;
		height: 61rem;
		position: relative;
		overflow: hidden;
		.simdunk-background {
			position: absolute;
			width: 75rem;
			margin-top: 61rem;
			transition: transform 1s ease;
			&.active {
				transform: translateY(-61rem);
			}
		}
		.game-simdunk-box {
			width: 100%;
			position: absolute;
			top: 0;
			.mixin-flex (row,space-between,flex-start,nowrap);
			.simdunk-people {
				width: 36.25rem;
				margin: 0 0 0 3.4rem;
				transform: scale(0);
				transition: transform 1s ease;
				&.active {
					transform: scale(1);
				}
			}
			.game-simdunk-text {
				.mixin-flex (column,space-between,flex-end,nowrap);
				margin-right: -36rem;
				transition: transform 1s ease;
				&.active {
					transform: translateX(-38rem);
				}
				.text-title {
					margin-top: 7.125rem;
					font-size: 4.25rem;
					font-weight: bold;
				}
				.text-box {
					font-size: 1.625rem;
					width: 34rem;
					text-align: right;
					line-height: 2rem;
					margin-top: 2.625rem;
				}
				.game-logo {
					width: 18.75rem;
					margin-top: 4rem;
				}
				button {
					margin: 7.5rem 2.25rem 0 0;
					font-size: 2.25rem;
					padding: 1.25rem 2rem;
					color: @COLOR_L;
					background: rgba(0, 0, 0, 0.3);
					border: 0.125rem solid @COLOR_L;
					border-radius: 5rem;
				}
			}
		}
	}
}
</style>
