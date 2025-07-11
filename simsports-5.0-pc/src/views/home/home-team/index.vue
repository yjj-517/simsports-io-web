<!-- home-team -->
<template>
	<div id="home-team">
		<h2 id="home-titele">GAMING TEAM</h2>
		<p class="title-text">
			Together, we become a powerful force driving community development, defining the new future of Web3 esports gaming.
		</p>
		<div class="community-box">
			<el-link v-for="(item, index) in communityData.list" :key="index" :underline="false" :href="item.link" target="_blank">
				<el-image :src="borderImg" class="border-img" />
				<el-image :src="item.imgurl" class="medium-img" />
				<span class="medium-text">{{ item.name }}</span>
			</el-link>
		</div>
		<div class="team-box">
			<div v-for="(item, index) in teamData.arr" :key="index" class="team-people">
				<el-image :src="item.imgurl" class="team-people-img" />
				<p class="people-name">{{ item.name }}</p>
				<p class="people-introduce">{{ item.introduce }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted } from "vue";
import borderImg from "@/assets/imgs/home/team/border-img.png";
import teamCloseup01 from "@/assets/imgs/home/team/team-closeup01.png";
import teamCloseup02 from "@/assets/imgs/home/team/team-closeup02.png";
import teamCloseup03 from "@/assets/imgs/home/team/team-closeup03.png";
import teamCloseup04 from "@/assets/imgs/home/team/team-closeup04.png";
import teamCloseup05 from "@/assets/imgs/home/team/team-closeup05.png";
import twitterImg from "@/assets/imgs/layout/twitter-img.png";
import discordImg from "@/assets/imgs/layout/discord-img.png";
import { gsap } from "gsap"; //gsap
import { ScrollTrigger } from "gsap/ScrollTrigger"; //ScrollTrigger

// 社交数据
const communityData = reactive({
	list: [
		{
			imgurl: discordImg,
			link: "https://discord.gg/simsports",
			name: "Join the Discord",
		},
		{
			imgurl: twitterImg,
			link: "https://twitter.com/SimSportsClub",
			name: "Follow the Twitter",
		},
	],
});

// team数据
const teamData = reactive({
	arr: [
		{
			imgurl: teamCloseup01,
			name: "Vivian",
			introduce: "Founding Member",
		},
		{
			imgurl: teamCloseup02,
			name: "Jin",
			introduce: "Founding Member",
		},
		{
			imgurl: teamCloseup03,
			name: "Corvo",
			introduce: "Game System creator",
		},
		{
			imgurl: teamCloseup04,
			name: "Parker",
			introduce: "Global Web3 & Games partner network operation",
		},
		{
			imgurl: teamCloseup05,
			name: "Luke",
			introduce: "Global games publishing",
		},
	],
});
// 滚动动画
gsap.registerPlugin(ScrollTrigger); //注册ScrollTrigger
const gsapSet = () => {
	gsap.to(
		".team-box", //移动属性名
		{
			scrollTrigger: {
				trigger: ".team-box", //触发元素
				start: "top top", //起始位置
				end: "+=600", //结束位置
				scrub: true, //擦除
				pin: true, //固定定位
				// markers: true, //显示提醒
			},
			x: "-40em",
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
#home-team {
	height: 100%;
	text-align: center;
	padding-top: 10em;
	.title-text {
		width: 30em;
		margin: 1em auto 0;
		font-size: 2em;
		line-height: 1.25em;
		opacity: 0.32;
	}
	.community-box {
		margin-top: 3em;
		.el-link {
			.w-h(16em,3.8em);
			width: 16em;
			margin: 0 0.75em;
			position: relative;
			font-size: 1em;
			.border-img {
				width: 16em;
				position: absolute;
			}
			.medium-img {
				width: 1.5em;
				margin-right: 1em;
			}
			.medium-text {
				color: @COLOR_THEME;
				font-size: 1.25em;
			}
		}
	}
	.team-box {
		padding: 10em 0 10em 20em;
		.mixin-flex (row,flex-start,flex-start,nowrap);
		width: 120em;
		.team-people {
			.w-h(20.25em,32.5em);
			.mixin-flex (column,flex-star,center,nowrap);
			margin-right: 3em;
			clip-path: polygon(2em 0, 100% 0, 100% calc(100% - 2em), calc(100% - 2em) 100%, 0 100%, 0 2em);
			&:nth-child(2n) {
				margin-top: 5em;
			}
			&:nth-of-type(1) {
				background: linear-gradient(#15d4a7 0%, #bdfe8a 55.22%, #e7ffde 100%);
			}
			&:nth-of-type(2) {
				background: linear-gradient(#dfba5a 0%, #ef6f6f 57.44%, #ffe6d3 100%);
			}
			&:nth-of-type(3) {
				background: linear-gradient(#37b8e0 0%, #c768e8 56.5%, #d6dcff 100%);
			}
			&:nth-of-type(4) {
				background: linear-gradient(#b5e848 0%, #539fe5 58.67%, #cef3ff 100%);
			}
			&:nth-of-type(5) {
				background: linear-gradient(#443a2c 0%, #f5ebdc 58.46%, #ead2b7 100%);
			}
			.team-people-img {
				width: 17.25em;
				margin-left: 0.5em;
			}
			p {
				color: #000;
				&.people-name {
					font-size: 1.5em;
					margin-top: 0.5em;
					font-weight: bold;
					line-height: 1.3em;
				}
				&.people-introduce {
					margin-top: 0.25em;
					font-size: 1.2em;
					line-height: 1.5em;
				}
			}
		}
	}
}
</style>
