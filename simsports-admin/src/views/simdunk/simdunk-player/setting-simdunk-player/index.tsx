// setting-simdunk-player

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom"; //router

import {
	getAdminPlayer,
	postAdminPlayer,
	putAdminPlayer,
	deleteAdminPlayer,
} from "@/http/modules/simdunk"; //api

import UploadMedia from "@/components/upload-media/index"; //UploadMedia
import { playerTypeSelect } from "../player";

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
	Select,
} from "antd"; //antd
import { CloseOutlined, CloseCircleOutlined } from "@ant-design/icons";
const { Paragraph, Text } = Typography;
const { TextArea } = Input;

const View: React.FC = () => {
	const [upMediaDir] = useState<string>("/simdunk/player"); //上传swiper地址 //上传player地址

	const navigate = useNavigate(); //路由跳转
	const params = useParams(); //路由参数
	const location = useLocation(); //路由参数

	const [form] = Form.useForm();
	const [selectOptions] = useState(playerTypeSelect);
	const [loading, setLoading] = useState<boolean>(false); //loading
	const [spinning, setSpinning] = React.useState<boolean>(false); //Spinning
	// playerData数据
	const [playerData, setPlayerData] = useState<any>({
		changeType: "", // changeType: 1-新增/2-修改/3-删除;
		id: "", //player-id
	});
	// 获 PlayerData 数据
	const gatPlayerData = (id: string) => {
		if (!spinning) {
			if (id && Number(id) !== 0) {
				setSpinning(true); //Spinning
				getAdminPlayer(id).then((res: any) => {
					// console.log(res);
					if (res.code === 0) {
						const data = res.data;
						// console.log(data);
						setPlayerData({
							...playerData,
							...data,
							changeType: location.state.changeType,
						}); //数据重置
						setSpinning(false); //Spinning
					} else {
						message.warning(res.message);
						if (params.id) {
							gatPlayerData(params.id);
						}
					}
				});
			}
		}
	};
	// 获取Playe-id-type
	const gatPlayerId = () => {
		if (location.state && params.id) {
			if (location.state.changeType) {
				setPlayerData({
					...playerData,
					id: params.id, //id
					changeType: location.state.changeType, //改变头像type
				});
				gatPlayerData(params.id);
			} else {
				navigate("*");
			}
		} else {
			navigate("*");
		}
	};
	useEffect(() => {
		gatPlayerId();
	}, []);
	// 点击按钮返回成功
	const onFinish = async (values: any) => {
		// console.log("Success:", values);
		const obj = {
			type: values.type, //type
			name: values.name, //name
			sort_number: values.sort_number, //sort_number
			avatar: values.avatar, //avatar
			player_image: values.player_image, //player_image
			intro_image: values.intro_image, //intro_image
			//<-------Detail------>
			link: values.link, //link
			background_image: values.background_image, //background_image
			detail_image: values.detail_image, //detail_image
			player_detail_image: values.player_detail_image, //player_detail_image
			showcase_video: values.showcase_video, //showcase_video
			characteristics: values.characteristics, //characteristics
			skills: values.skills, //skills
		};
		console.log(obj);
		if (!loading) {
			setLoading(true);
			if (playerData.changeType === 1) {
				// 创建 player
				postAdminPlayer(obj).then((res: any) => {
					console.log(res);
					setLoading(false); //loading
					if (res.code === 0) {
						message.success("Success");
						navigate("/simdunk/simdunk-player");
					} else {
						message.warning(res.message);
					}
				});
			} else if (playerData.changeType === 2) {
				// 更新 player
				putAdminPlayer(playerData.id, obj).then((res: any) => {
					console.log(res);
					setLoading(false); //loading
					if (res.code === 0) {
						message.success("Success");
						navigate("/simdunk/simdunk-player");
					} else {
						message.warning(res.message);
					}
				});
			} else if (playerData.changeType === 3) {
				// del-player
				deleteAdminPlayer(playerData.id).then((res: any) => {
					console.log(res);
					setLoading(false); //loading
					if (res.code === 0) {
						message.success("Success");
						navigate("/simdunk/simdunk-player");
					} else {
						message.warning(res.message);
					}
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
		gatPlayerId();
	};
	// 监听数据修改
	const onValuesChange = (changedValues: any, allValues: any) => {
		// console.log("onValuesChange=>", changedValues);
		// console.log("allValues=>", allValues);
		setPlayerData((prevState: any) => ({
			...prevState,
			...changedValues, // 合并更改的字段
			characteristics: allValues.characteristics,
			skills: allValues.skills,
		}));
	};
	// 监听数据修改，同时修改表单数据
	useEffect(() => {
		form.setFieldsValue(playerData);
	}, [playerData]);
	return (
		<>
			<Spin spinning={spinning} fullscreen />
			<Typography.Title level={1}>Change Player</Typography.Title>
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
						disabled={playerData.changeType === 3 ? true : false}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						onValuesChange={onValuesChange}
					>
						<Form.Item
							label="Change-Type"
							name="changeType"
							rules={[{ required: true, message: "ChangeType" }]}
						>
							<Input placeholder="ChangeType" allowClear disabled />
						</Form.Item>
						<Form.Item label="Id" name="id" rules={[{ required: true, message: "Id" }]}>
							<Input placeholder="Id" allowClear disabled />
						</Form.Item>
						<Form.Item
							label="Player-Name"
							name="name"
							rules={[{ required: true, message: "PlayerName" }]}
						>
							<Input placeholder="PlayerName" allowClear />
						</Form.Item>
						<Form.Item
							label="Player-Type"
							name="type"
							rules={[{ required: true, message: "PlayerType" }]}
						>
							<Select options={selectOptions}></Select>
						</Form.Item>
						<Form.Item
							label="Sort-Number"
							name="sort_number"
							rules={[{ required: true, message: "SortNumber" }]}
						>
							<Input placeholder="UR-101/SSR-201/SR-301/R-401/N-501" type="number" allowClear />
						</Form.Item>
						<Form.Item label="Avatar" name="avatar" rules={[{ required: true, message: "Avatar" }]}>
							<Input placeholder="Avatar" allowClear />
						</Form.Item>
						<Form.Item
							label="Player-Image"
							name="player_image"
							rules={[{ required: true, message: "Player-Image" }]}
						>
							<Input placeholder="Player-Image" allowClear />
						</Form.Item>
						<Form.Item
							label="Intro-Image"
							name="intro_image"
							rules={[{ required: true, message: "Intro-Image" }]}
						>
							<Input placeholder="Intro-Image" allowClear />
						</Form.Item>

						<Divider>Player-Detail</Divider>
						<Form.Item label="Link" name="link">
							<Input placeholder="Link" allowClear />
						</Form.Item>
						<Form.Item label="Background-Image" name="background_image">
							<Input placeholder="Background-Image" allowClear />
						</Form.Item>
						<Form.Item label="Player-Detail-Image" name="player_detail_image">
							<Input placeholder="Player-Detail-Image" allowClear />
						</Form.Item>
						<Form.Item label="Detail-Image" name="detail_image">
							<Input placeholder="Detail-Image" allowClear />
						</Form.Item>
						<Form.Item label="Showcase-Video" name="showcase_video">
							<Input placeholder="Showcase-Video" allowClear />
						</Form.Item>

						<Divider>Characteristics</Divider>
						<Form.List name="characteristics">
							{(fields, { add, remove }) => (
								<div style={{ display: "flex", rowGap: 16, flexDirection: "column" }}>
									{fields.map(field => {
										return (
											<Card
												size="small"
												title={`Characteristics ${field.name + 1}`}
												key={field.key}
												extra={
													<CloseOutlined
														onClick={() => {
															remove(field.name);
														}}
													/>
												}
											>
												<Form.Item label="Title" name={[field.name, "title"]}>
													<Input placeholder="Title" />
												</Form.Item>
												<Form.Item label="Content" name={[field.name, "content"]}>
													<TextArea />
												</Form.Item>
											</Card>
										);
									})}

									<Button type="dashed" onClick={() => add()} block>
										+ Add Characteristics
									</Button>
								</div>
							)}
						</Form.List>

						<Divider>Skills</Divider>
						<Form.List name="skills">
							{(fields, { add, remove }) => (
								<div style={{ display: "flex", rowGap: 16, flexDirection: "column" }}>
									{fields.map(field => {
										return (
											<Card
												size="small"
												title={`Skills ${field.name + 1}`}
												key={field.key}
												extra={
													<CloseOutlined
														onClick={() => {
															remove(field.name);
														}}
													/>
												}
											>
												<Form.Item label="Title" name={[field.name, "title"]}>
													<Input placeholder="Title" />
												</Form.Item>
												<Form.Item label="Image" name={[field.name, "image"]}>
													<Input placeholder="Image" />
												</Form.Item>
												<Form.Item label="Content" name={[field.name, "content"]}>
													<TextArea />
												</Form.Item>
											</Card>
										);
									})}
									<Button type="dashed" onClick={() => add()} block>
										+ Add Skills
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
									danger={playerData.changeType === 3 ? true : false}
									disabled={false}
								>
									{playerData.changeType === 3 ? <span>Delete</span> : <span> Confirm</span>}
								</Button>
							</Space>
						</Form.Item>
					</Form>
				</Card>
				<Flex wrap gap={"large"} vertical className="flex-1">
					{/* 图片展示 */}
					<Card>
						<Flex wrap gap={"large"}>
							{playerData.avatar && (
								<Card hoverable style={{ width: 300 }}>
									<Flex wrap gap={"middle"} vertical>
										<Text strong>Avatar</Text>
										<Image
											height={200}
											className="w-full h-auto object-cover"
											src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + playerData.avatar}
										/>
										<Paragraph copyable>{playerData.avatar}</Paragraph>
									</Flex>
								</Card>
							)}
							{playerData.player_image && (
								<Card hoverable style={{ width: 300 }}>
									<Flex wrap gap={"middle"} vertical>
										<Text strong>Player-Image</Text>
										<Image
											height={200}
											className="w-full h-auto object-cover"
											src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + playerData.player_image}
										/>
										<Paragraph copyable>{playerData.player_image}</Paragraph>
									</Flex>
								</Card>
							)}
							{playerData.intro_image && (
								<Card hoverable style={{ width: 300 }}>
									<Flex wrap gap={"middle"} vertical>
										<Text strong>Intro-Image</Text>
										<Image
											height={200}
											className="w-full h-auto object-cover"
											src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + playerData.intro_image}
										/>
										<Paragraph copyable>{playerData.intro_image}</Paragraph>
									</Flex>
								</Card>
							)}

							{playerData.background_image && (
								<Card hoverable style={{ width: 300 }}>
									<Flex wrap gap={"middle"} vertical>
										<Text strong>Background-Image</Text>
										<Image
											height={200}
											className="w-full h-auto object-cover"
											src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + playerData.background_image}
										/>
										<Paragraph copyable>{playerData.background_image}</Paragraph>
									</Flex>
								</Card>
							)}
							{playerData.player_detail_image && (
								<Card hoverable style={{ width: 300 }}>
									<Flex wrap gap={"middle"} vertical>
										<Text strong>Player-Detail-Image</Text>
										<Image
											height={200}
											className="w-full h-auto object-cover"
											src={
												import.meta.env.VITE_BASE_DOWNLOAD + "/" + playerData.player_detail_image
											}
										/>
										<Paragraph copyable>{playerData.player_detail_image}</Paragraph>
									</Flex>
								</Card>
							)}
							{playerData.detail_image && (
								<Card hoverable style={{ width: 300 }}>
									<Flex wrap gap={"middle"} vertical>
										<Text strong>Detail-Image</Text>
										<Image
											height={200}
											className="w-full h-auto object-cover"
											src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + playerData.detail_image}
										/>
										<Paragraph copyable>{playerData.detail_image}</Paragraph>
									</Flex>
								</Card>
							)}
							{playerData.showcase_video && (
								<Card hoverable style={{ width: 300 }}>
									<Flex wrap gap={"middle"} vertical>
										<Text strong>Showcase-Video</Text>
										<video className="h-[200px] w-auto object-cover" controls>
											<source
												src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + playerData.showcase_video}
											/>
										</video>
										<Paragraph copyable>{playerData.showcase_video}</Paragraph>
									</Flex>
								</Card>
							)}
							{playerData.skills && (
								<Card>
									<Flex wrap gap={"middle"}>
										{playerData.skills.map((item: any, index: React.Key) => {
											return (
												<React.Fragment key={index}>
													{item && (
														<Card hoverable style={{ width: 300 }}>
															<Flex wrap gap={"middle"} vertical>
																<Text strong>Skills {Number(index) + 1}</Text>
																<Image
																	height={200}
																	className="w-full h-auto object-cover"
																	src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + item.image}
																/>
																<Paragraph copyable>{item.image}</Paragraph>
															</Flex>
														</Card>
													)}
												</React.Fragment>
											);
										})}
									</Flex>
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
