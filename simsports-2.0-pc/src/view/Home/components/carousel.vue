<!-- 轮播图 -->
<template>
	<div class="carousel_box">
		<el-carousel indicator-position="outside" :height="bannerImg.obj.bannerHeight" arrow="never">
			<el-carousel-item v-for="item in acceptData.img" :key="item">
				<el-image :src="item.imgurl" class="rotationImg" />
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
// 接收dialog的显示;
const props = defineProps({
	bannerList: {
		type: Object,
		default: () => {},
	},
});
// 接受传过来的轮播图
const acceptData = reactive(props.bannerList);
const bannerImg = reactive({
	obj: {
		screenWidth: "", //轮播图宽
		bannerHeight: "", //轮播图高
	},
});
// 获取轮播图宽高
const getScreen = () => {
	const screenWidth = window.innerWidth / 100;
	if (screenWidth < 14.4) {
		bannerImg.obj.bannerHeight = "5.6rem";
	} else if (14.4 < screenWidth && screenWidth < 19.2) {
		bannerImg.obj.bannerHeight = (750 / 1920) * screenWidth + "rem";
	} else {
		bannerImg.obj.bannerHeight = (750 / 1920) * screenWidth + "rem";
	}
	window.onresize = () => {
		const screenWidth = window.innerWidth / 100;
		if (screenWidth <= 14.4) {
			bannerImg.obj.bannerHeight = "5.6rem";
		} else if (14.4 < screenWidth && screenWidth < 19.2) {
			bannerImg.obj.bannerHeight = (750 / 1920) * screenWidth + "rem";
		} else {
			bannerImg.obj.bannerHeight = (750 / 1920) * screenWidth + "rem";
		}
	};
};
onMounted(() => {
	getScreen();
});
</script>

<style lang="less" scoped>
.carousel_box {
	margin: 0 auto;
	.rotationImg {
		width: 100%;
	}
}
</style>
