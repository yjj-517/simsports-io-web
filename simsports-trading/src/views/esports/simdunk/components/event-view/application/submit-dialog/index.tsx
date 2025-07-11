// <!-- submit-dialog -->
import React, { useState } from "react";
import ModalView from "@/components/modal-view/index";
import WarningBoxView from "@/components/warning-box-view/index";

import { accountStores } from "@/store/index"; //store
import { postEventSubmitForm } from "@/http/modules/event"; //接口

import IconSpin from "@/assets/imgs/common/icon-spin.svg?react";
import { message } from "antd";
interface ViewProps {
	onClose01: () => void;
	onClose02: () => void;
	itemCardData: any;
	eventData: any;
}
const View: React.FC<ViewProps> = ({ onClose01, onClose02, itemCardData, eventData }) => {
	const [isLoading, setIsLoading] = useState<boolean>(false); //Loading
	// input表单数据状态
	const [teamNameData, setTeamName] = useState({
		value: "", //input值
		state: true, //正则错误
		reg: /^.{8,20}$/, //正则-8-20位
		warningText: "This field cannot be empty. Please fill in the information as required.", //正则报错
	});
	// 处理输入框值变化的函数
	const handleInputChangeTeamName = (event: any) => {
		const { value } = event.target;
		const isValid = teamNameData.reg.test(value);
		setTeamName({
			...teamNameData,
			value: value,
			state: isValid,
		});
	};
	// input表单数据状态
	const [teamPeopleData, setTeamPeople] = useState([
		{
			title: "Team Captain",
			gameId: {
				value: "", //input值
				state: true, //正则错误
				reg: /^[1-9]\d*$/, //正则-正整数
				warningText: "Game ID is error.", //正则报错
			},
			walletAddress: {
				value: accountStores.getState().userInfo.address, //input值
				readOnlyState: true, //禁止修改
				state: true, //正则错误
				reg: /^0x[a-fA-F0-9]{40}$/i, //正则
				warningText: "Wallet Address is error.", //正则报错
			},
		},
		{
			title: "Team Members1",
			gameId: {
				value: "", //input值
				state: true, //正则错误
				reg: /^[1-9]\d*$/, //正则
				warningText: "Game ID is error.", //正则报错
			},
			walletAddress: {
				value: "", //input值
				readOnlyState: false, //禁止修改
				state: true, //正则错误
				reg: /^0x[a-fA-F0-9]{40}$/i, //正则
				warningText: "Wallet Address is error.", //正则报错
			},
		},
		{
			title: "Team Members2",
			gameId: {
				value: "", //input值
				state: true, //正则错误
				reg: /^[1-9]\d*$/, //正则
				warningText: "Game ID is error.", //正则报错
			},
			walletAddress: {
				value: "", //input值
				readOnlyState: false, //禁止修改
				state: true, //正则错误
				reg: /^0x[a-fA-F0-9]{40}$/i, //正则
				warningText: "Wallet Address is error.", //正则报错
			},
		},
	]);
	// 处理输入框值变化的函数
	const handleInputChangeTeamPeop = (event: any) => {
		const { name, value } = event.target;
		// 分解 name 属性，获取输入框类型和索引
		const [type, index] = name.split("-");
		const updatedTeamPeopleData = [...teamPeopleData];
		const updatedItem = { ...updatedTeamPeopleData[index] };
		// 更新对应输入框的值
		if (type === "gameId") {
			updatedItem.gameId.value = value;
			if (Number(value) >= 100588888) {
				updatedItem.gameId.state = true;
			} else {
				updatedItem.gameId.state = false;
			}
		} else if (type === "walletAddress") {
			updatedItem.walletAddress.value = value;
			updatedItem.walletAddress.state = updatedItem.walletAddress.reg.test(value);
		}
		updatedTeamPeopleData[index] = updatedItem;
		setTeamPeople(updatedTeamPeopleData);
	};
	// 点击提交标签按钮
	const handleSubmit = () => {
		// event.preventDefault();
		const isTeamNameValid = teamNameData.reg.test(teamNameData.value);
		// 正则判断
		setTeamName({
			...teamNameData,
			state: isTeamNameValid,
		}); // 正则错误
		//
		const updatedTeamPeopleData = teamPeopleData.map(item => {
			const updatedGameId = { ...item.gameId };
			const updatedWalletAddress = { ...item.walletAddress };
			// 正则判断
			if (Number(item.gameId.value) >= 100588888) {
				updatedGameId.state = true;
			} else {
				updatedGameId.state = false;
			}
			updatedWalletAddress.state = item.walletAddress.reg.test(item.walletAddress.value);
			return {
				...item,
				gameId: updatedGameId, // 更新-gameId
				walletAddress: updatedWalletAddress, // 更新-walletAddress
			};
		});
		setTeamPeople(updatedTeamPeopleData);
		// 正则判断
		const isTeamPeopleValid = updatedTeamPeopleData.every(item => {
			return item.gameId.state && item.walletAddress.state;
		});
		if (isTeamNameValid && isTeamPeopleValid) {
			// 正则通过
			if (!isLoading) {
				setIsLoading(true); //Loading
				console.log(itemCardData);
				const memberList = teamPeopleData.map(item => {
					return {
						address: item.walletAddress.value,
						member_type: item.title === "Team Captain" ? 1 : 2, // 如果是队长，member_type为1，否则为2
						user_game_id: item.gameId.value,
					};
				});
				const ticketIds = itemCardData.map((item: any) => item.token_id);
				const objs = {
					team_name: teamNameData.value, // 队伍名
					event_id: eventData.eventId, // 活动的 id 现在只有一个的话，固定传 1 就可以
					ticket_ids: ticketIds, // 报名门票的 token id
					captain: accountStores.getState().userInfo.address, // 报名队长的地址
					member_list: memberList,
				};
				postEventSubmitForm(objs)
					.then((res: any) => {
						console.log(res);
						if (res.code === 0) {
							setIsLoading(false); //Loading
							onClose01(); //关闭form
							onClose02(); //成功弹窗
						} else {
							setIsLoading(false); //Loading
							message.warning(res.message);
						}
					})
					.catch((err: any) => {
						console.log(err);
						setIsLoading(false); //Loading
					});
			}
		}
	};
	return (
		<ModalView onClose={onClose01} width="840px" closable={true}>
			<div className="flex flex-col">
				<h2 className="text-3xl text-center font-Quantico text-primary ">Registration Form</h2>
				<div className="mt-10 flex flex-col gap-6">
					<div className=" flex flex-col justify-between md:flex-row gap-2 md:gap-6">
						<span className="min-w-[120px] mt-3">Team Name</span>
						<div className="flex-1 flex justify-between flex-col md:flex-row gap-2 md:gap-6">
							<div className="flex flex-col flex-1 min-w-[200px] ">
								<input
									type="text"
									className={`${teamNameData.state ? " border-bgcolor-200 focus:border-primary " : " border-disabled focus:border-disabled "} bg-black focus:outline-none h-[48px] w-full px-3 rounded-lg border-[2px] `}
									placeholder="8-20 Characters"
									name="teamName"
									value={teamNameData.value}
									onChange={handleInputChangeTeamName}
								/>
								<div className="">{!teamNameData.state && <WarningBoxView warningData={teamNameData.warningText} />}</div>
							</div>
						</div>
					</div>
					{teamPeopleData.map((item, index) => {
						return (
							<div key={index} className=" flex flex-col justify-between md:flex-row gap-2 md:gap-6">
								<span className="min-w-[120px] mt-3">{item.title}</span>
								<div className="flex-1 flex justify-between flex-col md:flex-row gap-2 md:gap-6">
									<div className="flex flex-col min-w-[200px] md:w-[200px] ">
										<div className="h-[48px]">
											<input
												type="text"
												className={`${item.gameId.state ? " border-bgcolor-200 focus:border-primary " : " border-disabled focus:border-disabled "} bg-black focus:outline-none h-full w-full px-3 rounded-lg border-[2px] border-bgcolor-200 `}
												placeholder="Game ID"
												name={`gameId-${index}`}
												value={item.gameId.value}
												onChange={handleInputChangeTeamPeop}
											/>
										</div>
										{!item.gameId.state ? <WarningBoxView warningData={item.gameId.warningText} /> : <></>}
									</div>
									<div className="flex flex-col flex-1 min-w-[200px] ">
										<input
											type="text"
											className={`${item.walletAddress.readOnlyState ? " cursor-not-allowed " : " "} ${item.walletAddress.state ? " border-bgcolor-200 focus:border-primary " : " border-disabled focus:border-disabled "} bg-black focus:outline-none h-[48px] w-full px-3 rounded-lg border-[2px] border-bgcolor-200 `}
											placeholder="Wallet Address"
											readOnly={item.walletAddress.readOnlyState}
											name={`walletAddress-${index}`}
											value={item.walletAddress.value}
											onChange={handleInputChangeTeamPeop}
										/>
										{!item.walletAddress.state ? <WarningBoxView warningData={item.walletAddress.warningText} /> : <></>}
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<div className="mt-8 text-center text-primary">
					Please confirm that the provided Game ID and wallet address have been linked within the game.
				</div>
				<div className="flex justify-center mt-8">
					<button
						className=" fillet-button  py-2.5 text-lg w-[240px] "
						onClick={() => {
							handleSubmit();
						}}
					>
						{isLoading ? <IconSpin className="size-7 text-primary animate-spin-slow-1" /> : <span>Confirmed</span>}
					</button>
				</div>
			</div>
		</ModalView>
	);
};

export default View;
