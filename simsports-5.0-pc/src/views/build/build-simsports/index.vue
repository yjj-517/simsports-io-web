<!-- build-simsports -->
<template>
	<div class="build-simsports-box">
		<h2 class="fillet-h2-title">Build with Simsports</h2>
		<p class="fillet-paragraph-text build-simsports-text">
			Leveraging Web3 blockchain and Al technologies, the SimSports gaming platform offers developers an all-in-one decentralized
			game distribution tool for development, creation/IP, operation, and promotion. Simultaneously, it provides players with a
			diverse range of Web3 games, ensuring a fair and asset-protected gaming experience.
		</p>
		<div class="build-simsports-list">
			<div class="build-simsports-list-top">
				<div
					v-for="(item, index) in builData.list.list1"
					:key="index"
					class="build-simsports-list-box"
					@click.stop="goLink(item.linkUrl)"
				>
					<el-image :src="item.listimg" class="build-img" />
					<p class="list-box-title">{{ item.title }}</p>
					<div class="list-box-line"></div>
					<p class="fillet-paragraph-text02">{{ item.text }}</p>
					<el-image v-if="item.linkUrl" :src="iconSkip" class="icon-img" />
				</div>
			</div>
			<div class="build-simsports-list-bottom">
				<div
					v-for="(item, index) in builData.list.list2"
					:key="index"
					class="build-simsports-list-box"
					@click.stop="jumpId(item.linkUrl)"
				>
					<el-image :src="item.listimg" class="build-img" />
					<p class="list-box-title">{{ item.title }}</p>
					<div class="list-box-line"></div>
					<p class="fillet-paragraph-text02">{{ item.text }}</p>
					<el-image :src="iconPageturning" class="icon-img" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, nextTick } from "vue";
import iconPageturning from "@/assets/imgs/build/build-simsports/icon-pageturning.png";
import iconSkip from "@/assets/imgs/build/build-simsports/icon-skip.png";
import buildSimsports01 from "@/assets/imgs/build/build-simsports/build-simsports01.png";
import buildSimsports02 from "@/assets/imgs/build/build-simsports/build-simsports02.png";
import buildSimsports03 from "@/assets/imgs/build/build-simsports/build-simsports03.png";
import buildSimsports04 from "@/assets/imgs/build/build-simsports/build-simsports04.png";
import buildSimsports05 from "@/assets/imgs/build/build-simsports/build-simsports05.png";
import { useRouter } from "vue-router";
const router = useRouter(); //router
// 展示数据
const builData = reactive({
	list: {
		list1: [
			{
				title: "Become a SimSports Partner",
				listimg: buildSimsports01,
				text: "Collaborate to create the best gamingprojects and grow together.",
				linkUrl: "https://forms.gle/M7g2QgX6FS1bHh4k8",
			},
			{
				title: "Open Source",
				listimg: buildSimsports02,
				text: "We will soon be open-sourcing our code, allowing more supporters to participate in the SimSports ecosystem.",
				linkUrl: "",
			},
			{
				title: "Documentation",
				listimg: buildSimsports03,
				text: "Go under the hood for all things Simsports.",
				linkUrl: "https://docs.simsports.io/simsports",
			},
		],
		list2: [
			{
				title: "Infrastructure",
				listimg: buildSimsports04,
				text: "Tap into powerful tools and infra built by Simsports.",
				linkUrl: "build-game-platform-infrastructure",
			},
			{
				title: "AI Technology",
				listimg: buildSimsports05,
				text: "Game Al algorithm based on a dual mechanism of reinforcement learning and imitation learning.",
				linkUrl: "build-game-ai-solutions",
			},
		],
	},
});
// 跳转到外部页面
const goLink = (link: any) => {
	if (link) {
		window.open(link, "_blank");
	}
};
// 跳转到指定位置
const jumpId = (id: any) => {
	router.push("/build");
	if (id) {
		// 在路由导航后，使用 nextTick 将页面滚动到指定位置
		nextTick(() => {
			const targetElement = document.getElementById(id);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: "smooth" });
			}
		});
	}
};
</script>

<style lang="less" scoped>
.build-simsports-box {
	padding-top: 1.6rem;
	.build-simsports-text {
		width: 9.3rem;
		text-align: center;
		margin: 0.16rem auto 0;
	}
	.build-simsports-list {
		margin: 1.36rem 0 0.64rem;
		.build-simsports-list-top {
			.mixin-flex (row,space-between,flex-start,nowrap);
			.build-simsports-list-box {
				&:nth-of-type(1) {
					.list-box-line {
						background-image: linear-gradient(to right, #0052cd, #87cd00);
					}
				}
				&:nth-of-type(2) {
					.list-box-line {
						background-image: linear-gradient(to right, #cdac00, #00a8cd);
					}
				}
				&:nth-of-type(3) {
					.list-box-line {
						background-image: linear-gradient(to right, #009ccd, #5a00cd);
					}
				}
			}
		}
		.build-simsports-list-bottom {
			margin-top: 1.06rem;
			.mixin-flex (row,center,flex-start,nowrap);
			.build-simsports-list-box {
				margin: 0 0.2rem;
				&:nth-of-type(1) {
					.list-box-line {
						background-image: linear-gradient(to right, #002dcd, #cd0094);
					}
				}
				&:nth-of-type(2) {
					.list-box-line {
						background-image: linear-gradient(to right, #cd0094, #cd7b00);
					}
				}
			}
		}
		.build-simsports-list-box {
			.w-h(3.7rem,2.5rem);
			border: 0.01rem solid transparent;
			border-radius: 0.08rem;
			background-clip: padding-box, border-box;
			background-origin: padding-box, border-box;
			background-image: linear-gradient(to bottom, #16211c, #16211c),
				linear-gradient(135deg, rgba(#87cd00, 0), rgba(#87cd00, 0.6));
			position: relative;
			cursor: pointer;
			.build-img {
				position: absolute;
				.w-h(2.3rem,2.2rem);
				top: -0.98rem;
				left: 50%;
				transform: translateX(-50%);
			}
			.icon-img {
				position: absolute;
				right: 0.12rem;
				bottom: 0.12rem;
			}
			.list-box-title {
				margin-top: 0.7rem;
				text-align: center;
				font-size: 0.2rem;
				line-height: 0.28rem;
				font-weight: bold;
			}
			.list-box-line {
				.w-h(3.12rem,0.02rem);
				margin: 0.12rem auto 0;
			}
			.fillet-paragraph-text02 {
				width: 2.5rem;
				text-align: center;
				margin: 0.32rem auto 0;
			}
		}
	}
}
</style>
