// carousel
import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom"; //router

import {
	postAdminAvatarSelectionLibrary,
	getAdminAvatarSelectionLibrary,
	putAdminAvatarSelectionLibrary,
	deleteAdminAvatarSelectionLibrary,
} from "@/http/modules/usersettings"; //api

import UploadMedia from "@/components/upload-media/index"; //UploadMedia

import {
	message,
	Button,
	Image,
	Flex,
	Typography,
	Card,
	Input,
	Spin,
	Form,
	Space,
	Select,
} from "antd"; //antd
import { CloseCircleOutlined } from "@ant-design/icons"; //antd
const { Paragraph } = Typography;

const View: React.FC = () => {
	const [form] = Form.useForm(); //form
	const navigate = useNavigate(); //路由跳转
	const params = useParams(); //路由参数
	const location = useLocation(); //路由参数
	const [upMediaDir] = useState<string>("/users/avatar"); //上传用户头像地址

	const [loading, setLoading] = useState<boolean>(false); //loading
	const [spinning, setSpinning] = React.useState<boolean>(false); //Spinning
	// avartar 数据
	const [avatarData, setAvatarData] = useState<any>({
		changeType: "", // changeType: 1-新增/2-修改/3-删除;
		id: "", //id
		weight: "", //排序
		url: "", //上传地址地址
		name: "", //name
		category: "", //category
	});
	// 获avartar 数据
	const getAvartarData = (id: string) => {
		if (!spinning) {
			if (id && Number(id) !== 0) {
				setSpinning(true); //Spinning
				getAdminAvatarSelectionLibrary(id).then((res: any) => {
					// console.log(res);
					if (res.code === 0) {
						const data = res.data.avatar;
						setAvatarData({
							...avatarData,
							...data,
							changeType: location.state.changeType,
						}); //数据重置
						setSpinning(false); //Spinning
					} else {
						message.warning(res.message);
						if (params.id) {
							getAvartarData(params.id);
						}
					}
				});
			}
		}
	};
	// 获取avatar-id-type
	const gatAvatarId = () => {
		if (location.state && params.id) {
			if (location.state.changeType) {
				setAvatarData({
					...avatarData,
					id: params.id, //id
					changeType: location.state.changeType, //改变头像type
				});
				getAvartarData(params.id);
			} else {
				navigate("*");
			}
		} else {
			navigate("*");
		}
	};
	useEffect(() => {
		gatAvatarId();
	}, []);

	const [selectOptions] = useState([{ value: "default", label: "Default" }]);
	// 点击按钮返回成功
	const onFinish = async (values: any) => {
		console.log("Success:", values);
		// console.log(avatarData);
		if (!loading) {
			setLoading(true);
			const obj = {
				weight: values.weight, //排序
				url: values.url, //上传地址地址
				name: values.name, //name
				category: values.category, //type
			};
			if (avatarData.changeType === 1) {
				// 创建头像
				postAdminAvatarSelectionLibrary(obj).then((res: any) => {
					console.log(res);
					setLoading(false); //loading
					if (res.code === 0) {
						message.success("Success");
						navigate("/user-settings/avatar");
					} else {
						message.warning(res.message);
					}
				});
			} else if (avatarData.changeType === 2) {
				// 更新头像
				putAdminAvatarSelectionLibrary(avatarData.id, obj).then((res: any) => {
					console.log(res);
					setLoading(false); //loading
					if (res.code === 0) {
						message.success("Success");
						navigate("/user-settings/avatar");
					} else {
						message.warning(res.message);
					}
				});
			} else if (avatarData.changeType === 3) {
				// 删除头像
				deleteAdminAvatarSelectionLibrary(avatarData.id).then((res: any) => {
					console.log(res);
					setLoading(false); //loading
					if (res.code === 0) {
						message.success("Success");
						navigate("/user-settings/avatar");
					} else {
						message.warning(res.message);
					}
				});
			}
		}
	};
	// 点击按钮返回错误
	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};
	// 监听数据修改
	const onValuesChange = (changedValues: any) => {
		console.log("onValuesChange=>", changedValues);
		setAvatarData((prevState: any) => ({
			...prevState,
			...changedValues, // 合并更改的字段
		}));
	};
	// 重置按钮
	const onReset = () => {
		gatAvatarId();
	};
	// 监听数据修改，同时修改表单数据
	useEffect(() => {
		form.setFieldsValue(avatarData);
	}, [avatarData]);

	return (
		<>
			<Spin spinning={spinning} fullscreen />
			<Typography.Title level={1}>Change Avarat</Typography.Title>
			<Flex wrap gap={"large"}>
				{/* 表单提交 */}
				<Card className="flex-1" style={{ maxWidth: 600 }}>
					{/* 表单上传数据 */}
					<Form
						form={form}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						onValuesChange={onValuesChange}
						name="change-avatar"
						size="middle"
						style={{ maxWidth: 600 }}
						labelCol={{ span: 5 }}
						disabled={avatarData.changeType === 3 ? true : false}
					>
						<Form.Item
							label="ChangeType"
							name="changeType"
							rules={[{ required: true, message: "ChangeType" }]}
						>
							<Input placeholder="ChangeType" disabled allowClear />
						</Form.Item>
						<Form.Item label="Id" name="id" rules={[{ required: true, message: "Id" }]}>
							<Input placeholder="Id" disabled allowClear />
						</Form.Item>
						<Form.Item label="Weight" name="weight" rules={[{ required: true, message: "Weight" }]}>
							<Input placeholder="Weight" type="number" allowClear />
						</Form.Item>
						<Form.Item label="ImgUrl" name="url" rules={[{ required: true, message: "ImgUrl" }]}>
							<Input placeholder="ImgUrl" allowClear />
						</Form.Item>
						<Form.Item label="Name" name="name" rules={[{ required: true, message: "Name" }]}>
							<Input placeholder="Name" allowClear />
						</Form.Item>
						<Form.Item
							label="Category"
							name="category"
							rules={[{ required: true, message: "Category" }]}
						>
							<Select options={selectOptions}></Select>
						</Form.Item>
						<Form.Item>
							<Space className="flex justify-center items-center gap-4 mt-6">
								<Button
									onClick={() => {
										onReset();
									}}
									icon={<CloseCircleOutlined />}
								>
									Reset
								</Button>
								<Button
									type="primary"
									htmlType="submit"
									loading={loading}
									danger={avatarData.changeType === 3 ? true : false}
									disabled={false}
								>
									{avatarData.changeType === 3 ? <span>Delete</span> : <span> Confirm</span>}
								</Button>
							</Space>
						</Form.Item>
					</Form>
				</Card>
				<Flex wrap gap={"large"} vertical className="flex-1">
					{/* 图片展示 */}
					<Card>
						<Flex wrap gap={"large"}>
							{avatarData.url && (
								<Card
									hoverable
									cover={
										<Image
											height={200}
											className="w-full h-auto object-cover"
											src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + avatarData.url}
										/>
									}
								>
									<Paragraph copyable>{avatarData.url}</Paragraph>
								</Card>
							)}
						</Flex>
					</Card>
					{/* 上传插件 */}
					<UploadMedia upMediaDir={upMediaDir} />
				</Flex>
			</Flex>
		</>
	);
};

export default View;
