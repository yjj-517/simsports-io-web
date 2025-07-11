// simdunk-player

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; //router

import { playerTypeTab } from "../player";
import { getAdminPlayers } from "@/http/modules/simdunk"; //api

import { Button, Flex, Table, Image, message, Card, Typography, Tabs, Input } from "antd"; //antd
const { Paragraph, Text } = Typography;
const { Column } = Table;

const View: React.FC = () => {
	const navigate = useNavigate(); //路由跳转

	const [playerType, setPlayerType] = useState<string>(playerTypeTab[0].type); //player-type
	// change-tabs-type
	const changePlayerType = (key: string) => {
		setPlayerType(key);
	};
	useEffect(() => {
		changePlayerType(playerTypeTab[0].type);
	}, []);
	const [playerName, setPlayerName] = useState<string>(""); //user-Address
	// 修改name的数据
	const handleNameChange = (event: any) => {
		const { value } = event.target;
		// console.log(value);
		setPlayerName(value);
	};
	const [loading, setLoading] = useState<boolean>(false); //loading
	const [playerData, setPlayerData] = useState<[]>(); //player-list
	// 获取player-list
	const getPlayerList = (name: string) => {
		const obj = {
			type: playerType,
			name: name,
		};
		// console.log(obj);
		if (!loading) {
			setLoading(true); //loading
			getAdminPlayers(obj).then((res: any) => {
				console.log(res);
				setLoading(false); //loading
				if (res.code === 0) {
					const data = res.data.list;
					if (data) {
						const dataArray = data.map((item: any, index: number) => {
							item.key = index;
							return item;
						});
						// console.log(dataArray);
						setPlayerData(dataArray);
					}
				} else {
					message.warning(res.message);
				}
			});
		}
	};
	useEffect(() => {
		getPlayerList(playerName);
	}, [playerType]);
	return (
		<>
			{/* button-change */}
			<Flex gap="small" wrap>
				<Button
					type="primary"
					size="large"
					onClick={() => {
						// type:1-新增/2-修改/3-删除
						navigate("/simdunk/simdunk-player/" + 0, { state: { id: 0, changeType: 1 } });
					}}
				>
					Create Player
				</Button>
			</Flex>
			<Flex gap={"large"} vertical={true}>
				{/* TABS-change */}
				<Flex gap="small" wrap>
					<Tabs
						className="flex-1"
						size={"large"}
						onChange={changePlayerType}
						items={playerTypeTab.map((item: any, _index: number) => {
							return {
								label: item.label,
								key: item.type,
							};
						})}
					/>
				</Flex>
				{/* name-search */}
				<Flex gap="small" wrap>
					<Input
						placeholder="Player Name"
						value={playerName}
						onChange={handleNameChange}
						className="w-[400px]"
						allowClear
					/>
					<Button
						loading={loading}
						type="primary"
						disabled={playerName ? false : true}
						onClick={() => {
							getPlayerList(playerName);
						}}
					>
						Search
					</Button>
					<Button
						loading={loading}
						onClick={() => {
							setPlayerName(""); // 清空name
							getPlayerList("");
						}}
					>
						Cancel
					</Button>
				</Flex>

				<Table
					dataSource={playerData}
					loading={loading}
					scroll={{ x: 3200 }}
					pagination={{ pageSize: 5 }}
					tableLayout="auto"
					bordered={true}
					rowKey={(record: any) => record.key}
				>
					<Column
						title="ID"
						fixed="left"
						dataIndex="id"
						width={100}
						align={"center"}
						render={(_: any, record: any) => <Text strong>{record.id}</Text>}
					/>
					<Column title="Name" dataIndex="name" />
					<Column title="Type" dataIndex="type" />
					<Column title="Sort-Number" dataIndex="sort_number" />
					<Column
						title="Avatar"
						dataIndex="avatar"
						align={"center"}
						width={200}
						render={(_: any, record: any) => (
							<>
								{record.avatar && (
									<Card
										hoverable
										cover={
											<Image
												height={200}
												className="w-full h-auto object-cover"
												src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + record.avatar}
											/>
										}
									>
										<Paragraph copyable>{record.avatar}</Paragraph>
									</Card>
								)}
							</>
						)}
					/>
					<Column
						title="Player-Image"
						dataIndex="player_image"
						align={"center"}
						width={200}
						render={(_: any, record: any) => (
							<>
								{record.player_image && (
									<Card
										hoverable
										cover={
											<Image
												height={200}
												className="w-full h-auto object-cover"
												src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + record.player_image}
											/>
										}
									>
										<Paragraph copyable>{record.player_image}</Paragraph>
									</Card>
								)}
							</>
						)}
					/>
					<Column
						title="Intro-Image"
						dataIndex="intro_image"
						align={"center"}
						width={200}
						render={(_: any, record: any) => (
							<>
								{record.intro_image && (
									<Card
										hoverable
										cover={
											<Image
												height={200}
												className="w-full h-auto object-cover"
												src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + record.intro_image}
											/>
										}
									>
										<Paragraph copyable>{record.intro_image}</Paragraph>
									</Card>
								)}
							</>
						)}
					/>
					{/* <----Detail---> */}
					<Column title="Link" dataIndex="link" />
					<Column
						title="Background-Image"
						dataIndex="background_image"
						align={"center"}
						width={200}
						render={(_: any, record: any) => (
							<>
								{record.background_image && (
									<Card
										hoverable
										cover={
											<Image
												height={200}
												className="w-full h-auto object-cover"
												src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + record.background_image}
											/>
										}
									>
										<Paragraph copyable>{record.background_image}</Paragraph>
									</Card>
								)}
							</>
						)}
					/>
					<Column
						title="Player-Detail-Image"
						dataIndex="player_detail_image"
						align={"center"}
						width={200}
						render={(_: any, record: any) => (
							<>
								{record.player_detail_image && (
									<Card
										hoverable
										cover={
											<Image
												height={200}
												className="w-full h-auto object-cover"
												src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + record.player_detail_image}
											/>
										}
									>
										<Paragraph copyable>{record.player_detail_image}</Paragraph>
									</Card>
								)}
							</>
						)}
					/>
					<Column
						title="Detail-Image"
						dataIndex="detail_image"
						align={"center"}
						width={200}
						render={(_: any, record: any) => (
							<>
								{record.detail_image && (
									<Card
										hoverable
										cover={
											<Image
												height={200}
												className="w-full h-auto object-cover"
												src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + record.detail_image}
											/>
										}
									>
										<Paragraph copyable>{record.detail_image}</Paragraph>
									</Card>
								)}
							</>
						)}
					/>
					<Column
						title="Showcase-Video"
						dataIndex="showcase_video"
						align={"center"}
						width={300}
						render={(_: any, record: any) => (
							<>
								{record.showcase_video && (
									<Card
										hoverable
										cover={
											<video height={200} className="w-full h-auto object-cover" controls>
												<source
													src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + record.showcase_video}
												/>
											</video>
										}
									>
										<Paragraph copyable>{record.showcase_video}</Paragraph>
									</Card>
								)}
							</>
						)}
					/>
					<Column
						title="Characteristics"
						dataIndex="characteristics"
						align={"center"}
						width={300}
						render={(config: any) => (
							<Flex gap="middle" vertical>
								{config !== null && (
									<>
										{config.map((t: any, i: React.Key | null | undefined) => {
											return (
												<Card key={i}>
													<p>Title : {t.title}</p>
													<p>Content : {t.content}</p>
												</Card>
											);
										})}
									</>
								)}
							</Flex>
						)}
					/>
					<Column
						title="Skills"
						dataIndex="skills"
						align={"center"}
						width={600}
						render={(config: any) => (
							<Flex gap="middle">
								{config !== null && (
									<>
										{config.map((t: any, i: React.Key | null | undefined) => {
											return (
												<Flex key={i} gap="middle" vertical>
													<Card
														style={{ width: 200 }}
														key={i}
														cover={
															<Image
																height={100}
																className="w-auto h-auto object-contain"
																src={import.meta.env.VITE_BASE_DOWNLOAD + "/" + t.image}
															/>
														}
													>
														<Paragraph copyable>{t.image}</Paragraph>
														<p>Title : {t.title}</p>
														<p>Content : {t.content}</p>
													</Card>
												</Flex>
											);
										})}
									</>
								)}
							</Flex>
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
										// type:1-新增/2-修改/3-删除
										navigate("/simdunk/simdunk-player/" + record.id, {
											state: { id: record.id, changeType: 2 },
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
										navigate("/simdunk/simdunk-player/" + record.id, {
											state: { id: record.id, changeType: 3 },
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
		</>
	);
};

export default View;
