// special-esport-event
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { simdunkEsportsData } from "@/views/esports/simdunk/components/events"; //esports
import { getListForm, getEinnerList } from "@/http/modules/event"; //接口

import Application from "./application/index";
import EventsTitle from "@/components/events/events-title.tsx";
import EventsRichtext from "@/components/events/events-richtext.tsx";
import LeagueTable from "@/components/league-table/index.tsx";
import FormTable from "@/components/form-table/index.tsx";

const View: React.FC = () => {
	const [showModal02, setShowModal02] = useState<boolean>(false); //报名成功弹窗
	// 修改弹窗状态
	const toggleModal02 = () => {
		setShowModal02(!showModal02);
	};
	const [spinning, setSpinning] = useState<boolean>(true); //Spinning
	const location = useLocation(); // router
	const navigate = useNavigate(); //路由跳转
	const [eventData, setEventData] = useState<any>({
		richtextArr: [],
	});
	const [formTableData, setFormTableData] = useState<any>({
		isLoading: false, //显示
		state: false, //是否请求后台数据
		title: "Participating teams :", //title
		tableTitle: ["Ticket ID", "Team Name", "Team Captain", "Team Members"], //标题
		tableContent: [], //内容
	});
	const [leagueTableData, setLeagueTableData] = useState<any>({
		isLoading: false, //显示
		state: false, //是否请求后台数据
		title: "Winners", //title
		tableTitle: ["", "Game ID", "User Name", "Wallet Address"], //标题
		tableContent: [], //内容
	});
	// 获取初始资源
	const getEventData = () => {
		const pathname = location.pathname;
		const upEventsData = simdunkEsportsData.find(item => {
			return item.path === pathname;
		});
		if (upEventsData) {
			setSpinning(false); //Spinning
			setEventData(upEventsData); //活动数据
			setFormTableData(upEventsData.formTableData); //参赛数据
			setLeagueTableData(upEventsData.leagueTableData); //获奖数据
		} else {
			navigate("/404");
		}
	};
	useEffect(() => {
		getEventData();
	}, []);
	// 获取报名成功列表
	const getTemaList = () => {
		if (!spinning) {
			if (formTableData.state) {
				getListForm({
					event_id: eventData.eventId,
				}).then(res => {
					// console.log(res);
					const data = res.data.list;
					const dataArr = data.map((item: any) => {
						const teamMembers = item.team_members
							.filter((member: any) => member.member_type === 2)
							.map((member: any) => member.user_game_id)
							.join(" / ");
						return {
							"Ticket ID": "Energy Tuner M #" + item.ticket_id,
							"Team Name": item.name,
							"Team Captain": item.team_members.find((member: any) => member.member_type === 1)?.user_game_id || "", //type-1-队长/2-队员
							"Team Members": teamMembers,
						};
					});
					setFormTableData({
						...formTableData,
						isLoading: true,
						tableContent: dataArr,
					});
				});
			}
		}
	};
	useEffect(() => {
		getTemaList();
	}, [spinning, showModal02]);
	// 获取Winner-list
	const onEinnerList = () => {
		if (!spinning) {
			if (leagueTableData.state) {
				getEinnerList({
					event_id: eventData.eventId,
				}).then(res => {
					console.log(res);
					setLeagueTableData({
						...leagueTableData,
						isLoading: true,
						tableContent: res.data.list,
					});
				});
			}
		}
	};
	useEffect(() => {
		onEinnerList();
	}, [spinning]);
	return (
		<>
			<section className="main">
				<div className="mx-0 md:mx-14">
					<EventsTitle eventsTitleData={eventData} />
					<Application eventData={eventData} showModal02={showModal02} toggleModal02={toggleModal02} />
					<EventsRichtext eventsRichtextData={eventData.richtextArr} />
					{formTableData.isLoading ? <FormTable formTableData={formTableData} /> : <></>}
					{leagueTableData.isLoading ? <LeagueTable leagueTableData={leagueTableData} /> : <></>}
				</div>
			</section>
			<div className="pt-40"></div>
		</>
	);
};

export default View;
