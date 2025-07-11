<!-- 头部导航 -->
<template>
	<div class="public_box">
		<div id="container" class="head_box">
			<div class="logo_box">
				<el-link :underline="false" href="/home"><el-image :src="logo_img" class="logo_img" /></el-link>
				<div class="router_tab">
					<router-link
						v-for="(item, index) in routerArr.arr"
						:key="index"
						:to="item.path"
						class="router_link"
						:class="routerId == item.path ? 'border' : ''"
						@click.stop="routerId = item.path"
					>
						{{ item.name }}
					</router-link>
				</div>
			</div>
			<Login></Login>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect } from "vue";
import { useRouter } from "vue-router"; //router
import Login from "./login.vue";
import logo_img from "@/assets/imgs/layout/logo01.png";
const router = useRouter(); //获取路由
const routerId = ref(""); //路由id
watchEffect(() => {
	router.getRoutes().map(item => {
		// 解决刷新时路由的问题
		if (item.path === router.currentRoute.value.path) {
			// routerId.value = router.currentRoute.value.path;
			routerId.value = "/" + router.currentRoute.value.path.split("/")[1];
		}
	});
});
// 路由数组
const routerArr = reactive({
	arr: [
		{
			name: "HOME",
			path: "/home",
		},
		{
			name: "GAMES",
			path: "/game",
		},
		{
			name: "NFT",
			path: "/nft",
		},
		{
			name: "STAKING",
			path: "/staking",
		},
		{
			name: "COMPETITION",
			path: "/competition",
		},
		{
			name: "WHITEPAPER",
			path: "/whitepaper",
		},
	],
});
</script>

<style lang="less" scoped>
.head_box {
	height: 0.86rem;
	.mixin-flex(row;space-between;center;nowrap);
	.logo_box {
		.mixin-flex();
		.el-link {
			margin-right: 0.56rem;
			.logo_img {
				margin: auto 0;
				.w-h(2.07rem,0.33rem);
			}
		}
		// 路由导航
		.router_tab {
			.mixin-flex();
			.router_link {
				font-size: 0.24rem;
				margin-right: 0.3rem;
				color: @COLOR_F;
				&.border {
					color: @COLOR_L;
				}
			}
		}
	}
}
</style>
