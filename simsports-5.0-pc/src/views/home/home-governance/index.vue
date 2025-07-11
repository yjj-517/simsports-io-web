<!-- home-governance -->
<template>
	<div id="home-governance">
		<div class="governance-titele">
			<h2 id="home-titele">GOVERNANCE</h2>
			<p class="title-text">It will serve as a decentralized protocol layer, propelling esports into the era of the metaverse.</p>
			<video class="coin-video01" autoplay="true" loop muted playsinline>
				<source :src="coinVideo01" type="video/mp4" />
			</video>
			<video class="coin-video02" autoplay="true" loop muted playsinline>
				<source :src="coinVideo02" type="video/mp4" />
			</video>
		</div>
		<div class="governance-box">
			<div v-for="(item, index) in governanceData.arr" :key="index" class="box-content">
				<el-image :src="boxBorder" class="box-border" />
				<div class="box-content-label">
					<p class="box-conternt-name">{{ item.name }}</p>
					<p class="box-conternt-text">{{ item.text }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue";

import coinVideo01 from "@/assets/video/home/coin-01.mp4"; //币种视频
import coinVideo02 from "@/assets/video/home/coin-02.mp4"; //币种视频
import boxBorder from "@/assets/imgs/home/governance/box-border.png";
import { gsap } from "gsap"; //gsap
import { ScrollTrigger } from "gsap/ScrollTrigger"; //ScrollTrigger
// 治理数据
const governanceData = reactive({
	arr: [
		{
			name: "INFRASTRUCTURE DEVELOPMENT",
			text: "Addressing the requirements and maintenance rewards for constructing a distributed server node network for the gaming platform.",
		},
		{
			name: "GOVERNANCE PLATFORM",
			text: "Token voting for proposals and decision-making on investments, infrastructure pricing, game partners, and platform features.",
		},
		{
			name: "GAME OPERATIONS",
			text: "Leasing distributed servers, airdrops to attract players, and special gameplay rewards.",
		},
		{
			name: "ENHANCING GAMING EXPERIENCE",
			text: "Utilizing NFTs and Tokens on LaunchPad for game purchases, including exchanges and transaction fees.",
		},
	],
});

// 滚动动画
gsap.registerPlugin(ScrollTrigger); //注册ScrollTrigger
const gsapSet = () => {
	gsap.to(
		".governance-box", //移动属性名
		{
			scrollTrigger: {
				trigger: "#home-governance", //触发元素
				start: "top top", //起始位置
				end: "+=500", //结束位置
				scrub: true, //擦除
				pin: true, //固定定位
				// markers: true, //显示提醒
			},
			x: "-46em", //x轴移动
		},
	);
};
onMounted(() => {
	ScrollTrigger.refresh(); //重新计算页面上所有 ScrollTriggers 的位置
	gsapSet();
});
onUnmounted(() => {
	const triggers = ScrollTrigger.getAll(); //返回所有 ScrollTrigger 实例的数组
	triggers.forEach(trigger => {
		trigger.kill(); //终止 ScrollTrigger 实例
	});
});
</script>

<style lang="less" scoped>
#home-governance {
	height: 100%;
	padding: 10em 0;
	.governance-titele {
		position: relative;
		text-align: center;
		#home-titele {
			position: relative;
			z-index: 10;
		}
		.title-text {
			font-size: 2em;
			width: 25em;
			margin: 1em auto 0;
			line-height: 1.25em;
			position: relative;
			z-index: 10;
		}
		.coin-video01 {
			.w-h(12em,12em);
			position: absolute;
			top: -9em;
			left: 75em;
		}
		.coin-video02 {
			.w-h(17.5em,17.5em);
			position: absolute;
			top: 8em;
			left: 20em;
		}
	}
	.governance-box {
		.mixin-flex (row,flex-start,flex-start, nowrap);
		margin: 14em 0 0 16em;
		width: 124em;
		.box-content {
			margin-right: 3em;
			.w-h(28em,17.5em);
			position: relative;
			.box-border {
				position: absolute;
				width: 28em;
			}
			.box-content-label {
				margin: 2em 0 0 2em;
				.box-conternt-name {
					font-size: 1.4em;
					line-height: 1.42em;
					font-weight: bolder;
				}
				.box-conternt-text {
					font-size: 1.125em;
					margin-top: 6em;
					width: 20em;
					line-height: 1.2em;
					opacity: 0.3;
				}
			}
		}
	}
}
</style>
