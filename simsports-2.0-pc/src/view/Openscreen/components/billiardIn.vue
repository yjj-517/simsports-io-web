<!-- 台球展示动画 -->
<template>
	<div class="gif-animation"></div>
</template>

<style lang="less" scoped>
.gif-animation {
	.w-h(100%,100%);
	background-image: url("/src/assets/imgs/Openscreen/billiardIn/E_billiard_in_00000.png");
	background-size: cover;
	animation: gif-animation 1s infinite;
}

@keyframes gif-animation {
	0% {
		background-image: url("/src/assets/imgs/Openscreen/billiardIn/E_billiard_in_00000.png");
	}
	10% {
		background-image: url("/src/assets/imgs/Openscreen/billiardIn/E_billiard_in_00002.png");
	}
	20% {
		background-image: url("/src/assets/imgs/Openscreen/billiardIn/E_billiard_in_00004.png");
	}
	30% {
		background-image: url("/src/assets/imgs/Openscreen/billiardIn/E_billiard_in_00006.png");
	}
	40% {
		background-image: url("/src/assets/imgs/Openscreen/billiardIn/E_billiard_in_00008.png");
	}
	50% {
		background-image: url("/src/assets/imgs/Openscreen/billiardIn/E_billiard_in_00010.png");
	}
	60% {
		background-image: url("/src/assets/imgs/Openscreen/billiardIn/E_billiard_in_00012.png");
	}
	70% {
		background-image: url("/src/assets/imgs/Openscreen/billiardIn/E_billiard_in_00014.png");
	}
	80% {
		background-image: url("/src/assets/imgs/Openscreen/billiardIn/E_billiard_in_00016.png");
	}
	90% {
		background-image: url("/src/assets/imgs/Openscreen/billiardIn/E_billiard_in_00018.png");
	}
	100% {
		background-image: url("/src/assets/imgs/Openscreen/billiardIn/E_billiard_in_00020.png");
	}
}
</style>
