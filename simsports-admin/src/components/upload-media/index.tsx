// upload-media
import React, { useState } from "react";

import { postAdminFilesUpload } from "@/http/modules/api"; //api

import { message, Button, Image, Flex, Typography, Card, Divider } from "antd"; //antd
import { UploadOutlined } from "@ant-design/icons"; //antd
const { Paragraph } = Typography;

interface ViewProps {
	upMediaDir: string;
}

const View: React.FC<ViewProps> = ({ upMediaDir }: ViewProps) => {
	const [upLoading, setUpLoading] = useState<boolean>(false); //loading
	const [upMediaData, setUpMediaData] = useState<any[]>([]);
	// 点击上传按钮
	const handleButtonClick = () => {
		const element = document.getElementById("fileInput");
		if (element !== null) {
			if (!upLoading) {
				element.click();
			}
		}
	};
	// 上传媒体视频
	const handleMediaChange = (event: any) => {
		setUpLoading(true); //Loading
		const files = Array.from(event.target.files); // 将 FileList 转换为数组
		// console.log(files);
		// 在这里处理文件上传逻辑
		const param = new FormData();
		files.forEach((item: any) => {
			param.append("files", item);
		});
		// 添加上传文件夹信息到 FormData
		param.append("dir", "/simsports" + upMediaDir);
		// console.log(param);

		postAdminFilesUpload(param)
			.then((res: any) => {
				event.target.value = null;
				console.log(res);
				setUpLoading(false); //Loading
				if (res.code == 0) {
					console.log(res);
					const data = res.data.files;
					const filesData = data.map((file: any) => {
						const isImage = file.resources_url.match(/\.(jpeg|jpg|gif|png|webp)$/i) != null;
						const isVideo = file.resources_url.match(/\.(mp4|avi|mov|wmv|flv|mkv)$/i) != null;
						return {
							...file,
							fileType: isImage ? "image" : isVideo ? "video" : "image",
						};
					});
					// // 成功赋值
					setUpMediaData(prevData => [...prevData, ...filesData]);
				} else {
					message.warning(res.message);
				}
			})
			.catch(err => {
				console.log(err);
				setUpLoading(false); //Loading
				event.target.value = null;
				message.warning(err.message);
			});
	};

	return (
		<Card className="flex-1">
			<Flex vertical={true} gap={"middle"}>
				{/* 上传按钮 */}
				<Flex>
					<Button
						size="large"
						type="primary"
						icon={<UploadOutlined />}
						onClick={() => {
							handleButtonClick();
						}}
						loading={upLoading}
					>
						Upload Img / Video
					</Button>
					<input
						id="fileInput"
						style={{ display: "none" }}
						type="file"
						name="files"
						multiple
						accept="image/*,video/*"
						onChange={handleMediaChange}
					/>
				</Flex>
				{/* 上传成功回显 */}
				{upMediaData.length > 0 && (
					<>
						<Divider />
						<Flex vertical={true} gap={"middle"}>
							<Typography.Title level={3}>Upload Media List</Typography.Title>
							<Flex wrap gap={"middle"}>
								{upMediaData.map((item, index) => {
									return (
										<Card
											hoverable
											style={{ width: 300 }}
											key={index}
											cover={
												item.fileType === "video" ? (
													<video className="h-[200px] w-auto object-cover" controls autoPlay>
														<source src={item.resources_url} />
													</video>
												) : (
													<Image
														height={200}
														className="w-auto object-contain"
														src={item.resources_url}
													/>
												)
											}
										>
											<Paragraph copyable>{item.resources}</Paragraph>
										</Card>
									);
								})}
							</Flex>
						</Flex>
					</>
				)}
			</Flex>
		</Card>
	);
};

export default View;
