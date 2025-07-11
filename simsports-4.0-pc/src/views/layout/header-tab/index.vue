<!-- header -->
<template>
	<header :class="{ expanded: isExpanded }">
		<el-link :underline="false" href="/home">
			<el-image :src="logoName" class="logo-name" />
		</el-link>
		<div class="router-box">
			<div v-for="(item, index) in routerArr.arr" :key="index" class="router-link">
				<el-link :href="item.url" :underline="false" @click.stop="goRouter(item.id)">
					{{ item.name }}
				</el-link>
			</div>
			<div class="router-link" @mouseenter="linkState = true" @mouseleave="linkState = false">
				<el-link :underline="false">Whitepaper</el-link>
				<div v-if="linkState" class="router-link-child">
					<div class="whitepaper-link">
						<el-link v-for="(t, i) in routerArr.whitepaperArr" :key="i" :href="t.url" :underline="false" target="_blank">
							{{ t.name }}
						</el-link>
					</div>
				</div>
			</div>
		</div>
		<div></div>
	</header>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue";
import logoName from "@/assets/imgs/layout/logo-img.png";
const isExpanded = ref(false); //展开header
const linkState = ref(false); //展开路由
const routerArr = reactive({
	arr: [
		{
			id: "home-top",
			name: "Home",
			url: "",
		},
		{
			id: "home-game",
			name: "Game",
			url: "",
		},
		{
			id: "home-build",
			name: "Build",
			url: "",
		},
		{
			id: "home-governance",
			name: "Governance",
			url: "",
		},
	],
	whitepaperArr: [
		{
			name: "SimSports",
			url: "https://docs.simsports.io/simsports",
		},
		{
			name: "SimDunk",
			url: "https://docs.simsports.io/simdunk",
		},
	],
});
// 接收dialog的显示;
const props = defineProps({
	routerFunction: {
		type: Function,
		required: true,
	},
});
// 路由跳转
const goRouter = (i: any) => {
	props.routerFunction(i);
};
let prevScrollPos = window.scrollY;
function handleScroll() {
	const currentScrollPos = window.scrollY;
	if (prevScrollPos > currentScrollPos) {
		// 向下滚动，收起导航栏
		isExpanded.value = false;
	} else {
		// 向上滚动，展开导航栏
		isExpanded.value = true;
	}
	prevScrollPos = currentScrollPos;
}
// 在页面加载时添加滚动事件监听器
onMounted(() => {
	window.addEventListener("scroll", handleScroll);
});

// 在页面卸载时移除滚动事件监听器
onUnmounted(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="less" scoped>
header {
	background: rgba(#fff, 0.3);
	position: fixed;
	top: 0;
	z-index: 9999;
	width: 100%;
	height: 5rem;
	.mixin-flex (row,space-between,center,nowrap);
	transition: transform 0.3s;
	&.expanded {
		transform: translateY(-100%);
	}
	.logo-name {
		margin-left: 5vw;
		width: 218px;
	}
	.router-box {
		display: flex;
		.router-link {
			position: relative;
			.el-link {
				font-size: 1.5rem;
				color: #fff;
				padding: 8px 1.25rem;
				margin: 0 1rem;
				border: 2px solid transparent;
				&:hover {
					color: @COLOR_L;
					border: 2px solid @COLOR_L;
					border-radius: 1.25rem;
				}
			}
			.router-link-child {
				position: absolute;
				left: 1rem;
				.whitepaper-link {
					margin-top: 1.2rem;
					border-radius: 1rem;
					width: 10rem;
					text-align: center;
					padding: 0.5rem 0;
					background-color: rgba(#fff, 0.3);
					.el-link {
						line-height: 2.4rem;
						padding: 0 1rem;
						margin: 0;
					}
				}
			}
		}
	}
}
</style>
