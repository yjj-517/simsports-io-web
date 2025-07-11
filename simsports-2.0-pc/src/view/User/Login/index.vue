<!-- 登录页面 -->
<template>
	<div class="login_box">
		<p class="login_box_title">Log In</p>
		<el-form ref="userRef" :model="user" :rules="userRules">
			<div class="box_text">
				<div class="box_text_input">
					<el-image :src="userIcon" class="userIcon" />
					<span>Email</span>
				</div>
				<el-form-item prop="account" :rules="[{ type: 'email', message: 'Email format error', trigger: 'blur' }]">
					<div id="login_input">
						<el-input v-model="user.account" placeholder="Enter Your Email" clearable />
					</div>
				</el-form-item>
				<div class="box_text_input">
					<el-image :src="lockIcon" class="lockIcon" />
					<span>Password</span>
				</div>
				<el-form-item
					prop="password"
					:rules="[
						{
							min: 6,
							max: 12,
							message: 'Password must be between 6 and 12 characters long',
							trigger: 'blur',
						},
					]"
				>
					<div id="login_input">
						<el-input v-model="user.password" placeholder="Enter Your Password" show-password clearable />
					</div>
				</el-form-item>
				<router-link to="/user/recover" class="foget_text">Forget Password</router-link>
			</div>
		</el-form>
		<button class="login_box_input" @click.stop="onLogin(userRef)">Log In</button>
		<p class="sign_up_text">
			<span>Don't have an account yet?</span>
			<router-link to="/user/logon" class="sign_up">Sign up</router-link>
		</p>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import lockIcon from "@/assets/imgs/account/lockIcon.png"; //lock
import userIcon from "@/assets/imgs/account/userIcon.png"; //user
import { postLogin } from "@/http/api"; //接口
import type { FormInstance, FormRules } from "element-plus"; //rules
import { ElMessage } from "element-plus"; //提示
import { useStores } from "@/store/index"; //store
import { useRouter } from "vue-router"; //路由
const useStore = useStores(); //用户信息
const router = useRouter(); //路由
// 登录账号
const user: any = reactive({
	account: "", //邮箱
	password: "", //密码
	captcha_code: "666666", //验证码
	login_type: 1, //登录注册方式 1-账号密码 2-第三方验证
});
// 表单验证
const userRef = ref<FormInstance>();
// 验证规则
const userRules = reactive<FormRules>({
	account: [{ required: true, message: "Please enter your email address", trigger: "blur" }],
	password: [{ required: true, message: "Please input a password", trigger: "blur" }],
});
const onLogin = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	// 表单所有字段校验
	formEl.validate(v => {
		if (v) {
			postLogin(user).then((res: any) => {
				if (res.code == 0) {
					ElMessage.success({
						message: "Login Succeeded",
					});
					useStore.addUser(res.data); // 存储用户信息
					router.push({
						path: "/account",
					}); //跳转至个人页面
				} else {
					ElMessage.error({
						message: res.message,
					});
				}
			});
		} else {
			ElMessage.warning({
				message: "Invalid Input",
			});
			return false;
		}
	});
};
</script>

<style lang="less" scoped>
.login_box {
	background-color: @COLOR_Z;
	min-height: calc(100vh - 0.86rem);
	.mixin-flex(column,flex-start,center, nowrap);
	.login_box_title {
		font-size: 0.46rem;
		font-weight: bolder;
		margin-top: 1rem;
		line-height: 0.64rem;
	}
	.box_text {
		.box_text_input {
			.mixin-flex(row,flex-start,center, nowrap);
			line-height: 0.3rem;
			margin: 0.2rem 0 0 0.1rem;
			.userIcon {
				.w-h(0.3rem,0.2rem);
			}
			.lockIcon {
				.w-h(0.35rem,0.18rem);
			}
			span {
				font-size: 0.18rem;
				margin-left: 0.1rem;
			}
		}
		.foget_text {
			display: block;
			text-align: right;
			font-size: 0.18rem;
			line-height: 0.28rem;
			margin: 0.16rem 0.12rem 0 0;
			opacity: 0.6;
			line-height: 0.24rem;
			color: #fff;
			&:hover {
				opacity: 1;
			}
		}
	}
	.login_box_input {
		margin-top: 0.32rem;
		font-size: 0.26rem;
		padding: 0.14rem 0.3rem;
		background-color: @COLOR_L;
		color: @COLOR_Z;
		font-weight: bold;
		border-radius: 0.3rem;
		&:hover {
			opacity: 0.8;
		}
	}
	.sign_up_text {
		margin: 0.2rem 0;
		font-size: 0.18rem;
		span {
			opacity: 0.8;
			&:hover {
				opacity: 1;
			}
		}
		.sign_up {
			margin-left: 0.2rem;
			color: @COLOR_L;
		}
	}
}
</style>
