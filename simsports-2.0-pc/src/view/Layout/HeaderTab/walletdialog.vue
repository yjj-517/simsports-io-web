<!-- 登录提示弹窗 -->
<template>
	<el-dialog v-model="dialogStore.onWalletState" :show-close="false" class="my-dialog" width="6.8rem">
		<!-- 标题 -->
		<template #header="{ close, titleId, titleClass }">
			<div class="my-header">
				<div :id="titleId" :class="titleClass"></div>
				<el-image :src="closeIcon" class="closeIcon" @click.stop="close" />
			</div>
		</template>
		<!-- 内容 -->
		<div class="dialog_box">
			<p class="dialog_box_text">Please log in to your account before linking your wallet</p>
			<p class="logo_in" @click.stop="goLogin">Go Log In</p>
		</div>
	</el-dialog>
</template>

<script setup lang="ts">
import closeIcon from "@/assets/imgs/dialog/closeIcon.png"; //关闭按钮
import { useRouter } from "vue-router"; //路由
import { dialogStores } from "@/store/index"; //store

const router = useRouter(); //路由
const dialogStore = dialogStores(); //弹窗状态
// 路由跳转只登录页面
const goLogin = () => {
	router.push("/user");
	dialogStore.onWalletState = false;
};
</script>

<style lang="less" scoped>
.dialog_box {
	.dialog_box_text {
		margin: 0.8rem auto 0;
		width: 3rem;
		text-align: center;
		font-size: 0.22rem;
		line-height: 0.46rem;
		color: @COLOR_Z;
		font-weight: bold;
	}
	.logo_in {
		text-align: center;
		display: block;
		margin: 1rem 0 0.8rem;
		font-size: 0.2rem;
		line-height: 0.46rem;
		color: @COLOR_L;
		cursor: pointer;
	}
}
</style>
