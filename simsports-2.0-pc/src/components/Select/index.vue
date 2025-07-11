<!-- 筛选框 -->
<template>
	<div class="select_box">
		<!-- 标题 -->
		<div class="select_title" @click.stop="acceptData.titleStatus = !acceptData.titleStatus">
			<span>{{ acceptData.title }}</span>
			<el-image v-if="acceptData.titleStatus" :src="selectTop" class="selectTop" />
			<el-image v-if="!acceptData.titleStatus" :src="selectBottom" class="selectTop" />
		</div>
		<!-- 内容 -->
		<div v-if="acceptData.titleStatus" class="select_content">
			<div
				v-for="(item, index) in acceptData.content"
				:key="index"
				class="select_content_box"
				@click.stop="item.nameStatus = !item.nameStatus"
			>
				<span>{{ item.name }}</span>
				<el-image v-if="item.nameStatus" :src="selectIcon" class="selectIcon" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import selectTop from "@/assets/imgs/nft/selectTop.png";
import selectBottom from "@/assets/imgs/nft/selectBottom.png";
import selectIcon from "@/assets/imgs/nft/selectIcon.png";
// 接收dialog的显示;
const props = defineProps({
	selectList: {
		type: Object,
		default: () => {},
	},
});
// 接受传过来的参数
const acceptData = reactive(props.selectList);
</script>

<style lang="less" scoped>
.select_box {
	margin-bottom: 0.1rem;
	width: 2.4rem;
	.select_title {
		padding: 0 0.08rem;
		height: 0.3rem;
		background-color: #333;
		border-radius: 0.06rem;
		.mixin-flex (row,space-between, center, nowrap);
		.selectTop {
			.w-h(0.18rem,0.1rem);
		}
	}
	.select_content {
		background-color: #550a9d;
		margin-top: 0.02rem;
		border-radius: 0.06rem;
		.select_content_box {
			padding: 0 0.08rem;
			.mixin-flex (row,space-between, center, nowrap);
			height: 0.28rem;
			.selectIcon {
				.w-h(0.14rem,0.1rem);
			}
			.color_l {
				color: @COLOR_L;
			}
			&:hover {
				background-color: #6e2fac;
				border-radius: 0.06rem;
			}
		}
	}
}
</style>
