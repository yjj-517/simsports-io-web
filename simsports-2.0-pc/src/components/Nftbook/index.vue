<!-- nft图鉴卡片 -->
<template>
	<div class="nftbook_box">
		<el-image :src="nftData.image" class="nftBookImg" />
		<p class="nft_book_text">
			<span>SAMMY</span><span>#{{ nftData.token_id }}</span>
		</p>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
// 接受nftList
const props = defineProps({
	nftList: {
		type: Object,
		default: () => {},
	},
});
const nftData = reactive(props.nftList); //单个nft数据
</script>

<style lang="less" scoped>
.nftbook_box {
	cursor: pointer;
	.w-h(2.18rem,2.98rem);
	border-radius: 0.1rem;
	background-color: #fff;
	overflow: hidden;
	box-shadow: rgba(#fff, 0.6) 0 0.04rem 0.1rem;
	&:hover {
		transform: scale(1.02);
	}
	.nftBookImg {
		.w-h(2.18rem,2.18rem,);
	}
	.nft_book_text {
		font-size: 0.16rem;
		color: #000;
		font-weight: 600;
		margin: 0.4rem 0 0 0.16rem;
		span {
			margin-right: 0.1rem;
		}
	}
}
</style>
