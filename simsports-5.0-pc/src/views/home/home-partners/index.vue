<!-- home-partners -->
<template>
	<div id="home-partners">
		<div class="partners-title">
			<h2 id="home-titele">PARTNERS</h2>
			<p class="title-text">
				More collaborators and supporters are participating in the construction of our esports gaming metaverse.
			</p>
		</div>
		<div class="partners-conter">
			<div v-for="(item, index) in partnersData.arr" :key="index" class="box-conter" :class="`box-conter${index + 1}`">
				<el-image :src="item.imgUrl" class="partners-img" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap"; //gsap
import { ScrollTrigger } from "gsap/ScrollTrigger"; //ScrollTrigger
import wemade from "@/assets/imgs/home/partners/wemade.png";
import finewill from "@/assets/imgs/home/partners/finewill.png";
import soonImg from "@/assets/imgs/home/partners/soon-img.png";
// 合作方数据
const partnersData = reactive({
	arr: [
		{
			imgUrl: soonImg,
		},
		{
			imgUrl: finewill,
		},
		{
			imgUrl: wemade,
		},
		{
			imgUrl: soonImg,
		},
		{
			imgUrl: soonImg,
		},
		{
			imgUrl: soonImg,
		},
		{
			imgUrl: soonImg,
		},
		{
			imgUrl: soonImg,
		},
	],
});

// 滚动动画
gsap.registerPlugin(ScrollTrigger); //注册ScrollTrigger
const gsapSet = () => {
	gsap
		.timeline({
			scrollTrigger: {
				trigger: ".partners-conter", //触发元素
				start: "top bottom", //起始位置
				end: "center center", //结束位置
				scrub: true, //擦除
				// pin: true, //固定定位
				// markers: true, //显示提醒
			},
		})
		.to(".box-conter1", { x: "-20em", y: "-6em" }, "<")
		.to(".box-conter2", { x: "-8em", y: "-15em" }, "<")
		.to(".box-conter3", { x: "4em", y: "-12em" }, "<")
		.to(".box-conter4", { x: "14em", y: "-6em" }, "<")
		.to(".box-conter5", { x: "-18em", y: "5em" }, "<")
		.to(".box-conter6", { x: "-6em", y: "10em" }, "<")
		.to(".box-conter7", { x: "6em", y: "12em" }, "<")
		.to(".box-conter8", { x: "20em", y: "4em" }, "<")
		.from(".partners-title", { opacity: 0 });
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
#home-partners {
	width: 100vw;
	height: 100vh;
	position: relative;
	.partners-title {
		width: 50em;
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -60%);
		.title-text {
			margin-top: 2em;
			font-size: 2em;
			line-height: 1.25em;
			opacity: 0.3;
		}
	}
	.partners-conter {
		.mixin-flex(row,flex-start,flex-start,wrap);
		width: 50em;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		.box-conter {
			.w-h(12.5em,12.5em);
			background: linear-gradient(rgba(@COLOR_F, 0.04) 0%, rgba(@COLOR_F, 0) 100%);
			clip-path: polygon(2em 0, 100% 0, 100% 100%, 0 100%, 0 2em);
			.mixin-flex(row,center,center,wrap);
			.partners-img {
				width: 6.25rem;
			}
		}
	}
}
</style>
