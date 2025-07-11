<!-- home-top -->
<template>
	<div id="home-top">
		<div class="home-top-background">
			<el-image :src="topBackground" class="top-background" />
		</div>
		<div class="home-top-box">
			<div class="home-top-box-titele">
				<el-image
					v-for="(item, index) in titeleDate.arr"
					:key="index"
					:src="item"
					class="home-top-titele-img"
					:class="`home-top-titele-img${index + 1}`"
				/>
			</div>
			<p class="home-top-box-titele-text">Built on Community and Ownership Play by Mainstream Economy</p>
		</div>
		<div id="home-game-view">
			<homeGame></homeGame>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap"; //gsap
import { ScrollTrigger } from "gsap/ScrollTrigger"; //ScrollTrigger
import topBackground from "@/assets/imgs/home/top/top-background.png";
import arrotiteleS1 from "@/assets/imgs/home/top/titele-s1.png";
import arrotiteleI from "@/assets/imgs/home/top/titele-i.png";
import arrotiteleM from "@/assets/imgs/home/top/titele-m.png";
import arrotiteleP from "@/assets/imgs/home/top/titele-p.png";
import arrotiteleO from "@/assets/imgs/home/top/titele-o.png";
import arrotiteleR from "@/assets/imgs/home/top/titele-r.png";
import arrotiteleT from "@/assets/imgs/home/top/titele-t.png";
import homeGame from "@/views/home/home-game/index.vue";

const titeleDate = reactive({
	arr: [arrotiteleS1, arrotiteleI, arrotiteleM, arrotiteleS1, arrotiteleP, arrotiteleO, arrotiteleR, arrotiteleT, arrotiteleS1],
});
// 滚动动画
gsap.registerPlugin(ScrollTrigger); //注册ScrollTrigger
const gsapSet = () => {
	// titele-text透明
	gsap.to(
		".home-top-box-titele-text", //移动属性名
		{
			scrollTrigger: {
				trigger: "#home-top", //触发元素
				start: "top top", //起始位置
				end: "+=200", //结束位置
				scrub: true, //擦除
				// pin: true, //固定定位
				// markers: true, //显示提醒
			},
			opacity: 0,
		},
	);
	// titele塌陷
	gsap
		.timeline({
			scrollTrigger: {
				trigger: "#home-top", //触发元素
				start: "top top", //起始位置
				end: "+=2432", //结束位置
				scrub: true, //擦除
				pin: true, //固定定位
				// markers: true, //显示提醒
			},
		})
		.to(".home-top-background", { y: "-10em" }, "<")
		.to(".home-top-titele-img1", { rotate: "-20deg", x: "-5em", y: "10em" }, "<")
		.to(".home-top-titele-img2", { rotate: "-10deg", x: "-5em", y: "5em" }, "<")
		.to(".home-top-titele-img3", { rotate: "-10deg", x: "-2.5em", y: "5em" }, "<")
		.to(".home-top-titele-img4", { rotate: "10deg", x: "-1.8em", y: "5em" }, "<")
		.to(".home-top-titele-img5", { rotate: "20deg", x: "0", y: "5em" }, "<")
		.to(".home-top-titele-img6", { rotate: "20deg", x: "1.25em", y: "5em" }, "<")
		.to(".home-top-titele-img7", { rotate: "10deg", x: "3.125em", y: "5em" }, "<")
		.to(".home-top-titele-img8", { rotate: "10deg", x: "5em", y: "5em" }, "<")
		.to(".home-top-titele-img9", { rotate: "20deg", x: "5em", y: "10em" }, "<")
		.to(".home-top-titele-img3", { opacity: 0 }, "<")
		.to(".home-top-titele-img7", { opacity: 0 }, "<")
		.to(".home-top-titele-img1", { opacity: 0 }, "<")
		.to(".home-top-titele-img2", { opacity: 0 }, "<")
		.to(".home-top-titele-img3", { opacity: 0 }, "<")
		.to(".home-top-titele-img4", { opacity: 0 }, "<")
		.to(".home-top-titele-img5", { opacity: 0 }, "<")
		.to(".home-top-titele-img6", { opacity: 0 }, "<")
		.to(".home-top-titele-img8", { opacity: 0 }, "<")
		.to(".home-top-titele-img9", { opacity: 0 }, "<")
		.from("#home-game-view", { y: "100vh" })
		.to(".home-top-background", { opacity: 0 }, "<");
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
#home-top {
	position: relative;
	width: 100vw;
	height: 76em;
	.home-top-background {
		width: 100vw;
		height: 100vh;
		background: linear-gradient(#2a4f71 0%, #6aaace 72.12%);
		position: absolute;
		.top-background {
			position: absolute;
			bottom: -10em;
			width: 120em;
		}
	}
	.home-top-box {
		position: relative;
		padding-top: 10em;
		.home-top-box-titele {
			.mixin-flex(row,center,center,wrap);
			.home-top-titele-img {
				height: 10em;
				margin: 0 0.32em;
			}
		}
		.home-top-box-titele-text {
			font-size: 2em;
			margin-top: 1.5em;
			text-align: center;
			line-height: 1.25em;
		}
	}
	#home-game-view {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
	}
}
</style>
