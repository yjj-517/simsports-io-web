<!-- 游戏解除绑定账号弹窗 -->
<template>
	<el-dialog v-model="acceptData.unbindState" :show-close="false" class="my-dialog" width="11.8rem">
		<!-- 标题 -->
		<template #header="{ close, titleId, titleClass }">
			<div class="my-header">
				<div :id="titleId" :class="titleClass"></div>
				<el-image :src="closeIcon" class="closeIcon" @click.stop="close" />
			</div>
		</template>
		<!-- 内容 -->
		<div class="dialog_box">
			<p class="title_box">Game Unbind</p>
			<p class="title_unbind_text">
				The game account has been bound to the current wallet address. If you need to bind other wallet addresses, please unbind
				the current wallet address first. After unbinding, the assets of this wallet will not be used in the game.
			</p>
			<div class="wallet_box wallet_box_unbind">
				<p>
					<span>Account:</span>
					<span>{{ useStore.userIfon.account }}</span>
				</p>
				<p>
					<span>The wallet address bound to the current account is:</span>
				</p>
				<p>
					{{ useStore.walletIfon.address }}
				</p>
			</div>
			<div class="bind_but_box">
				<button
					class="but_unbind"
					@click="
						acceptData.unbindState = false;
						acceptData.isbindState = true;
					"
				>
					I Understand
				</button>
			</div>
		</div>
	</el-dialog>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import closeIcon from "@/assets/imgs/dialog/closeIcon.png"; //关闭按钮
import { useStores } from "@/store/index"; //store
// 接收dialog的显示;
const props = defineProps({
	dialog: {
		type: Object,
		default: () => {},
	},
});
// 接受传过来的参数
const acceptData = reactive(props.dialog);
const useStore = useStores(); //用户信息
</script>

<style src="./style.less" lang="less" scoped></style>
