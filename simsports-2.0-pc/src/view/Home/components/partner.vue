<!-- 合作商 -->
<template>
	<div class="partner_box">
		<div id="container">
			<el-image :src="partnerImg" class="partnerImg" />
			<p>OUR PARTNERS</p>
		</div>
	</div>
	<div class="partner_box_text">
		<div id="container">
			<div class="partner_img_box">
				<el-image :src="partnerEth" class="partner_img_icon" />
				<el-image :src="partnerBnb" class="partner_img_icon" />
				<el-image :src="partnerWemix" class="partner_img_icon" />
			</div>
			<div class="partner_img_box">
				<el-image :src="partnerMate" class="partner_img_icon" />
				<el-image :src="partnerBkex" class="partner_img_icon" />
				<el-image :src="partnerBinance" class="partner_img_icon" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import partnerImg from "@/assets/imgs/home/partner.png";
import partnerBinance from "@/assets/imgs/home/partnerBinance.png";
import partnerBkex from "@/assets/imgs/home/partnerBkex.png";
import partnerBnb from "@/assets/imgs/home/partnerBnb.png";
import partnerEth from "@/assets/imgs/home/partnerEth.png";
import partnerMate from "@/assets/imgs/home/partnerMeta.png";
import partnerWemix from "@/assets/imgs/home/partnerWemix.png";
</script>

<style lang="less" scoped>
.partner_box {
	background: linear-gradient(#18c9e1, #00ffff, #28a8ce);
	text-align: center;
	.partnerImg {
		margin-top: 0.72rem;
		.w-h(1.48rem,1.06rem);
	}
	p {
		margin-top: 0.28rem;
		font-size: 0.6rem;
		font-weight: bolder;
	}
}
.partner_box_text {
	background: linear-gradient(#28a8ce, #4e58a0, #5d358d);
	.partner_img_box {
		.mixin-flex(row,space-between,center,nowrap);
		margin: 0 0.1rem;
		&:nth-child(1) {
			padding-top: 1.5rem;
		}
		&:nth-child(2) {
			margin-top: 0.6rem;
			.partner_img_icon {
				height: 0.8rem;
				&:nth-child(2) {
					margin-left: 1.8rem;
				}
			}
		}
		.partner_img_icon {
			height: 0.8rem;
			&:nth-child(2) {
				margin-left: 2rem;
			}
		}
	}
}
</style>
