// userinfo
import React, { useState, useEffect } from "react";

import { getAdminUserPage } from "@/http/modules/userinfo"; //api

import { Table, Image, Flex, Button, Input, message, Typography } from "antd"; //antd
import type { GetProp, TableProps } from "antd"; //antd
const { Text } = Typography;
const { Column } = Table;

type TablePaginationConfig = Exclude<GetProp<TableProps, "pagination">, boolean>;
interface TableParams {
	pagination?: TablePaginationConfig;
}

const View: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(false); //loading
	const [userData, setUserData] = useState<[]>(); //user-list
	const [userAddress, setUserAddress] = useState<string>(""); //user-Address
	// 分页数量
	const [tableParams, setTableParams] = useState<TableParams>({
		pagination: {
			current: 1,
			pageSize: 10,
			total: 0,
		},
	});
	// 修改name的数据
	const handleNameChange = (event: any) => {
		const { value } = event.target;
		// console.log(value);
		setUserAddress(value);
	};

	// 修改分页切换
	const handleTableChange: TableProps["onChange"] = pagination => {
		setTableParams({
			pagination,
		});
	};
	// 获取user-list
	const getUserList = (userAddress: string) => {
		if (!loading) {
			setLoading(true); //loading
			let obj = {};
			if (userAddress) {
				obj = {
					page_num: 1, //分页号码, 默认1
					page_size: 10, //分页数量, 最大500
					address: userAddress, //用户账号
				};
			} else {
				obj = {
					page_num: tableParams.pagination?.current, //分页号码, 默认1
					page_size: tableParams.pagination?.pageSize, //分页数量, 最大500
					address: userAddress, //用户账号
				};
			}
			getAdminUserPage(obj).then((res: any) => {
				console.log(res);
				setLoading(false); //loading
				if (res.code === 0) {
					const data = res.data.list;
					if (data) {
						const userArray = data.map((item: any, index: number) => {
							item.avatarImgUrl = import.meta.env.VITE_BASE_DOWNLOAD + "/" + item.avatar;
							item.key = index;
							return item;
						});
						setUserData(userArray);
					}
					// 修改分页总数
					setTableParams({
						...tableParams,
						pagination: {
							...tableParams.pagination,
							total: res.data.total,
						},
					});
				} else {
					message.warning(res.message);
				}
			});
		}
	};
	useEffect(() => {
		getUserList(userAddress);
	}, [
		tableParams.pagination?.current,
		tableParams.pagination?.pageSize,
		tableParams.pagination?.total,
	]);

	return (
		<Flex vertical={true} gap={"large"}>
			<Flex wrap gap="small">
				<Input
					placeholder="User Address"
					value={userAddress}
					onChange={handleNameChange}
					className="w-[400px]"
					allowClear
				/>
				<Button
					type="primary"
					disabled={userAddress ? false : true}
					onClick={() => {
						getUserList(userAddress);
					}}
				>
					Search
				</Button>
				<Button
					onClick={() => {
						// 修改分页总数
						setTableParams({
							...tableParams,
							pagination: {
								...tableParams.pagination,
								current: 1,
								pageSize: 10,
								total: 0,
							},
						});
						// 清空账号
						setUserAddress("");
					}}
				>
					Cancel
				</Button>
			</Flex>
			<Table
				dataSource={userData}
				loading={loading}
				scroll={{ x: 1200 }}
				bordered={true}
				pagination={tableParams.pagination}
				onChange={handleTableChange}
			>
				<Column
					title="ID"
					dataIndex="id"
					fixed="left"
					width={100}
					align={"center"}
					render={(_: any, record: any) => <Text strong>{record.id}</Text>}
				/>
				<Column
					title="Address"
					dataIndex="address"
					render={(_: any, record: any) => (
						<Text strong>{record.addresses[0] ? record.addresses[0] : "Not Address"}</Text>
					)}
				/>
				<Column title="Nickname" dataIndex="nickname" />
				<Column
					title="Avatar"
					dataIndex="avatarImgUrl"
					render={(_: any, record: any) => (
						<Image width={100} className="w-full h-auto object-cover" src={record.avatarImgUrl} />
					)}
				/>
				<Column title="AvatarId" dataIndex="avatar_id" />
				<Column title="TokenApproveAmount" dataIndex="token_approve_amount" />
				<Column title="Role" dataIndex="role" />
				<Column title="LatestLoginAt" dataIndex="latest_login_at" />
				<Column title="CreateAt" dataIndex="create_at" />
				<Column title="UpdateAt" dataIndex="update_at" />
			</Table>
		</Flex>
	);
};

export default View;
