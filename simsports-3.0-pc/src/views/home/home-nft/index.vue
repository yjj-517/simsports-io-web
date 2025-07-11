<!-- 主页-社区角色 -->
<template>
	<div id="nft-view" class="main">
		<div class="bottom-color"></div>
		<div class="role-box">
			<div v-for="(item, index) in role.arr" :key="index" class="role-box-content" @click="changeRole(item.id)">
				<div v-show="item.id !== roleId" class="role-back">
					<el-image :src="item.roleBack" class="role-back-img" />
					<!-- <p>{{ item.id }}</p> -->
				</div>
				<div v-show="item.id == roleId" class="role-backdrop">
					<el-image :src="item.roleBackdrop" class="role-backdrop-img" />
					<div class="role-backdrop-content">
						<div class="role-backdrop-content-left">
							<div class="role-drop-logo">
								<el-image :src="roleLogo" class="role-logo" />
								<!-- <div class="role-drop-logo-name">
									<p>GENESIS</p>
									<p>DR!P BOY</p>
								</div> -->
							</div>
							<p class="role-drop-name">{{ item.name }}</p>
							<p class="role-drop-name">{{ item.titile }}</p>
							<p class="role-drop-describe">{{ item.text }}</p>
						</div>
						<div class="role-backdrop-content-right">
							<el-image :src="item.position" class="role-position" />
							<el-image :src="item.role" class="role-img" />
							<!-- <el-image :src="item.position" class="role-position" /> -->
							<!-- <p class="role-drop-sign">{{ item.sign }}</p> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import role01 from "@/assets/imgs/home/nft/role01.png";
import role02 from "@/assets/imgs/home/nft/role02.png";
import role03 from "@/assets/imgs/home/nft/role03.png";
import roleBack01 from "@/assets/imgs/home/nft/role-back01.png";
import roleBack02 from "@/assets/imgs/home/nft/role-back02.png";
import roleBack03 from "@/assets/imgs/home/nft/role-back03.png";
import roleBackdrop01 from "@/assets/imgs/home/nft/role-backdrop01.png";
import roleBackdrop02 from "@/assets/imgs/home/nft/role-backdrop02.png";
import roleBackdrop03 from "@/assets/imgs/home/nft/role-backdrop03.png";
import roleSr from "@/assets/imgs/home/nft/role-sr.png";
import roleSsr from "@/assets/imgs/home/nft/role-ssr.png";

import roleLogo from "@/assets/imgs/home/nft/role-logo.png";
const roleId = ref("02"); //展示角色id
// 角色数据
const role = reactive({
	arr: [
		{
			id: "01",
			role: role01,
			roleBack: roleBack01,
			roleBackdrop: roleBackdrop01,
			name: "The Colossus",
			titile: "Balam",
			text: "Balan the Giant was born in a remote and mysterious tribe in South America. It is said that the people here carry the blood of ancient giants, and villagers generally possess towering physiques that surpass ordinary humans. ",
			sign: "FORTITUDE",
			position: roleSr,
		},
		{
			id: "02",
			role: role02,
			roleBack: roleBack02,
			roleBackdrop: roleBackdrop02,
			name: "The Sweet Sauce",
			titile: "Effy",
			text: "Effy was born into an ordinary African American family in the impoverished neighborhood of Brooklyn. Her father was an experienced DJ in the SimDunk League. Efi, who had been exposed to hip-hop culture from a young age, constantly fantasized about achieving victory on the SimDunk's court.",
			sign: "UNITY",
			position: roleSr,
		},
		{
			id: "03",
			role: role03,
			roleBack: roleBack03,
			roleBackdrop: roleBackdrop03,
			name: "The  Sniper",
			titile: "Gunnar",
			text: "Gunnar, a sniper who struck fear into the hearts of enemies on the battlefield, had his eyesight injured during an enemy ambush while on a mission. With the aid of cutting-edge cybernetic technology, he received mechanical ocular implants, awakening his talents on the SimDunk court. Just like a sniper, he possesses an uncanny and deadly accuracy in his three-point shots.",
			sign: "MANEUVER",
			position: roleSsr,
		},
	],
});
//角色切换
const changeRole = (num: any) => {
	role.arr.forEach((item: any) => {
		if (num == item.id) {
			roleId.value = item.id;
		}
	});
};
</script>

<style lang="less" scoped>
.main {
	padding: 120px 0 50px 0;
	.bottom-color {
		position: relative;
		&::before {
			.w-h(566px,566px);
			content: "";
			position: absolute;
			top: -150px;
			right: -200px;
			background-color: #1c2e12;
			border-radius: 50%;
			filter: blur(114px);
		}
	}
	.role-box {
		position: relative;
		.mixin-flex (row, space-evenly, flex-start, nowrap);
		.role-box-content {
			cursor: pointer;
			.role-back {
				position: relative;
				.w-h(215px,611px);
				border-radius: 20px 60px 20px 60px;
				overflow: hidden;
				border: 2px solid #4c505c;
				.role-back-img {
					.w-h(215px,611px);
				}
				p {
					position: absolute;
					width: 215px;
					text-align: center;
					top: 0;
					font-size: 38px;
					font-family: Impact;
					line-height: 90px;
				}
			}
			.role-backdrop {
				position: relative;
				.w-h(855px,611px);
				border-radius: 20px 60px 20px 60px;
				overflow: hidden;
				.role-backdrop-img {
					.w-h(855px,611px);
				}
				.role-backdrop-content {
					position: absolute;
					inset: 0 0 0 0;
					.mixin-flex (row,space-between,flex-start,nowrap);
					.role-backdrop-content-left {
						margin: 50px 0 0 50px;
						.role-drop-logo {
							.mixin-flex (row,flex-start,center,nowrap);
							.role-logo {
								// .w-h(68px,68px);
								// width: 68px;
								width: 100px;
							}
							.role-drop-logo-name {
								p {
									margin-left: 10px;
									font-size: 22px;
									line-height: 30px;
								}
							}
						}
						.role-drop-name {
							font-family: Arial-BoldMT;
							margin-top: 20px;
							font-size: 28px;
							font-weight: bold;
							line-height: 30px;
						}
						.role-drop-describe {
							margin-top: 16px;
							width: 260px;
							line-height: 24px;
						}
					}

					.role-backdrop-content-right {
						position: relative;
						.role-img {
							margin: 20px 80px 0 0;
							width: 420px;
						}
						.role-position {
							width: 200px;
							position: absolute;
							right: 10px;
							top: 30px;
						}
						.role-drop-sign {
							font-size: 42px;
							line-height: 48px;
							color: #000000;
							font-family: Impact;
							margin: -54px 0 0 -30px;
						}
					}
				}
			}
		}
	}
}
</style>
