<!-- 购买弹窗 -->
<template>
	<el-dialog v-model="acceptData.bookState" :show-close="false" class="my-dialog" width="11.8rem">
		<!-- 标题 -->
		<template #header="{ close, titleId, titleClass }">
			<div class="my-header">
				<div :id="titleId" :class="titleClass"></div>
				<el-image :src="closeIcon" class="closeIcon" @click.stop="close" />
			</div>
		</template>
		<!-- 内容 -->
		<div class="dialog_box">
			<div class="dialog_book_box">
				<div class="nft_box">
					<el-image :src="nft01" class="nftBookImg" />
					<p class="nft_book_text"><span>SAMMY</span><span>#00001</span></p>
				</div>
				<div class="nft_text">
					<p class="nft_book_text"><span>SAMMY</span><span>#00001</span></p>
					<div class="nft_book_name">
						<p><span>Set:</span><span>Galaxy</span></p>
						<p><span>Set:</span><span>Galaxy</span></p>
						<p><span>Set:</span><span>Galaxy</span></p>
						<p><span>Set:</span><span>Galaxy</span></p>
						<p><span>Set:</span><span>Galaxy</span></p>
						<p><span>Set:</span><span>Galaxy</span></p>
						<p><span>Set:</span><span>Galaxy</span></p>
						<p><span>Set:</span><span>Galaxy</span></p>
					</div>
				</div>
			</div>
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
	.dialog_book_box {
		.mixin-flex (row,space-between, flex-start, nowrap);
		margin: 0 0 0.4rem 0.6rem;
		.nft_box {
			.w-h(3.56rem,4.88rem);
			border-radius: 0.1rem;
			background-color: #fff;
			overflow: hidden;
			.nftBookImg {
				.w-h(3.56rem,3.56rem);
			}
			.nft_book_text {
				font-size: 0.2rem;
				color: #000;
				font-weight: 600;
				margin: 0.8rem 0 0 0.3rem;
				span {
					margin-right: 0.1rem;
				}
			}
		}
		.nft_text {
			width: 54%;
			margin-top: 0.4rem;
			.nft_book_text {
				font-size: 0.36rem;
				font-weight: bold;
				line-height: 0.6rem;
				span {
					margin-right: 0.16rem;
				}
			}
			.nft_book_name {
				.mixin-flex (row,flex-start, flex-start, wrap);
				margin-top: 0.3rem;
				p {
					width: 2.26rem;
					line-height: 0.55rem;
					background-color: @COLOR_L;
					text-align: center;
					border-radius: 0.1rem;
					font-size: 0.22rem;
					font-weight: 600;
					margin: 0 0.35rem 0.38rem 0;
				}
			}
		}
	}
}
</style>
