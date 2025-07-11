<!-- 卖出按钮 -->
<template>
	<div class="sell_box">
		<div class="buy_box" @click.stop="goSetprice">SELL</div>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const goSetprice = () => {
	router.push({
		path: "/asset/setprice",
		query: {
			tokenId: "123",
		},
	});
};
</script>

<style lang="less" scoped>
.sell_box {
	.mixin-flex (row-reverse, space-between, center, nowrap);
	.price_box {
		width: 4.98rem;
		text-align: center;
		font-size: 0.4rem;
		color: @COLOR_L;
		span {
			margin-right: 0.1rem;
		}
	}
	.buy_box {
		font-size: 0.3rem;
		background-color: @COLOR_L;
		padding: 0.1rem 0.4rem;
		border-radius: 0.1rem;
		color: @COLOR_Z;
		font-weight: bold;
		&:hover {
			opacity: 0.8;
		}
	}
}
</style>
