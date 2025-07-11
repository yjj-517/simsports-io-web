<!-- 购买按钮 -->
<template>
	<div class="buy_box_text">
		<p class="price_box">
			<span>PRICE:</span>
			<span>1.042</span>
			<span>SSC</span>
		</p>
		<div class="buy_box" @click.stop="dialog.buyState = true">BUY</div>
	</div>
	<!-- 购买弹窗 -->
	<buydialogView :dialog="dialog"></buydialogView>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import buydialogView from "./buydialog.vue"; //购买弹窗
const dialog = reactive<any>({
	buyState: false, //弹窗状态
});
</script>

<style lang="less" scoped>
.buy_box_text {
	.mixin-flex (row, space-between, center, nowrap);
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
