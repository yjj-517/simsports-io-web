<!-- simdunk-introduce -->
<template>
	<div class="main simdunk-introduce">
		<h2 class="fillet-h2-title">INTRODUCE</h2>
		<p class="fillet-paragraph-text02">
			SimDunk, the premier street league about to begin. SimDunk, the flagship project of SimSports Sports Club, attracts top
			ballers worldwide. It stands out with high-level matches and intense competition, bringing together a community of
			free-spirited individuals who embrace street basketball culture.
		</p>
		<p class="fillet-paragraph-text02">
			SimDunk's innovative and liberating rules encourage players to unleash their imagination and showcase their unique styles.
			Beyond traditional arenas, SimDunk's courts span the streets and open-air venues, offering players the freedom to sweat
			alongside vibrant walls. With abundant rewards, SimDunk celebrates individuality, passion, and freedom, redefining the
			allure of basketball and inspiring a new era for street basketball.
		</p>
		<div class="introduce-video-box">
			<div v-if="introduceData.videoData.state" class="video-img-box" @click.stop="introduceData.videoData.state = false">
				<el-image :src="videoImg" class="video-img" />
				<el-image :src="iconPlay" class="icon-play" />
			</div>
			<video
				v-if="!introduceData.videoData.state"
				class="video-play"
				controls
				controlslist="nodownload"
				:autoplay="!introduceData.videoData.state"
			>
				<source :src="introduceData.videoData.videoUrl" type="video/mp4" />
			</video>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import gameVideo from "@/assets/video/home/game-video.mp4"; //游戏视频
import videoImg from "@/assets/imgs/simdunk/introduce/video-img.png";
import iconPlay from "@/assets/imgs/simdunk/introduce/icon-play.png";
// 展示数据
const introduceData = reactive({
	videoData: {
		videoUrl: gameVideo,
		state: true, //图片显示状态和自动播放状态
	},
});
</script>

<style lang="less" scoped>
.simdunk-introduce {
	padding: 0.64rem 0 0.9rem;
	.fillet-h2-title {
		text-align: left;
	}
	.fillet-paragraph-text02 {
		width: 10.76rem;
		margin: 0 auto;
		&:nth-of-type(1) {
			margin-top: 0.64rem;
		}
		&:nth-of-type(2) {
			margin-top: 0.44rem;
		}
	}
	.introduce-video-box {
		margin: 0.64rem auto 0;
		.w-h(10.76rem,6.06rem);
		border-radius: 0.4rem;
		overflow: hidden;
		.video-img-box {
			position: relative;
			.video-img {
				.w-h(10.76rem,6.06rem);
				opacity: 0.4;
			}
			.icon-play {
				cursor: pointer;
				.w-h(0.96rem,0.96rem);
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				margin: auto;
			}
		}
		.video-play {
			background-color: #000;
			.w-h(10.76rem,6.06rem);
		}
	}
}
</style>
