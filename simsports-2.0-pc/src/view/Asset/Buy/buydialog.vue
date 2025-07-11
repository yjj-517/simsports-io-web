<!-- 购买弹窗 -->
<template>
	<el-dialog v-model="acceptData.buyState" :show-close="false" class="my-dialog" width="8.4rem">
		<!-- 标题 -->
		<template #header="{ close, titleId, titleClass }">
			<div class="my-header">
				<div :id="titleId" :class="titleClass"></div>
				<el-image :src="closeIcon" class="closeIcon" @click.stop="close" />
			</div>
		</template>
		<!-- 内容 -->
		<div class="dialog_box">
			<div class="dialog_box_title">Confirm Purchase</div>
			<div class="nft_box">
				<el-image :src="nft01" class="nft_img" />
				<div class="nft_box_right">
					<p>Golden</p>
					<p><span>Eminem</span><span>#1223</span></p>
					<p><span>handling fee:</span><span>3%</span></p>
					<p class="price_num"><span>Price:</span><span>1.024</span><span>SSC</span></p>
				</div>
			</div>
			<p class="nft_line"></p>
			<p class="nft_total"><span>Total:</span><span>5.77</span><span>SSC</span></p>
			<p class="nft_bal"><span>Account Balance:</span><span>42,154.00</span><span>SSC</span></p>
			<p class="nft_confirm">CONFIRM</p>
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
	.dialog_box_title {
		font-size: 0.36rem;
		text-align: center;
		font-weight: bold;
		color: @COLOR_Z;
	}
	.nft_box {
		margin: 0.4rem 0.28rem 0.5rem;
		.mixin-flex (row, space-between, flex-start, nowrap);
		.nft_img {
			.w-h(3.5rem,3.5rem);
			border-radius: 0.2rem;
		}
		.nft_box_right {
			p {
				font-size: 0.24rem;
				line-height: 0.28rem;
				color: #333;
				text-align: right;
				margin-top: 0.4rem;
				&:nth-child(1) {
					margin-top: 0.6rem;
				}
				span:nth-child(1) {
					margin-right: 0.06rem;
				}
				&.price_num {
					margin-top: 0.9rem;
					color: #000;
					font-weight: bold;
					span:nth-child(2) {
						margin-right: 0.06rem;
					}
				}
			}
		}
	}
	.nft_line {
		border: 0.02rem solid #d4d4d4;
	}
	.nft_total {
		font-size: 0.24rem;
		color: @COLOR_Z;
		font-weight: 600;
		margin: 0.18rem 0 0 0.16rem;
		span:nth-child(2) {
			margin: 0 0.06rem;
		}
	}
	.nft_bal {
		font-size: 0.16rem;
		color: #999;
		font-weight: bold;
		margin: 0.12rem 0 0 0.16rem;
		span:nth-child(2) {
			margin: 0 0.06rem;
		}
	}
	.nft_confirm {
		margin: 0.36rem auto 0;
		width: 3.88rem;
		text-align: center;
		line-height: 0.48rem;
		font-weight: bold;
		color: #fff;
		font-size: 0.26rem;
		background-color: @COLOR_Z;
		border-radius: 0.06rem;
		&:hover {
			opacity: 0.9;
		}
	}
}
</style>
