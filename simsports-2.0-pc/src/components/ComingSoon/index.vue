<!-- 敬请期待 -->
<template>
	<div class="soon_box">
		<div id="container">
			<div class="box_text">
				<el-image :src="soon" class="soon" />
				<p class="text">NOT OPEN YET</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// import { ref, reactive } from "vue";
import soon from "@/assets/imgs/soon/soon.png";
</script>

<style lang="less" scoped>
.soon_box {
	background-color: @COLOR_Z;
	#container {
		min-height: calc(100vh - 0.86rem);
		.mixin-flex (row,center, center, nowrap);
		.box_text {
			text-align: center;
			.soon {
				.w-h(1.62rem,1.62rem);
			}
			.text {
				margin-top: 52px;
				font-size: 0.7rem;
				font-weight: bold;
			}
		}
	}
}
</style>
