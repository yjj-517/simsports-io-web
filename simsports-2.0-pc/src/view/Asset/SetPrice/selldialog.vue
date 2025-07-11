<!-- 购买弹窗 -->
<template>
	<el-dialog v-model="acceptData.sellState" :show-close="false" class="my-dialog" width="12rem">
		<!-- 标题 -->
		<template #header="{ close, titleId, titleClass }">
			<div class="my-header">
				<div :id="titleId" :class="titleClass"></div>
				<el-image :src="closeIcon" class="closeIcon" @click.stop="close" />
			</div>
		</template>
		<!-- 内容 -->
		<div class="dialog_box">
			<div class="selldialog_title">Listing information confirmation</div>
			<div class="selldialog_box">
				<div class="box_text">
					<el-image :src="nft01" class="nft_img" />
					<div class="box_conter">
						<p>Galaxy</p>
						<p>SAMMY #00001</p>
						<p>ETH</p>
					</div>
				</div>
				<div class="box_price">
					<span>1.024</span>
					<span> SSC</span>
				</div>
			</div>
			<div class="selldialog_wallet">Please confirm in your wallet</div>
		</div>
	</el-dialog>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import closeIcon from "@/assets/imgs/dialog/closeIcon.png"; //关闭按钮
import nft01 from "@/assets/imgs/home/nft/nft01.png"; //nft图片
// 接收dialog的显示;
const props = defineProps({
	dialog: {
		type: Object,
		default: () => {},
	},
});
// 接受传过来的参数
const acceptData = reactive(props.dialog);
</script>

<style lang="less" scoped>
.dialog_box {
	.selldialog_title {
		text-align: center;
		font-size: 0.34rem;
		color: @COLOR_Z;
		font-weight: bold;
	}
	.selldialog_box {
		margin-top: 0.8rem;
		.mixin-flex (row,space-between,center,nowrap);
		font-size: 0.3rem;
		font-weight: 600;
		.box_text {
			.mixin-flex (row,flex-start,center,nowrap);
			margin-left: 0.2rem;
			.nft_img {
				.w-h(2.8rem,2.8rem);
				border-radius: 0.1rem;
			}
			.box_conter {
				margin-left: 0.46rem;
				p:nth-child(2) {
					margin: 0.5rem 0;
				}
			}
		}
		.box_price {
			color: @COLOR_Z;
			margin-right: 0.5rem;
			span:nth-child(2) {
				margin-left: 0.1rem;
			}
		}
	}
	.selldialog_wallet {
		margin: 0.5rem 0 0.1rem;
		text-align: center;
		font-size: 0.3rem;
		font-weight: 600;
		color: #999;
	}
}
</style>
