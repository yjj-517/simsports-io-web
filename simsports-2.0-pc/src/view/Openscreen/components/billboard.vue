<!-- 广告牌动画 -->
<template>
	<div class="gif-animation"></div>
</template>

<style lang="less" scoped>
.gif-animation {
	.w-h(100%,100%);
	background-image: url("/src/assets/imgs/Openscreen/billboard/E_billboard_loop_00000.png");
	background-size: cover;
	animation: gif-animation 1s infinite;
}

@keyframes gif-animation {
	0% {
		background-image: url("/src/assets/imgs/Openscreen/billboard/E_billboard_loop_00000.png");
	}
	10% {
		background-image: url("/src/assets/imgs/Openscreen/billboard/E_billboard_loop_00004.png");
	}
	20% {
		background-image: url("/src/assets/imgs/Openscreen/billboard/E_billboard_loop_00008.png");
	}
	30% {
		background-image: url("/src/assets/imgs/Openscreen/billboard/E_billboard_loop_00012.png");
	}
	40% {
		background-image: url("/src/assets/imgs/Openscreen/billboard/E_billboard_loop_00016.png");
	}
	50% {
		background-image: url("/src/assets/imgs/Openscreen/billboard/E_billboard_loop_00020.png");
	}
	60% {
		background-image: url("/src/assets/imgs/Openscreen/billboard/E_billboard_loop_00024.png");
	}
	70% {
		background-image: url("/src/assets/imgs/Openscreen/billboard/E_billboard_loop_00028.png");
	}
	80% {
		background-image: url("/src/assets/imgs/Openscreen/billboard/E_billboard_loop_00032.png");
	}
	90% {
		background-image: url("/src/assets/imgs/Openscreen/billboard/E_billboard_loop_00036.png");
	}
	100% {
		background-image: url("/src/assets/imgs/Openscreen/billboard/E_billboard_loop_00040.png");
	}
}
</style>
