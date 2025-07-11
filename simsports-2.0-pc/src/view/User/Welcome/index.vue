<!-- 登录注册页面 -->
<template>
	<div class="welcome_box">
		<p class="welcome_box_title">Welcome To Simsports</p>
		<el-image :src="logoIcon01" class="logoIcon" />
		<div class="welcome_box_input">
			<router-link to="/user/login" class="router_link">Log In</router-link>
			<router-link to="/user/logon" class="router_link">Sign Up</router-link>
		</div>
	</div>
</template>

<script setup lang="ts">
import logoIcon01 from "@/assets/imgs/account/logoIcon01.png"; //logo
</script>

<style lang="less" scoped>
.welcome_box {
	background-color: @COLOR_Z;
	min-height: calc(100vh - 0.86rem);
	.mixin-flex(column,flex-start,center, nowrap);
	.welcome_box_title {
		font-size: 0.46rem;
		font-weight: bolder;
		margin-top: 16%;
		line-height: 0.64rem;
	}
	.logoIcon {
		.w-h(0.64rem,0.64rem);
		margin-top: 0.3rem;
	}
	.welcome_box_input {
		margin: 0.7rem 0;
		display: flex;
		.router_link {
			font-size: 0.18rem;
			padding: 0.14rem 0.3rem;
			background-color: @COLOR_L;
			color: @COLOR_Z;
			font-weight: bold;
			border-radius: 0.3rem;
			margin-left: 0.2rem;
			&:hover {
				opacity: 0.8;
			}
		}
	}
}
</style>
