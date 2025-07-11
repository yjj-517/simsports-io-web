<!-- input-warning-text -->
<template>
	<div class="input-warning-box-text">
		<el-image :src="iconCwts" class="icon-cwts" />
		<p>{{ warnuingData.text }}</p>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import iconCwts from "@/assets/imgs/welcome/icon-cwts.png";

// 接受warnuing数据
const props = defineProps({
	warnuingData: {
		type: Object,
		default: () => {},
	},
});
const warnuingData = reactive(props.warnuingData);
</script>

<style lang="less" scoped>
// input框错误提示
.input-warning-box-text {
	width: 100%;
	text-align: left;
	.mixin-flex (row,flex-start,flex-start,nowrap);
	.icon-cwts {
		width: 0.14rem;
		margin-top: 0.04rem;
	}
	p {
		font-size: 0.14rem;
		color: @COLOR_W;
		line-height: 0.2rem;
		margin-left: 0.1rem;
	}
}
</style>
