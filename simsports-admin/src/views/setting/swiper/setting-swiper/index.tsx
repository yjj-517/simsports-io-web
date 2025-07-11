// swiper
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom"; //router

import {
	getAdminRawConfig,
	postAdminRawConfig,
	putAdminRawConfig,
	deleteRawConfig,
} from "@/http/modules/swiper"; //api

import UploadMedia from "@/components/upload-media/index"; //UploadMedia

import {
	message,
	Spin,
	Button,
	Image,
	Input,
	Flex,
	Space,
	Typography,
	Card,
	Form,
	Divider,
} from "antd"; //antd
import { CloseOutlined, CloseCircleOutlined } from "@ant-design/icons";
const { Paragraph } = Typography;
const { TextArea } = Input;

const View: React.FC = () => {
	const [upMediaDir] = useState<string>("/swiper"); //上传swiper地址

	const navigate = useNavigate(); //路由跳转
	const params = useParams(); //路由参数
	const location = useLocation(); //路由参数
	const [form] = Form.useForm();

	const [loading, setLoading] = useState<boolean>(false); //loading
	const [spinning, setSpinning] = React.useState<boolean>(false); //Spinning
	// swiperData数据
	const [swiperData, setSwiperData] = useState<any>({
		changeType: "", // changeType: 1-新增/2-修改/3-删除;
		id: "", //swiper-id
		items: [],
	});
	// 获取swiperData
	const getSwiperData = (id: string) => {
		if (!spinning) {
			if (id && Number(id) !== 0) {
				setSpinning(true); //Spinning
				getAdminRawConfig(id).then((res: any) => {
					console.log(res);
					if (res.code === 0) {
						const data = JSON.parse(res.data.config);
						// console.log(data);
						setSwiperData({
							...swiperData,
							id: id,
							items: [...data],
							changeType: Number(location.state.changeType),
						}); //数据重置
						setSpinning(false); //Spinning
					} else {
						message.warning(res.message);
						if (params.id) {
							getSwiperData(params.id);
						}
					}
				});
			}
		}
	};
	// 获取Swiper-id-type
	const getSwiperId = () => {
		if (location.state && params.id) {
			if (location.state.changeType) {
				setSwiperData({
					...swiperData,
					id: params.id, //id
					changeType: location.state.changeType, //改变头像type
				});
				getSwiperData(params.id);
			} else {
				navigate("*");
			}
		} else {
			navigate("*");
		}
	};
	useEffect(() => {
		getSwiperId();
	}, []);

	// 点击按钮返回成功
	const onFinish = async (values: any) => {
		console.log("Success:", values);
		if (!loading) {
			setLoading(true);
			const obj = {
				config_id: swiperData.id,
				config: JSON.stringify(values.items),
			};
			if (swiperData.changeType === 1) {
				// 创建 swiper
				postAdminRawConfig(obj)
					.then((res: any) => {
						console.log(res);
						setLoading(false); //loading
						if (res.code === 0) {
							message.success("Success");
							navigate("/setting/swiper");
						} else {
							message.warning(res.message);
						}
					})
					.catch(err => {
						console.log(err);
						setLoading(false); //loading
						message.warning(err.message);
					});
			} else if (swiperData.changeType === 2) {
				// 更新 swiper
				putAdminRawConfig(obj.config_id, { config: obj.config })
					.then((res: any) => {
						console.log(res);
						setLoading(false); //loading
						if (res.code === 0) {
							message.success("Success");
							navigate("/setting/swiper");
						} else {
							message.warning(res.message);
						}
					})
					.catch(err => {
						console.log(err);
						setLoading(false); //loading
						message.warning(err.message);
					});
			} else if (swiperData.changeType === 3) {
				// del-swiperData
				deleteRawConfig(obj.config_id)
					.then((res: any) => {
						console.log(res);
						setLoading(false); //loading
						if (res.code === 0) {
							message.success("Success");
							navigate("/setting/swiper");
						} else {
							message.warning(res.message);
						}
					})
					.catch(err => {
						console.log(err);
						setLoading(false); //loading
						message.warning(err.message);
					});
			}
		} else {
			message.error("Items is no");
		}
	};
	// 点击按钮返回错误
	const onFinishFailed = (errorInfo: any) => {
		console.log("Failed:", errorInfo);
	};
	// 重置按钮
	const onReset = () => {
		getSwiperId();
	};
	// 监听数据修改
	const onValuesChange = (changedValues: any, allValues: any) => {
		// console.log("onValuesChange=>", changedValues);
		// console.log("allValues=>", allValues);
		setSwiperData((prevState: any) => ({
			...prevState,
			...changedValues, // 合并更改的字段
			items: allValues.items,
		}));
	};
	// 监听数据修改，同时修改表单数据
	useEffect(() => {
		form.setFieldsValue(swiperData);
	}, [swiperData]);

	return (
		<>
			<Spin spinning={spinning} fullscreen />
			<Typography.Title level={1}>Change Swiper</Typography.Title>
			<Flex wrap gap={"large"}>
				{/* 表单提交 */}
				<Card className="flex-1" style={{ maxWidth: 600 }}>
					<Form
						labelCol={{ span: 6 }}
						wrapperCol={{ span: 18 }}
						form={form}
						name="dynamic_form_complex"
						style={{ maxWidth: 600 }}
						autoComplete="off"
						disabled={swiperData.changeType === 3 ? true : false}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						onValuesChange={onValuesChange}
					>
						<Form.Item
							label="ChangeType"
							name="changeType"
							rules={[{ required: true, message: "ChangeType" }]}
						>
							<Input placeholder="ChangeType" allowClear disabled />
						</Form.Item>
						<Form.Item
							label="SwiperId"
							name="id"
							rules={[
								{ required: true, message: "SwiperId" },
								{
									validator: (_, value) => {
										// 如果值为数字形式的字符串
										if (!isNaN(Number(value))) {
											const numericValue = Number(value);
											return numericValue > 0
												? Promise.resolve()
												: Promise.reject("SwiperId should be a number greater than 0");
										}
										// 如果值为普通字符串，检查其非空
										return typeof value === "string" && value.trim() !== ""
											? Promise.resolve()
											: Promise.reject(
													"SwiperId should be a non-empty string or a number greater than 0",
												);
									},
								},
							]}
						>
							<Input
								placeholder="SwiperId"
								allowClear
								disabled={swiperData.changeType === 1 ? false : true}
							/>
						</Form.Item>
						<Divider>Swiper-List</Divider>
						<Form.List name="items">
							{(fields, { add, remove }) => (
								<div style={{ display: "flex", rowGap: 16, flexDirection: "column" }}>
									{fields.map(field => {
										return (
											<Card
												size="small"
												title={`Item ${field.name + 1}`}
												key={field.key}
												extra={
													<CloseOutlined
														onClick={() => {
															remove(field.name);
														}}
													/>
												}
											>
												<Form.Item label="Name" name={[field.name, "name"]}>
													<Input />
												</Form.Item>
												<Form.Item label="Imgurl" name={[field.name, "imgurl"]}>
													<Input />
												</Form.Item>
												<Form.Item label="Videourl" name={[field.name, "videourl"]}>
													<Input />
												</Form.Item>
												<Form.Item label="Icon" name={[field.name, "iconurl"]}>
													<Input />
												</Form.Item>
												<Form.Item label="Link" name={[field.name, "link"]}>
													<Input />
												</Form.Item>
												<Form.Item label="Details" name={[field.name, "details"]}>
													<TextArea />
												</Form.Item>
											</Card>
										);
									})}

									<Button type="dashed" onClick={() => add()} block>
										+ Add Item
									</Button>
								</div>
							)}
						</Form.List>

						<Form.Item noStyle shouldUpdate>
							{() => (
								<Typography>
									<pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
								</Typography>
							)}
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
									danger={swiperData.changeType === 3 ? true : false}
									disabled={false}
								>
									{swiperData.changeType === 3 ? <span>Delete</span> : <span> Confirm</span>}
								</Button>
							</Space>
						</Form.Item>
					</Form>
				</Card>
				<Flex wrap gap={"large"} vertical className="flex-1">
					{/* 图片展示 */}
					<Card>
						<Flex wrap gap={"large"}>
							{swiperData.items.map((item: any, index: React.Key | null | undefined) => {
								return (
									<React.Fragment key={index}>
										{item && (
											<Card hoverable style={{ width: 300 }} key={index}>
												<Flex wrap gap={"middle"} vertical>
													{item.imgurl && (
														<>
															<Image
																height={200}
																className="w-full h-auto object-cover"
																src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + item.imgurl}
															/>
															<Paragraph copyable>{item.imgurl}</Paragraph>
														</>
													)}
													{item.videourl && (
														<>
															<video className="w-auto h-auto object-cover" controls autoPlay>
																<source
																	src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + item.videourl}
																/>
															</video>
															<Paragraph copyable>{item.videourl}</Paragraph>
														</>
													)}
												</Flex>
											</Card>
										)}
									</React.Fragment>
								);
							})}
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
