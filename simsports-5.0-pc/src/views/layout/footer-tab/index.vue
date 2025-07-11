<!-- footer-tab -->
<template>
	<footer>
		<div class="nav-box">
			<div :class="routerId == '/home' ? 'nav-home-box' : 'nav-other-box'">
				<div class="logo-box">
					<el-link :underline="false" href="/home">
						<el-image :src="simsportsImg" class="simsports-img" />
					</el-link>
					<div class="footerlink-box">
						<div v-for="(item, index) in footerLink.list" :key="index" class="footerlink-box-list">
							<p>{{ item.name }}</p>
							<div v-for="(t, i) in item.list" :key="i" class="footerlink-list-item">
								<el-link :key="index" :underline="false" :href="t.link" target="_blank">{{ t.name }}</el-link>
							</div>
						</div>
					</div>
					<div class="footerlink-community">
						<button class="fillet-diamond-button">
							<el-link
								:href="importantLink.appOfficialSite"
								target="_blank"
								:underline="false"
								rel="nofollow noopener noreferrer"
								class="link-play"
							>
								<span>Start Playing</span>
								<el-image :src="iconPlayLink" class="link-img" />
							</el-link>
						</button>
						<div class="community-box">
							<el-link
								v-for="(item, index) in userCommunityData"
								:key="index"
								:underline="false"
								:href="item.link"
								target="_blank"
							>
								<el-image :src="item.imgurl" class="medium-img" />
							</el-link>
						</div>
					</div>
				</div>
				<div class="footer-bottom">
					<div class="download-box">
						<el-link v-for="(item, index) in userInformationData" :key="index" :underline="false" :href="item.link">
							<span>{{ item.name }}</span>
						</el-link>
					</div>
					<div class="brand-box">© Copyright 2023 SimSports. All Rights Reserved.</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect } from "vue";
import { userCommunityData, userInformationData, importantLink } from "@/utils/medialink"; //共用链接
import simsportsImg from "@/assets/imgs/logo/simsports-img.png";
import iconPlayLink from "@/assets/imgs/layout/icon-play-link.png";

import { useRouter } from "vue-router"; //router

const router = useRouter(); //获取路由
const routerId = ref(""); //路由id
const footerLink = reactive({
	list: [
		{
			name: "Build",
			list: [
				{
					name: "Platform Infrastructure",
					link: "/build",
				},
				{
					name: "Apply for Partnership",
					link: "https://forms.gle/M7g2QgX6FS1bHh4k8",
				},
			],
		},
		// {
		// 	name: "Documentation",
		// 	list: whitePaperData,
		// },
	],
});
watchEffect(() => {
	router.getRoutes().map(item => {
		// 解决刷新时路由的问题
		if (item.path === router.currentRoute.value.path) {
			// routerId.value = router.currentRoute.value.path;
			routerId.value = "/" + router.currentRoute.value.path.split("/")[1];
		}
	});
});
</script>

<style lang="less" scoped>
footer {
	width: 100%;
	background-color: #000;
	.nav-box {
		.nav-home-box {
			padding: 0.48rem 0;
			max-width: 12rem;
			margin: 0 auto;
		}
		.nav-other-box {
			padding: 0.48rem 0;
			width: 12rem;
			margin: 0 auto;
		}
		.logo-box {
			.mixin-flex (row,space-between,flex-start,nowrap);
			.simsports-img {
				width: 0.6rem;
			}
			.footerlink-box {
				margin-right: 2rem;
				.mixin-flex (row,flex-start,flex-start,nowrap);
				.footerlink-box-list {
					margin-right: 1.2rem;
					.footerlink-list-item {
						.el-link {
							font-size: 0.14rem;
							line-height: 0.18rem;
							margin-top: 0.16rem;
							color: #999999;
							&:hover {
								color: #fff;
							}
						}
					}
				}
			}
			.footerlink-community {
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: flex-end;
				gap: 0.4rem;
				.fillet-diamond-button {
					clip-path: polygon(0.14rem 0, 100% 0, 100% calc(100% - 0.14rem), calc(100% - 0.14rem) 100%, 0 100%, 0 0.14rem);
					.w-h(1.68rem,0.4rem);
					.link-play {
						.mixin-flex(row,center,center,nowrap);
						gap: 0.04rem;
						color: @COLOR_F;
						.link-img {
							.w-h(0.24rem,0.24rem);
						}
					}
				}
				.community-box {
					.medium-img {
						width: 0.24rem;
						margin: 0 0.18rem;
					}
				}
			}
		}
		.footer-bottom {
			margin-top: 0.52rem;
			.mixin-flex (row,space-between,flex-start,nowrap);
			color: #666666;
			font-size: 0.14rem;
			.download-box {
				.el-link {
					color: #666666;
					margin-right: 0.92rem;
					:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}
}
</style>
