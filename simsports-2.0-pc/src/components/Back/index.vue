<!-- 后退标签 -->
<template>
	<div class="back_box" @click.stop="prev">
		<el-image :src="backIcon" class="backIcon" />
		<span>BACK</span>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"; //路由
import backIcon from "@/assets/imgs/nft/backIcon.png"; //后退
const router = useRouter(); //路由
const prev = () => {
	router.back();
};
</script>

<style lang="less" scoped>
.back_box {
	line-height: 0.3rem;
	.mixin-flex (row, flex-start, center, nowrap);
	font-size: 0.28rem;
	font-weight: bold;
	color: @COLOR_L;
	.backIcon {
		.w-h(0.18rem,0.3rem);
		margin-right: 0.1rem;
		cursor: pointer;
	}
	span {
		cursor: pointer;
	}
}
</style>
