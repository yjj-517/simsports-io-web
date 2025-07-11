<!-- 404 -->
<template>
	<div class="exception_box">
		<div>404</div>
		<div>Not Found</div>
	</div>
</template>

<script setup lang="ts">
// import { ref, reactive } from "vue";
</script>

<style lang="less" scoped>
.exception_box {
	background-color: @COLOR_Z;
	min-height: calc(100vh - 0.86rem);
	.mixin-flex(column,flex-start,center, nowrap);
	div {
		font-size: 1rem;
		margin-top: 1rem;
	}
}
</style>
