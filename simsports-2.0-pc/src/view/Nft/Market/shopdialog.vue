<!-- 购物车弹窗 -->
<template>
	<el-dialog v-model="acceptData.state" :show-close="false" class="my-dialog" width="8.4rem">
		<!-- 标题 -->
		<template #header="{ close, titleId, titleClass }">
			<div class="my-header">
				<div :id="titleId" :class="titleClass"></div>
				<el-image :src="closeIcon" class="closeIcon" @click.stop="close" />
			</div>
		</template>
		<!-- 内容 -->
		<div class="dialog_box">
			<div class="dialog_box_filter">
				<div class="filter_title">
					<p><span>Filter</span><span>( 3 )</span></p>
					<p>Clear all</p>
				</div>
				<div class="filter_box">
					<div class="filter_box_img">
						<div class="img_box">
							<el-image :src="nft01" class="nft_img" />
							<div class="price_box">
								<p>Golden</p>
								<p><span>Eminem</span><span>#1223</span></p>
								<p><span>Price:</span><span>1.024</span><span>SSC</span></p>
							</div>
						</div>
						<el-image :src="deleteIcon" class="deleteIcon" />
					</div>
					<div class="filter_box_img">
						<div class="img_box">
							<el-image :src="nft01" class="nft_img" />
							<div class="price_box">
								<p>Golden</p>
								<p><span>Eminem</span><span>#1223</span></p>
								<p><span>Price:</span><span>1.024</span><span>SSC</span></p>
							</div>
						</div>
						<el-image :src="deleteIcon" class="deleteIcon" />
					</div>
				</div>
			</div>
			<p class="nft_line"></p>
			<div class="nft_total">
				<p class="nft_total_num"><span>Total:</span><span>5.77</span><span>SSC</span></p>
				<p class="nft_total_question">
					<el-image :src="questionIcon" class="questionIcon" /><span>Description of handling fee</span>
				</p>
			</div>
			<p class="nft_bal"><span>Account Balance:</span><span>42,154.00</span><span>SSC</span></p>
			<div class="nft_buy_box">
				<span>AUTHORIZED</span>
				<span>BUY</span>
			</div>
		</div>
	</el-dialog>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import closeIcon from "@/assets/imgs/dialog/closeIcon.png"; //关闭按钮
import nft01 from "@/assets/imgs/home/nft/nft01.png"; //nft图片
import deleteIcon from "@/assets/imgs/dialog/deleteIcon.png"; //删除按钮
import questionIcon from "@/assets/imgs/dialog/questionIcon.png"; //问号按钮

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
	.dialog_box_filter {
		margin: 0.2rem 0.28rem 0;
		.filter_title {
			.mixin-flex (row, space-between, center, nowrap);
			color: @COLOR_Z;
			line-height: 0.28rem;
			p:nth-child(1) {
				font-size: 0.24rem;
				font-weight: bold;
				span:nth-child(1) {
					margin-right: 0.1rem;
				}
			}
			p:nth-child(2) {
				font-size: 0.22rem;
				font-weight: 600;
				&:hover {
					color: #0071bc;
				}
			}
		}
		.filter_box {
			.filter_box_img {
				.mixin-flex (row, space-between, center, nowrap);
				margin-top: 0.4rem;
				.img_box {
					.mixin-flex (row, flex-start, center, nowrap);
					.nft_img {
						.w-h(1.1rem,1.1rem);
						border-radius: 0.1rem;
					}
					.price_box {
						margin-left: 0.4rem;
						p {
							font-size: 0.16rem;
							font-weight: 600;
							&:nth-child(2) {
								margin: 0.12rem 0;
							}
							span:nth-child(2) {
								margin: 0 0.06rem;
							}
						}
					}
				}
				.deleteIcon {
					.w-h(0.24rem,0.28rem);
					margin-right: 0.26rem;
					&:hover {
						opacity: 0.6;
					}
				}
			}
		}
	}
	.nft_line {
		border: 0.02rem solid #558080;
		margin-top: 0.4rem;
	}
	.nft_total {
		.mixin-flex (row, space-between, center, nowrap);
		margin-top: 0.24rem;
		.nft_total_num {
			font-size: 0.24rem;
			color: @COLOR_Z;
			font-weight: bold;
			span:nth-child(2) {
				margin: 0 0.06rem;
			}
		}
		.nft_total_question {
			.questionIcon {
				.w-h(0.18rem,0.18rem);
				vertical-align: middle;
				margin-right: 0.06rem;
			}
			span {
				font-size: 0.14rem;
				color: #b3b3b3;
			}
			:hover {
				color: @COLOR_Z;
				font-weight: 600;
			}
		}
	}
	.nft_bal {
		font-size: 0.16rem;
		color: #999;
		font-weight: bold;
		margin-top: 0.08rem;
		span:nth-child(2) {
			margin: 0 0.06rem;
		}
	}
	.nft_buy_box {
		margin: 0.12rem 0 0.2rem;
		line-height: 0.48rem;
		border-radius: 0.08rem;
		overflow: hidden;
		.mixin-flex (row, space-between, center, nowrap);
		span {
			width: 50%;
			text-align: center;
			color: #fff;
			font-size: 0.22rem;
			font-weight: 600;
			&:nth-child(1) {
				background-color: @COLOR_Z;
			}
			&:nth-child(2) {
				background-color: #95c0c0;
			}
		}
	}
}
</style>
