<!-- 游戏解除绑定账号确认弹窗 -->
<template>
	<el-dialog v-model="acceptData.isbindState" :show-close="false" class="my-dialog" width="11.8rem">
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
			<p class="title_unbind_text title_isunbind_text">
				After unbinding, the NFT players will no longer be used. Are you sure to unbind?
			</p>
			<div class="bind_but_box">
				<button>Confirm</button>
				<button @click="acceptData.isbindState = false">Cancel</button>
			</div>
		</div>
	</el-dialog>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import closeIcon from "@/assets/imgs/dialog/closeIcon.png"; //关闭按钮
// 接收dialog的显示;
const props = defineProps({
	dialog: {
		type: Object,
		default: () => {},
	},
});
// 接受传过来的参数
const acceptData = reactive(props.dialog);
</script>

<style src="./style.less" lang="less" scoped></style>
