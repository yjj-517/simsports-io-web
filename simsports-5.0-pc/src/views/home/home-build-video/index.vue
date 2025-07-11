<!-- home-build-video -->
<template>
	<div id="build-conter">
		<video class="build-video" muted playsinline>
			<source :src="buildVideo" type="video/mp4" />
		</video>
		<div class="build-conter-right">
			<div v-for="(item, index) in buildData.arr" :key="index" class="build-conter-box">
				<p class="build-conter-name">BUILD</p>
				<h3 class="build-conter-titele">{{ item.titele }}</h3>
				<p class="build-conter-text">{{ item.text }}</p>
				<el-link :underline="false" :href="item.link">
					<el-image :src="buildBorder" class="build-border" />
					<span class="medium-text">View More</span>
				</el-link>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue";
import buildVideo from "@/assets/video//home/build-video.mp4"; //game视频
import buildBorder from "@/assets/imgs/home/build/build-border.png";
import { gsap } from "gsap"; //gsap
import { ScrollTrigger } from "gsap/ScrollTrigger"; //ScrollTrigger
// build数据
const buildData = reactive({
	arr: [
		{
			titele: "Web3 Game Launchpad",
			text: "Balancing the gaming experience between Web2 and Web3, we aim to bring Web3 gamers who own assets and love gaming into our game through Proof-of-Play and NFT community gameplay. Creating a groundbreaking Web3 game available on the Apple App Store and Google Play.",
			link: "/build",
		},
		{
			titele: "Web3 Game Creation",
			text: "SimSports will connect NFT brands with game creators to enrich the game with content and engagement. Additionally, by utilizing AI, we aim to enhance the fun of competitive gaming. The incorporation of AI-based features for enhanced gaming abilities will revolutionize the gaming experience.",
			link: "/build",
		},
		{
			titele: "Web3 Cross Gaming Experience",
			text: "SimSports offers players a unique cross-game gaming experience where NFTs and token assets from one game can seamlessly be used or traded in other supported games. This will introduce new business models for all games.",
			link: "/build",
		},
		{
			titele: "Web3 Gaming Node Network",
			text: "SimSports is pioneering distributed game servers to ensure security and fairness in Web3 gaming. By leveraging a dual-consensus mechanism (Proof-of-Work and Proof-of-Play), community members establish nodes to form a distributed gaming server network.",
			link: "/build",
		},
		{
			titele: "E-Sports Events Driven By Fans",
			text: "SimSports will drive a new era of esports leagues through a fan-driven economic cycle. The game hosts both online and offline esports tournaments, promoting interactions between fans and collaborating celebrities, enhancing the social gaming experience, and expanding the utility of Web3 gaming assets.",
			link: "/build",
		},
		{
			titele: "Web3 Gaming Metaverse",
			text: "The SimSports Metaverse will be players' second life, where they explore different game worlds together with other players. Meanwhile, a decentralized ID system ensures that players' gaming experiences become their blockchain assets.",
			link: "/build",
		},
	],
});
// 滚动动画
gsap.registerPlugin(ScrollTrigger); //注册ScrollTrigger
const gsapSet = () => {
	// 介绍移动
	gsap.to(
		".build-conter-right", //移动属性名
		{
			scrollTrigger: {
				trigger: "#build-conter", //触发元素
				start: "top top", //起始位置
				end: "+=" + (buildData.arr.length - 1) * 700, //结束位置
				scrub: true, //擦除
				pin: true, //固定定位
				// markers: true, //显示提醒
				onUpdate(self) {
					// 获取视频
					const summary = document.querySelector(".build-video") as HTMLMediaElement;
					try {
						// 视频播放进度 = 滚动条进度 * 视频总时长
						summary.currentTime = self.progress * summary.duration;
					} catch (err) {
						console.log(err);
					}
				},
			},
			y: "-" + 43.75 * (buildData.arr.length - 1) + "em",
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
#build-conter {
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
	.build-video {
		.w-h(33.75em,33.75em);
		position: absolute;
		top: 50%;
		left: 15em;
		transform: translateY(-50%);
	}
	.build-conter-right {
		.w-h(40em,33.75em);
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 15em;
		.build-conter-box {
			.w-h(40em,33.75em);
			margin-bottom: 10em;
			.build-conter-name {
				font-size: 1.75em;
				line-height: 1.2em;
				color: @COLOR_THEME;
			}
			.build-conter-titele {
				margin-top: 0.1em;
				font-size: 3.6em;
				line-height: 1.2em;
				font-family: Quantico;
			}
			.build-conter-text {
				font-size: 1.75em;
				margin-top: 2em;
				line-height: 1.2em;
				opacity: 0.6;
			}
			.el-link {
				margin-top: 3em;
				position: relative;
				.w-h(9.852em,3.75em);
				font-size: 1em;
				color: @COLOR_THEME;
				.build-border {
					position: absolute;
					width: 9.8em;
				}
				span {
					font-size: 1.25em;
				}
			}
		}
	}
}
</style>
