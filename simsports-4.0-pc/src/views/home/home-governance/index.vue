<!-- home-governance -->
<template>
	<div id="home-governance" class="main">
		<h3>It will serve as a decentralized protocol layer, propelling esports into the era of the metaverse.</h3>
		<h2>
			<span>GOVERNANCE</span>
			<el-image :src="governanceIcon" class="governance-icon" />
		</h2>
		<div id="governance-transform" class="governance-box">
			<div class="governance-box-left" :class="{ active: transform.state }">
				<p>$Bravo makes players and games the one.</p>
				<p>
					SimSports is a community and game asset-driven platform, with $Bravo at its core.Players can earn $bravo through gaming
					and participate in governing the SimSports platform, engaging in the development of gaming infrastructure and exploring
					a variety of gaming experiences available on SimSports.
				</p>
				<!-- <button>More</button> -->
			</div>
			<el-image :src="governancePeople" class="governance-people" :class="{ active: transform.state }" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue";
import governanceIcon from "@/assets/imgs/home/governance/governance-icon.png";
// import governanceSmoke from "@/assets/imgs/home/governance/governance-smoke.png";
import governancePeople from "@/assets/imgs/home/governance/governance-people.png";
const transform = reactive({
	state: false,
});

// 监听可视距离触发动画
const handleScroll = () => {
	const targetElement = document.getElementById("governance-transform");
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
	background: url("/src/assets/imgs/home/governance/governance-smoke.png") no-repeat;
	.mixin-flex (column,center,center,nowrap);
	h3 {
		font-size: 2.25rem;
		width: 41rem;
		text-align: center;
		line-height: 3.375rem;
	}
	h2 {
		margin-top: 4rem;
		font-size: 4.375rem;
		color: @COLOR_L;
		.mixin-flex (row,center,center,nowrap);
		.governance-icon {
			margin-left: 1.25rem;
			width: 3.6rem;
		}
	}
	.build-button {
		font-size: 1.875rem;
		padding: 1.5rem 4rem;
		background-color: #f15a24;
		border-radius: 2rem;
		margin-top: 8.75rem;
	}
	.governance-box {
		.w-h(71.875rem,67.5rem);
		background: url("/src/assets/imgs/home/governance/governance-aperture.png") no-repeat;
		position: relative;
		overflow: hidden;
		.governance-box-left {
			position: absolute;
			top: 13.625rem;
			left: -31rem;
			transition: transform 1s ease;
			&.active {
				transform: translateX(34rem);
			}
			p {
				width: 31rem;
				font-size: 1.625rem;
				line-height: 1.875rem;
				&:nth-of-type(2) {
					margin-top: 2rem;
				}
			}
			button {
				padding: 1.25rem 3.75rem;
				background-color: #29abe2;
				font-size: 1.8rem;
				color: @COLOR_B;
				border-radius: 4rem;
				margin-top: 17rem;
			}
		}
		.governance-people {
			width: 42.5rem;
			position: absolute;
			top: 2.375rem;
			right: -42.5rem;
			transition: transform 1s ease;
			&.active {
				transform: translateX(-42.5rem); /* 移动到下方 */
			}
		}
	}
}
</style>
