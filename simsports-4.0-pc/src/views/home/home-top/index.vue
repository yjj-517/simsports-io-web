<!-- home-top -->
<template>
	<div id="home-top">
		<div class="top-spark"></div>
		<div id="top-transform" class="main">
			<el-image :src="topImg" class="top-img" :class="{ active: transform.state }" />
			<div class="simdunk-box" :class="{ active: transform.state }">
				<p class="simdunk-box-text">
					SimSports is a Web3 esports and gaming entertainment platform built on the principles of community governance and the
					tokenization of gaming assets.
				</p>
				<div>
					<el-image :src="simdunkImg" class="simdunk-img" />
				</div>
				<!-- <button class="simdunk-box-botton">More</button> -->
			</div>
			<div class="simdunk-box-img" :class="{ active: transform.state }">
				<el-image :src="topPeople" class="top-people" />
				<el-image :src="peopleIcon" class="people-icon" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import topImg from "@/assets/imgs/home/top/top-img.png";
import simdunkImg from "@/assets/imgs/home/top/simdunk-img.png";
import topPeople from "@/assets/imgs/home/top/top-people.png";
import peopleIcon from "@/assets/imgs/home/top/people-icon.png";

const transform = reactive({
	state: false,
});

onMounted(() => {
	setTimeout(() => {
		transform.state = true;
	}, 500);
});
</script>

<style lang="less" scoped>
#home-top {
	position: relative;
	.top-spark {
		position: absolute;
		left: 0;
		right: 0;
		top: 26rem;
		margin: auto;
		height: 41.5rem;
		background-image: url("/src/assets/imgs/home/top/spark-img.png");
		background-repeat: repeat-x;
	}
	.main {
		height: 92.5rem;
		position: relative;
		overflow: hidden;
		.top-img {
			position: absolute;
			width: 68.375rem;
			left: 1.875rem;
			top: -92.5rem;
			transition: transform 1s ease;
			&.active {
				transform: translateY(92.5rem);
			}
		}
		.simdunk-box {
			position: absolute;
			top: 15rem;
			left: -86rem;
			transition: transform 2.5s ease;
			&.active {
				transform: translateX(90.25rem);
			}
			.simdunk-box-text {
				width: 31rem;
				font-size: 1.625rem;
				line-height: 1.875rem;
			}
			.simdunk-img {
				width: 43rem;
				margin-top: 4.625rem;
			}
			.simdunk-box-botton {
				margin-top: 5.875rem;
				font-size: 2.25rem;
				padding: 1.5rem 4.5rem;
				background-color: #87cd00;
				border-radius: 3rem;
				color: #fff;
			}
		}
		.simdunk-box-img {
			position: absolute;
			right: 6.375rem;
			bottom: -156rem;
			transition: transform 1.5s ease;
			&.active {
				transform: translateY(-163rem);
			}
			.top-people {
				width: 33.625rem;
			}
			.people-icon {
				width: 1.625rem;
				position: absolute;
				top: 8.5rem;
				right: -3rem;
			}
		}
	}
}
</style>
