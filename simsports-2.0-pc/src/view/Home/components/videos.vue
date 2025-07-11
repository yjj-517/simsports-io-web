<!-- 视频播放器 -->
<template>
	<div id="container" class="video_main">
		<div class="video_conten">
			<div v-if="videoplay.state" class="video_img" @click.stop="videoplay.state = false">
				<el-image :src="videoBack" class="videoBack" />
				<el-image :src="playIcon" class="playIcon" />
			</div>
			<video v-if="!videoplay.state" class="video_play" controls controlslist="nodownload" :autoplay="!videoplay.state">
				<source :src="videoUrl" type="video/mp4" />
			</video>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import videoBack from "@/assets/imgs/home/videoBack.png";
import playIcon from "@/assets/imgs/home/playIcon.png";
import videoUrl from "@/assets/videos/video.mp4"; //视频地址
// const videoUrl = ref("",); // 网络视频地址
// 视频状态
const videoplay = reactive({
	state: true, //图片显示状态和自动播放状态
});
</script>

<style lang="less" scoped>
.video_main {
	.video_conten {
		.w-h(14.18rem,7.98rem);
		margin: 0 auto;
		.video_img {
			position: relative;
			.videoBack {
				.w-h(14.18rem,7.98rem);
			}
			.playIcon {
				.w-h(1.3rem,1.3rem);
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				margin: auto;
			}
		}
		.video_play {
			.w-h(14.18rem,7.98rem);
		}
	}
}
</style>
