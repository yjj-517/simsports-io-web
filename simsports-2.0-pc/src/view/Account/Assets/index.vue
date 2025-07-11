<!-- 个人资产 -->
<template>
	<div class="assets_box">
		<div class="assets_box_text">
			<el-image :src="ethIcon" class="ethIcon" />
			<span class="margin_s">{{ useStore.walletIfon.balance.substr(0, useStore.walletIfon.balance.lastIndexOf(".") + 4) }}</span>
			<span>{{ useStore.walletIfon.currency }}</span>
		</div>
		<div class="assets_box_line"></div>
		<div class="assets_box_text"><span>≈</span><span class="margin_s">100.12</span><span>USD</span></div>
	</div>
</template>

<script setup lang="ts">
import ethIcon from "@/assets/imgs/account/ethIcon.png"; //以太坊
import { useStores } from "@/store/index"; //store
const useStore = useStores(); //用户信息
</script>

<style lang="less" scoped>
.assets_box {
	.mixin-flex (row,space-between,center, nowrap);
	margin: 1rem 0.2rem;
	.assets_box_text {
		font-size: 0.24rem;
		line-height: 0.4rem;
		.ethIcon {
			.w-h(0.24rem,0.4rem);
			vertical-align: middle;
		}
		.margin_s {
			margin: 0.1rem;
		}
	}
	.assets_box_line {
		width: 50%;
		border-top: 0.02rem dashed #bfbfbf;
	}
}
</style>
