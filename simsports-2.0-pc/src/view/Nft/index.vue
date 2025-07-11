<!-- nft商城 -->
<template>
	<div id="container" class="router_box">
		<div class="link_box">
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
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect } from "vue";
import { useRouter } from "vue-router"; //router
const routerId = ref(""); //路由id
const router = useRouter(); //获取路由
watchEffect(() => {
	router.getRoutes().map(item => {
		// 解决刷新时路由的问题
		if (item.path === router.currentRoute.value.path) {
			routerId.value = router.currentRoute.value.path;
		}
	});
});
const routerArr = reactive({
	arr: [
		{
			name: "MARKETPLACE",
			path: "/nft/market",
		},
		{
			name: "ILLUSTRATED BOOK",
			path: "/nft/illustratedbook",
		},
		{
			name: "BLIND BOX",
			path: "/nft/blindbox",
		},
	],
});
</script>

<style lang="less" scoped>
.router_box {
	.mixin-flex (row,center, center, nowrap);
	.link_box {
		margin-top: 0.4rem;
		border-radius: 0.06rem;
		background-color: #fff;
		display: flex;
		align-items: stretch;
		.router_link {
			color: @COLOR_Z;
			font-weight: bolder;
			font-size: 0.2rem;
			padding: 0 0.2rem;
			line-height: 0.4rem;
		}
		.border {
			background-color: #00ffff;
			border-radius: 0.06rem;
			font-size: 0.24rem;
		}
	}
}
</style>
