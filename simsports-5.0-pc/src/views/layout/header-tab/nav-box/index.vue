<!-- header-tab -->
<template>
	<!-- 导航栏 -->
	<div class="nav-box">
		<div class="nav-box-content">
			<el-link class="simsports-logo-link" :underline="false" href="/home">
				<el-image :src="simsportsLogo" class="simsports-logo" />
			</el-link>
			<div class="router-box">
				<router-link
					v-for="(item, index) in routerArr.arr"
					:key="index"
					:to="item.path"
					class="router-links"
					@click.stop="routerId = item.path"
				>
					{{ item.name }}
				</router-link>
				<button class="fillet-diamond-button">
					<el-link
						:href="importantLink.appOfficialSite"
						target="_blank"
						:underline="false"
						rel="nofollow noopener noreferrer"
						class="link-play"
					>
						<span>Start Playing</span>
						<el-image :src="iconPlayLink" class="link-img" />
					</el-link>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect } from "vue";

import { useRouter } from "vue-router"; //router
import simsportsLogo from "@/assets/imgs/logo/simsports-logo.png";
import iconPlayLink from "@/assets/imgs/layout/icon-play-link.png";

import { importantLink } from "@/utils/medialink"; //共用链接

const router = useRouter(); //获取路由
// const isExpanded = ref(false); //展开header
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
			name: "Home",
			path: "/home",
		},
		{
			name: "Game",
			path: "/game",
		},
		{
			name: "Build",
			path: "/build",
		},
		{
			name: "Governance",
			path: "/governance",
		},
	],
});
</script>

<style lang="less" scoped>
.nav-box {
	width: 100%;
	backdrop-filter: blur(1rem) !important;
	.nav-box-content {
		max-width: 12rem;
		position: relative;
		margin: 0 auto;
		height: 0.8rem;
		.simsports-logo-link {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 0;
			.simsports-logo {
				width: 2.24rem;
			}
		}
		.router-box {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 0;
			font-size: 0.18rem;
			.mixin-flex (row,flex-start,center,nowrap);
			color: @COLOR_F;
			.router-links {
				color: @COLOR_F;
				margin-right: 0.4rem;
				&:hover {
					color: @COLOR_THEME;
				}
			}
			.fillet-diamond-button {
				clip-path: polygon(0.12rem 0, 100% 0, 100% calc(100% - 0.12rem), calc(100% - 0.12rem) 100%, 0 100%, 0 0.12rem);
				.w-h(1.4rem,0.38rem);
				.link-play {
					.mixin-flex(row,center,center,nowrap);
					gap: 0.04rem;
					color: @COLOR_F;
					.link-img {
						.w-h(0.24rem,0.24rem);
					}
				}
			}
		}
	}
}
</style>
