// swiper
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; //router

import { getAdminRawConfigs } from "@/http/modules/swiper"; //api

import { Button, Flex, Table, Image, message, Card, Typography } from "antd"; //antd
const { Paragraph, Text } = Typography;
const { Column } = Table;

const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转

	const [loading, setLoading] = useState<boolean>(false); //loading
	const [swiperData, setSwiperData] = useState<[]>(); //swiper-list
	// 获取swiper-list
	const getSwiperList = () => {
		if (!loading) {
			setLoading(true); //loading
			getAdminRawConfigs().then((res: any) => {
				console.log(res);
				setLoading(false); //loading
				if (res.code === 0) {
					const data = res.data.list;
					if (data) {
						const dataArray = data.map((item: any, index: number) => {
							item.config = JSON.parse(item.config);
							item.key = index;
							return item;
						});
						console.log(dataArray);
						setSwiperData(dataArray);
					}
				} else {
					message.warning(res.message);
				}
			});
		}
	};
	useEffect(() => {
		getSwiperList();
	}, []);

	return (
		<Flex vertical={true} gap={"large"}>
			<Flex gap="small" wrap>
				<Button
					type="primary"
					size="large"
					onClick={() => {
						// changeType:1-新增/2-修改/3-删除
						navigate("/setting/swiper/" + 0, { state: { id: 0, changeType: 1 } });
					}}
				>
					Create Swiper
				</Button>
			</Flex>
			<Table
				dataSource={swiperData}
				loading={loading}
				scroll={{ x: 1000 }}
				bordered={true}
				pagination={{ pageSize: 1 }}
				rowKey={(record: any) => record.key}
			>
				<Column
					title="ID"
					fixed="left"
					dataIndex="config_id"
					width={150}
					align={"center"}
					render={(_: any, record: any) => <Text strong>{record.config_id}</Text>}
				/>
				<Column
					title="Config"
					dataIndex="config"
					render={(config: any[]) => (
						<>
							<Flex gap="middle" vertical>
								{config.map((item, i) => {
									return (
										<Flex key={i} gap="middle">
											{item.imgurl && (
												<Card
													hoverable
													style={{ width: 300 }}
													cover={
														<Image
															height={200}
															className="w-full h-auto object-cover"
															src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + item.imgurl}
														/>
													}
												>
													<Paragraph copyable>{item.imgurl}</Paragraph>
												</Card>
											)}
											{item.videourl && (
												<Card
													hoverable
													style={{ width: 300 }}
													cover={
														<video className="w-full h-auto object-cover" controls>
															<source
																src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + item.videourl}
															/>
														</video>
													}
												>
													<Paragraph copyable>{item.name}</Paragraph>
													<Paragraph copyable>{item.videourl}</Paragraph>
												</Card>
											)}

											<p>Revise for other content</p>
										</Flex>
									);
								})}
							</Flex>
						</>
					)}
				/>
				<Column
					title="Action"
					dataIndex="action"
					width={150}
					fixed="right"
					align={"center"}
					render={(_: any, record: any) => (
						<Flex wrap gap="large" vertical>
							<Button
								type="primary"
								onClick={() => {
									// changeType:1-新增/2-修改/3-删除
									navigate("/setting/swiper/" + record.config_id, {
										state: { id: record.config_id, changeType: 2 },
									});
								}}
							>
								Revise
							</Button>
							<Button
								type="primary"
								danger
								onClick={() => {
									// changeType:1-新增/2-修改/3-删除
									navigate("/setting/swiper/" + record.config_id, {
										state: { id: record.config_id, changeType: 3 },
									});
								}}
							>
								Delete
							</Button>
						</Flex>
					)}
				/>
			</Table>
		</Flex>
	);
};

export default View;
