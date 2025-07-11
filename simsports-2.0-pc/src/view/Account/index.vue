<!-- 个人中心 -->
<template>
	<HeaderView></HeaderView>
	<div class="main_box">
		<div id="container" class="account_box">
			<div class="account_text">
				<el-image :src="accountIcon" class="accountIcon" />
				<p class="email_text">{{ useStore.userIfon.account }}</p>
				<div class="game_bind">
					<button class="game_bind_box" @click="dialog.bindState = true">Game Binding</button>
					<button class="game_unbind_box" @click="dialog.unbindState = true">Unbind</button>
				</div>
				<div v-if="useStore.walletState" class="account_wallet">
					<el-image :src="ethIcon" class="ethIcon" />
					<span>{{ useStore.walletIfon.address.substr(0, 5) + "......" + useStore.walletIfon.address.substr(-6) }}</span>
				</div>
			</div>
			<div class="link_box">
				<router-link
					v-for="(item, index) in routerArr.arr"
					:key="index"
					:to="item.path"
					class="router_link"
					:class="routerId == item.path ? 'colorB' : ''"
					@click.stop="routerId = item.path"
				>
					{{ item.name }}
				</router-link>
			</div>
			<div v-if="!useStore.walletState" class="wallet_connect">
				connect<span class="color_c" @click.stop="onWallet">wallet</span>
			</div>
			<div v-if="useStore.walletState" class="accout_tab_box">
				<router-view></router-view>
			</div>
		</div>
	</div>
	<FooterView></FooterView>
	<Gamebind :dialog="dialog" />
	<Gameunbind :dialog="dialog" />
	<Isunbind :dialog="dialog" />
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect } from "vue";
import HeaderView from "@/view/Layout/HeaderTab/index.vue";
import FooterView from "@/view/Layout/FooterTab/index.vue";
import Gamebind from "./Gamebind/gamebind.vue";
import Gameunbind from "./Gamebind/gameunbind.vue";
import Isunbind from "./Gamebind/isunbind.vue";
import accountIcon from "@/assets/imgs/account/accountIcon.png"; //头像
import ethIcon from "@/assets/imgs/account/ethIcon.png"; //以太坊
import { useStores } from "@/store/index"; //store
import { useRouter } from "vue-router"; //路由
const useStore = useStores(); //用户信息
const router = useRouter(); //路由
const dialog = reactive<any>({
	bindState: false, //绑定弹窗状态
	unbindState: false, //解绑弹窗状态
	isbindState: false, //确定解绑弹窗状态
});
const routerId = ref(""); //路由id
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
			name: "Assets",
			path: "/account/assets",
		},
		{
			name: "NFT",
			path: "/account/collected",
		},
		{
			name: "Transaction Record",
			path: "/account/activity",
		},
	],
});
// 连接钱包
const onWallet = async () => {
	await useStore.onBalance(); //判断链接钱包并查询钱包信息
	await useStore.monitorWallet(); //监听钱包变化
};
</script>

<style lang="less" scoped>
.main_box {
	min-height: calc(100vh - 0.86rem);
}
.account_box {
	.account_text {
		.mixin-flex (column,flex-start, center, nowrap);
		.accountIcon {
			.w-h(1rem,1rem);
			border-radius: 50%;
		}
		.email_text {
			margin-top: 0.12rem;
			font-size: 0.2rem;
			line-height: 0.26rem;
		}
		.game_bind {
			margin-top: 0.1rem;
			button {
				padding: 0.08rem 0.2rem;
				border-radius: 0.1rem;
				font-size: 0.16rem;
				font-weight: bold;
				&.game_bind_box {
					color: #fff;
					background-color: @COLOR_L;
				}
				&.game_unbind_box {
					color: #000;
					background-color: #999;
				}
			}
		}
		.account_wallet {
			margin-top: 0.1rem;
			font-size: 0.16rem;
			line-height: 0.22rem;
			.ethIcon {
				vertical-align: middle;
				margin-right: 0.08rem;
				.w-h(0.12rem,0.22rem);
			}
		}
	}
	.link_box {
		margin-top: 1rem;
		.router_link {
			font-size: 0.32rem;
			font-weight: bold;
			margin-right: 0.4rem;
			color: #fff;
			&.colorB {
				color: @COLOR_L;
			}
		}
	}
	.wallet_connect {
		margin-top: 1rem;
		text-align: center;
		font-size: 0.2rem;
		font-weight: bold;
		.color_c {
			color: @COLOR_L;
			margin: 0 0.2rem;
			cursor: pointer;
			&:hover {
				opacity: 0.8;
			}
		}
	}
	.accout_tab_box {
		margin-bottom: 1rem;
	}
}
</style>
