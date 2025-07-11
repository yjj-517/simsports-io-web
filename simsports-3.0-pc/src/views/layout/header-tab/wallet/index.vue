<!-- 连接账户 -->
<template>
	<div class="wallet-box">
		<el-image :src="walletIcon" class="wallet-icon" />
		<span>CONNECT</span>
	</div>
</template>

<script setup lang="ts">
// import { ref, reactive } from "vue";
import walletIcon from "@/assets/imgs/layout/wallet-icon.png";
</script>

<style lang="less" scoped>
.wallet-box {
	position: relative;
	height: 46px;
	.wallet-icon {
		.w-h(160px,46px);
	}
	span {
		line-height: 46px;
		position: absolute;
		left: 60px;
		color: #000000;
	}
}
</style>
