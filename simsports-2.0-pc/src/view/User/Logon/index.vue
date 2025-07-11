<!-- 注册页面 -->
<template>
	<div class="logon_box">
		<p class="login_box_title">Sign Up</p>
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
						<el-input v-model="user.password" placeholder="Enter New Password" show-password clearable />
					</div>
				</el-form-item>
				<div class="box_text_input">
					<span>Confirm Password</span>
				</div>
				<el-form-item prop="pwd01">
					<div id="login_input">
						<el-input v-model="user.pwd01" placeholder="Confirm New Password" show-password clearable />
					</div>
				</el-form-item>
				<div class="box_text_input">
					<span>Verification Code</span>
				</div>
				<el-form-item prop="verify_code">
					<div id="login_input" class="code_input">
						<el-input
							v-model="user.verify_code"
							placeholder="Input Verification Code"
							:class="!sms.disabled ? 'code_text' : 'code_text_width'"
							clearable
						/>
						<span v-if="!sms.disabled" @click="onCaptcha(userRef)">Send Code</span>
						<span v-if="sms.disabled" class="color_c">Resend after {{ sms.total }} second(s)</span>
					</div>
				</el-form-item>
			</div>
		</el-form>
		<button class="login_box_input" @click.stop="onLogon(userRef)">Create an account</button>
		<p class="sign_up_text">
			<span>Already have an account?</span>
			<router-link to="/user/login" class="sign_up">Log In</router-link>
		</p>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import lockIcon from "@/assets/imgs/account/lockIcon.png"; //lock
import userIcon from "@/assets/imgs/account/userIcon.png"; //user
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";
import { postEmail, postRegister } from "@/http/api"; //接口
import { useRouter } from "vue-router"; //路由
const router = useRouter(); //路由
// 注册信息
const user = reactive({
	account: "", //邮箱
	password: "", //密码
	pwd01: "", //确认密码
	captcha_code: "1", //人机验证码
	captcha_id: "", //人机验证码ID
	verify_code: "", //验证码
	login_type: 1, //登录注册方式 1-账号密码 2-第三方验证
});
// 表单验证
const userRef = ref<FormInstance>();
// 密码再次验证
const validatePass2 = (rule: any, value: any, callback: any) => {
	if (value === "") {
		callback(new Error("Please confirm your password"));
	} else if (value !== user.password) {
		callback(new Error("The passwords you entered do not match"));
	} else {
		callback();
	}
};
// 验证规则
const userRules = reactive<FormRules>({
	account: [{ required: true, message: "Please enter your email address", trigger: "blur" }],
	password: [{ required: true, message: "Please enter a valid password", trigger: "blur" }],
	pwd01: [{ validator: validatePass2, trigger: "blur" }],
	verify_code: [{ required: true, message: "Please enter the verification code", trigger: "blur" }],
});
// 倒计时
const sms = reactive({
	disabled: false, //状态改变
	total: 60, //倒计时计数
});
const timerHandler = () => {
	sms.disabled = true;
	const timer = setInterval(() => {
		if (sms.total > 0) {
			sms.total--;
		} else {
			clearInterval(timer);
			sms.total = 60;
			sms.disabled = false;
		}
	}, 1000);
};
// 获取验证码
const onCaptcha = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	//特定字段校验
	formEl.validateField("account", v => {
		if (v) {
			const emailObj = {
				account: user.account,
				email_type: 1, //1注册
			};
			postEmail(emailObj).then((res: any) => {
				if (res.code == 0) {
					timerHandler(); //倒计时
					ElMessage.success({
						message: "The verification code has been sent to your email. Please check your inbox.",
					});
				} else {
					ElMessage.error({
						message: res.message,
					});
				}
			});
		} else {
			ElMessage.warning({
				message: "Invalid Email Address",
			});
		}
	});
};
// 注册
const onLogon = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	// 表单所有字段校验
	formEl.validate(v => {
		if (v) {
			postRegister(user).then((res: any) => {
				if (res.code == 0) {
					ElMessage.success({
						message: "Your password has been updated. Please log in again to continue using the service.",
					});
					router.push({
						path: "/user/login",
					}); //跳转至登录
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
.logon_box {
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
				margin-right: 0.15rem;
			}
			.lockIcon {
				.w-h(0.35rem,0.18rem);
				margin-right: 0.1rem;
			}
			span {
				font-size: 0.18rem;
			}
		}
		.logon_text {
			margin-top: 0.56rem;
		}
		.code_input {
			.mixin-flex(row,space-between,center, nowrap);
			width: 4.3rem;
			.code_text {
				width: 3.2rem !important;
			}
			.code_text_width {
				width: 2.2rem !important;
			}
			span {
				line-height: 0.4rem;
				text-align: center;
				border-radius: 2rem;
				background-color: @COLOR_L;
				color: @COLOR_Z;
				font-size: 0.18rem;
				font-weight: bold;
				padding: 0 0.08rem;
				cursor: pointer;
				&:hover {
					opacity: 0.8;
				}
				&.color_c {
					background-color: #e6e6e6;
					color: #8d8d8d;
				}
			}
		}
		.foget_text {
			display: block;
			text-align: right;
			font-size: 0.18rem;
			line-height: 0.28rem;
			margin: 0.12rem 0.12rem 0 0;
			opacity: 0.6;
			line-height: 0.24rem;
			color: #fff;
			&:hover {
				opacity: 1;
			}
		}
	}
	.login_box_input {
		margin-top: 0.8rem;
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
