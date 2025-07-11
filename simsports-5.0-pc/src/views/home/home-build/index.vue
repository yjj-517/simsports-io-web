<!-- home-build -->
<template>
	<div id="home-build">
		<div class="build-background">
			<el-image :src="aImg" class="build-img build-img01" />
			<el-image :src="dImg" class="build-img build-img02" />
			<el-image :src="cImg" class="build-img build-img03" />
			<el-image :src="bImg" class="build-img build-img04" />
		</div>
		<div class="build-box">
			<h2 id="home-titele">BUILD</h2>
			<p class="build-titele titele-mask01">DECENTRALIZED TOOLS</p>
			<p class="build-titele titele-mask02">DIVERSE GAMES</p>
			<p class="build-titele titele-mask03">ASSET PROTECTION</p>
			<p class="build-titele titele-mask04">COMMUNITY GOVERNANCE</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import aImg from "@/assets/imgs/home/build/a.png";
import bImg from "@/assets/imgs/home/build/b.png";
import cImg from "@/assets/imgs/home/build/c.png";
import dImg from "@/assets/imgs/home/build/d.png";
import { gsap } from "gsap"; //gsap
import { ScrollTrigger } from "gsap/ScrollTrigger"; //ScrollTrigger
// 滚动动画
gsap.registerPlugin(ScrollTrigger); //注册ScrollTrigger
const gsapSet = () => {
	// 图像放大
	gsap.to(
		".build-background", //移动属性名
		{
			scrollTrigger: {
				trigger: "#home-build", //触发元素
				start: "top bottom", //起始位置
				end: "bottom bottom", //结束位置
				scrub: true, //擦除
				// pin: true, //固定定位
				// markers: true, //显示提醒
			},
			width: "100vw",
		},
	);
	// 背景图切换
	gsap
		.timeline({
			scrollTrigger: {
				trigger: "#home-build", //触发元素
				start: "top top", //起始位置
				end: "+=2500", //结束位置
				scrub: true, //擦除
				pin: true, //固定定位
				// markers: true, //显示提醒
			},
		})
		.to(".titele-mask01", { opacity: 1 })
		.to(".titele-mask02", { opacity: 1 })
		.to(".build-img01", { opacity: 0 }, "<")
		.to(".build-img02", { opacity: 1 })
		.to(".titele-mask03", { opacity: 1 })
		.to(".build-img02", { opacity: 0 }, "<")
		.to(".build-img03", { opacity: 1 })
		.to(".titele-mask04", { opacity: 1 })
		.to(".build-img03", { opacity: 0 }, "<")
		.to(".build-img04", { opacity: 1 });
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
#home-build {
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
	.build-background {
		width: 80vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%);
		overflow: hidden;
		opacity: 0.2;
		.build-img {
			width: 120em;
			// width: 120rem;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			opacity: 0;
			&:nth-of-type(1) {
				opacity: 1;
			}
		}
	}
	.build-box {
		width: 75em;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -60%);
		.build-titele {
			margin-top: 0.1em;
			font-size: 5.2em;
			font-weight: bold;
			opacity: 0.2;
			line-height: 1.2em;
			&:nth-child(2n) {
				text-align: right;
			}
		}
	}
}
</style>
