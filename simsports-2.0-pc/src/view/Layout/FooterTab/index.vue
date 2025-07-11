<!-- 底部导航 -->
<template>
	<div class="foot">
		<div id="container">
			<div class="foot_box">
				<!-- logo -->
				<div class="logo_box">
					<el-link :underline="false" href="/home"><el-image :src="logo_img" class="logo_img" /></el-link>
					<div class="logos_img">
						<el-link class="click_box_text" :underline="false" href="https://twitter.com/SimSportsClub" target="_blank">
							<el-image :src="logo001" class="logo001" />
						</el-link>
						<el-link class="click_box_text" :underline="false" href="https://discord.gg/ZAHwh3PF" target="_blank">
							<el-image :src="logo002" class="logo001" />
						</el-link>
						<el-link class="click_box_text" :underline="false" href="https://t.me/simsports" target="_blank">
							<el-image :src="logo003" class="logo001" />
						</el-link>
						<el-link class="click_box_text" :underline="false" href="https://medium.com/@SimSports_CluB" target="_blank">
							<el-image :src="logo004" class="logo001" />
						</el-link>
					</div>
				</div>
				<!-- 平台 -->
				<div class="introduce">
					<div v-for="(item, index) in terraceArr" :key="index" class="introduce_box">
						<p class="box_title">{{ item.name }}</p>
						<div class="box_text">
							<p v-for="(i, k) in item.listArr" :key="k">
								<el-link :href="i.url" :underline="false" @click.stop="goRouter(i.name)">
									{{ i.name }}
								</el-link>
							</p>
						</div>
					</div>
				</div>
				<!-- 邮箱 -->
				<div class="introduce">
					<div class="introduce_box">
						<p class="box_title">Contact Us</p>
						<div class="box_text">
							<p>
								<span class="email_box">Email:</span>
								<el-link href="mailto:simsports2023@gmail.com">simsports2023@gmail.com</el-link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { reactive, nextTick } from "vue";
import logo_img from "@/assets/imgs/layout/logo01.png";
import logo001 from "@/assets/imgs/layout/logo001.png";
import logo002 from "@/assets/imgs/layout/logo002.png";
import logo003 from "@/assets/imgs/layout/logo003.png";
import logo004 from "@/assets/imgs/layout/logo004.png";
import { useRouter } from "vue-router";
const router = useRouter();
// 平台介绍
const terraceArr = reactive([
	{
		name: "About Us",
		listArr: [
			{
				name: "Partners",
				url: "",
			},
			{
				name: "Ecology",
				url: "",
			},
			{
				name: "Roadmap",
				url: "",
			},
			{
				name: "Whitepaper",
				url: "", ///whitepaper
			},
		],
	},
	{
		name: "Ecology",
		listArr: [
			{
				name: "Marketplace",
				url: "", ///nft/market
			},
			{
				name: "Simdunk",
				url: "",
			},
		],
	},
	{
		name: "Community",
		listArr: [
			{
				name: "Twitter",
				url: "https://twitter.com/SimSportsClub",
			},
			{
				name: "Discord",
				url: "https://discord.gg/ZAHwh3PF",
			},
			{
				name: "Telegram",
				url: "https://t.me/simsports",
			},
			{
				name: "Medium",
				url: "https://medium.com/@SimSports_CluB",
			},
		],
	},
]);
const goRouter = (routerId: any) => {
	if (routerId == "Partners") {
		router.push("/home");
		// 在路由导航后，使用 nextTick 将页面滚动到指定位置
		nextTick(() => {
			const targetElement = document.getElementById("partner_view");
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: "smooth" });
			}
		});
	} else if (routerId == "Ecology") {
		router.push("/home");
		nextTick(() => {
			const targetElement = document.getElementById("ecology_view");
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: "smooth" });
			}
		});
	} else if (routerId == "Roadmap") {
		router.push("/home");
		nextTick(() => {
			const targetElement = document.getElementById("develop_view");
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: "smooth" });
			}
		});
	}
};
</script>

<style lang="less" scoped>
.foot {
	background: #333;
	.foot_box {
		padding: 0.7rem 0;
		.mixin-flex(row;space-between;flex-start;nowrap);
		.logo_box {
			.logo_img {
				.w-h(2.07rem,0.34rem);
			}
			.logos_img {
				margin-top: 0.18rem;
				.logo001 {
					.w-h(0.36rem,0.27rem);
					margin-right: 0.2rem;
				}
			}
		}
		.introduce {
			.mixin-flex(row;space-between;flex-start;nowrap);
			.introduce_box {
				&:nth-child(2) {
					margin: 0 1rem;
				}
				.box_title {
					line-height: 0.36rem;
					font-size: 0.26rem;
					font-weight: bold;
				}
				.box_text {
					margin-top: 0.5rem;
					p {
						margin-bottom: 0.4rem;
						.email_box {
							font-size: 0.24rem;
							vertical-align: -0.06rem;
							margin-right: 0.1rem;
						}

						.el-link {
							color: #fff;
							font-size: 0.24rem;
							&:hover {
								color: @COLOR_L;
							}
						}
					}
				}
			}
		}
	}
}
</style>
