// login-view
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { postAdminLogin } from "@/http/modules/lgoin"; //接口
import { accountStores } from "@/store/index"; //store

import SimsportsLogoIcon from "@/assets/imgs/logo/simsports-logo-icon.svg?react";

import { Button, Input, Form, Space, message, Flex, Card, Divider } from "antd";

import { UserOutlined, LockOutlined, CloseCircleOutlined } from "@ant-design/icons";

const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转
	const { addUser, delUser } = accountStores(); //store
	const [loading, setLoading] = useState<boolean>(false);

	const [form] = Form.useForm();

	// 表单成功数据返回
	const onFinish = async (values: any) => {
		console.log("Success:", values);
		if (!loading) {
			setLoading(true);
			const obj = {
				username: values.username,
				password: values.password,
			};
			postAdminLogin(obj).then((res: any) => {
				console.log(res);
				setLoading(false);
				if (res.code === 0) {
					addUser(res.data.token_info, res.data.user_info);
					navigate("/");
				} else {
					message.warning(res.message);
				}
			});
		}
	};

	// 表单错误数据返回
	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};

	useEffect(() => {
		delUser();
	}, []);
	return (
		<>
			<Card hoverable>
				<Flex align="center">
					<SimsportsLogoIcon className="text-primary w-[50px] h-auto" />
					<h2 className="font-bold text-5xl text-primary">Simsports-Admin</h2>
				</Flex>
				<Divider />
				<Form
					form={form}
					name="simadm-login"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					size="large"
				>
					<Form.Item name="username" rules={[{ required: true, message: "Username" }]}>
						<Input placeholder="Username" prefix={<UserOutlined />} allowClear />
					</Form.Item>
					<Form.Item name="password" rules={[{ required: true, message: "Password" }]}>
						<Input.Password placeholder="Password" prefix={<LockOutlined />} allowClear />
					</Form.Item>
					<Form.Item>
						<Space className="flex justify-center items-center gap-4 mt-6">
							<Button
								onClick={() => {
									form.resetFields();
								}}
								icon={<CloseCircleOutlined />}
							>
								Reset
							</Button>
							<Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
								Login
							</Button>
						</Space>
					</Form.Item>
				</Form>
			</Card>
		</>
	);
};

export default View;
