<!-- nft购买显示 -->
<template>
	<div class="nftFigure" @mouseover="shopIconStatus = true" @mouseleave="shopIconStatus = false">
		<el-image :src="nftData.imgUrl" class="nftFigureImg" />
		<p class="nftFigure_name">
			<span>{{ nftData.name }}</span>
			<!-- <span>#00001</span> -->
		</p>
		<p class="nftFigure_name">
			<span>{{ nftData.price }}</span
			><span>SSC</span>
		</p>
		<div class="shopping_card">
			<p v-show="shopIconStatus">
				<span @click.stop="dialog.buyState = true">BUY</span>
				<span v-if="!nftData.state" @click.stop="onShopcart">ADD TO CART</span>
				<span v-if="nftData.state" @click.stop="onShopcart">REMOVE</span>
			</p>
		</div>
		<buydialogView :dialog="dialog"></buydialogView>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import buydialogView from "@/view/Asset/Buy/buydialog.vue"; //购买弹窗
const shopIconStatus = ref(false); //购买按钮展示
const dialog = reactive<any>({
	buyState: false, //弹窗状态
});
// 接受nftList
const props = defineProps({
	nftList: {
		type: Object,
		default: () => {},
	},
});
const nftData = reactive(props.nftList); //单个nft数据
// 加入购物车
const onShopcart = () => {
	nftData.state = !nftData.state;
};
</script>

<style lang="less" scoped>
.nftFigure {
	.w-h(2.18rem,2.98rem);
	border-radius: 0.1rem;
	background-color: @COLOR_F;
	color: #000;
	font-size: 0.14rem;
	font-weight: bold;
	overflow: hidden;
	margin: 0 0.1rem 0.1rem 0;
	.mixin-flex (column,space-between, stretch, nowrap);
	.nftFigureImg {
		.w-h(2.18rem,2.18rem,);
		border-radius: 0.1rem;
	}
	.nftFigure_name {
		margin-left: 0.2rem;
		span:nth-child(1) {
			margin-right: 0.1rem;
		}
	}
	.shopping_card {
		height: 0.26rem;
		p {
			line-height: 0.26rem;
			display: flex;
			span {
				width: 50%;
				text-align: center;
				&:nth-child(1) {
					background-color: #fbb03b;
				}
				&:nth-child(2) {
					background-color: @COLOR_L;
				}
			}
		}
	}
}
</style>
