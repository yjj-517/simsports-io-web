<!-- 登录标签 -->
<template>
	<div class="icon_box" @mouseover="loginIcon.state = false" @mouseleave="loginIcon.state = true">
		<div class="user_icon">
			<el-image :src="userLogo" class="userLogo" />
		</div>
		<div v-if="!loginIcon.state" class="login_box_tip">
			<p v-if="!useStore.userState" @click.stop="goRouter('user')">
				<el-image :src="userIcon" class="userIcon" /><span>Sign Up/Sign In</span>
			</p>
			<p @click.stop="onWallet"><el-image :src="walletIcon" class="walletIcon" /><span>Wallet</span></p>
			<p v-if="useStore.userState" @click.stop="goRouter('account')">
				<el-image :src="userIcon" class="userIcon" /><span>Personal Center</span>
			</p>
			<p v-if="useStore.userState" @click.stop="goRouter('sign')">
				<el-image :src="outIcon" class="outIcon" /><span>Sign Out</span>
			</p>
		</div>
	</div>
	<walletdialogView></walletdialogView>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import userLogo from "@/assets/imgs/layout/userLogo.png";
import userIcon from "@/assets/imgs/layout/userIcon.png";
import walletIcon from "@/assets/imgs/layout/walletIcon.png";
import outIcon from "@/assets/imgs/layout/outIcon.png";
import walletdialogView from "./walletdialog.vue";
import { useRouter } from "vue-router"; //路由
import { useStores } from "@/store/index"; //store

const useStore = useStores(); //用户信息
const router = useRouter(); //路由

const loginIcon = reactive<any>({ state: true }); //usr按钮划入事件
// 路由跳转
const goRouter = (routerId: any) => {
	if (routerId == "user") {
		router.push("/user");
	} else if (routerId == "account") {
		router.push("/account");
	} else if (routerId == "sign") {
		useStore.delUser();
		router.push({
			path: "/home",
		});
	}
};

// 连接钱包
const onWallet = async () => {
	if (useStore.walletState) {
		await useStore.onBalance(); //判断链接钱包并查询钱包信息
		router.push({
			path: "/account",
		});
	} else {
		await useStore.onBalance(); //判断链接钱包并查询钱包信息
		await useStore.monitorWallet(); //监听钱包变化
	}
};
onMounted(async () => {
	await useStore.monitorWallet(); //监听钱包变化
});
</script>

<style lang="less" scoped>
.icon_box {
	position: relative;
	margin-right: 0.5rem;
	.user_icon {
		height: 0.86rem;
		.mixin-flex(row;space-between;center;nowrap);
		cursor: pointer;
		.userLogo {
			.w-h(0.42rem,0.44rem);
			vertical-align: middle;
			opacity: 0.8;
			&:hover {
				opacity: 1;
			}
		}
	}

	.login_box_tip {
		position: absolute;
		right: -0.4rem;
		background: rgba(#fff, 0.2);
		backdrop-filter: blur(1rem);
		padding: 0.23rem 0.31rem 0 0.28rem;
		border-radius: 0.16rem;
		z-index: 9999;
		p {
			cursor: pointer;
			font-size: 0.16rem;
			margin-bottom: 0.2rem;
			width: 1.8rem;
			margin-right: 0.09rem;
			&:hover {
				margin-right: 0;
				border-right: 0.09rem solid @COLOR_L;
			}
			.el-image {
				margin-right: 0.1rem;
				vertical-align: middle;
			}
			.userIcon {
				.w-h(0.18rem,0.21rem);
			}
			.walletIcon {
				.w-h(0.22rem,0.21rem);
			}
			.outIcon {
				.w-h(0.18rem,0.21rem);
			}
		}
	}
}
</style>
