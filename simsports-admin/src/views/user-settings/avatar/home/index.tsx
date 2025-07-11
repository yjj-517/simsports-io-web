// userinfo-avatar
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; //router

import { getAdminAvatarSelectionLibrarys } from "@/http/modules/usersettings"; //api

import { Button, Flex, Table, Image, Tag, message, Typography, Card } from "antd"; //antd
const { Column } = Table;
const { Paragraph, Text } = Typography;

const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转

	const [loading, setLoading] = useState<boolean>(false); //loading
	const [avatarData, setAvatarData] = useState<[]>(); //avatar-list
	// 获取头像
	const getAvatarList = () => {
		if (!loading) {
			setLoading(true); //loading
			const obj = {
				category: "default", //头像类型-default：默认
			};
			getAdminAvatarSelectionLibrarys(obj).then((res: any) => {
				console.log(res);
				setLoading(false); //loading
				if (res.code === 0) {
					const data = res.data.list;
					if (data) {
						const dataArray = data.map((item: any, index: number) => {
							item.key = index;
							return item;
						});
						setAvatarData(dataArray);
					}
				} else {
					message.warning(res.message);
				}
			});
		}
	};
	useEffect(() => {
		getAvatarList();
	}, []);

	return (
		<Flex vertical={true} gap={"large"}>
			<Flex gap="small" wrap>
				<Button
					size="large"
					type="primary"
					onClick={() => {
						// changeType:1-新增/2-修改/3-删除
						navigate("/user-settings/avatar/" + 0, { state: { id: 0, changeType: 1 } });
					}}
				>
					Create Avatar
				</Button>
			</Flex>
			<Table
				dataSource={avatarData}
				loading={loading}
				scroll={{ x: 1000 }}
				bordered={true}
				rowKey={(record: any) => record.key}
			>
				<Column
					title="ID"
					dataIndex="id"
					fixed="left"
					width={100}
					align={"center"}
					render={(_: any, record: any) => <Text strong>{record.id}</Text>}
				/>
				<Column title="Weight" dataIndex="weight" width={150} align={"center"} />
				<Column title="Name" dataIndex="name" width={200} align={"center"} />
				<Column
					title="Category"
					dataIndex="category"
					width={100}
					align={"center"}
					render={(_: any, record: any) => <Tag color="success">{record.category}</Tag>}
				/>

				<Column
					width={300}
					title="Avatar"
					dataIndex="url"
					align={"center"}
					render={(_: any, record: any) => (
						<Card style={{ width: 300 }} hoverable>
							<Image
								src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + record.url}
								width={150}
								className="w-full h-auto object-cover"
							/>
							<Paragraph copyable>{record.url}</Paragraph>
						</Card>
					)}
				/>

				<Column
					title="Action"
					dataIndex="action"
					width={150}
					align={"center"}
					render={(_: any, record: any) => (
						<Flex wrap gap="small" vertical>
							<Button
								type="primary"
								disabled // 暂时不开启修改功能
								onClick={() => {
									// changeType: 1-新增/2-修改/3-删除;
									navigate("/user-settings/avatar/" + record.id, {
										state: { id: record.id, changeType: 2 },
									});
								}}
							>
								Revise
							</Button>
							<Button
								type="primary"
								danger
								disabled // 暂时不开启删除功能
								// onClick={() => {
								// 	// changeType:1-新增/2-修改/3-删除
								// 	navigate("/user-settings/avatar/" + record.id, { state: { id: record.id, changeType: 3 } });
								// }}
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
