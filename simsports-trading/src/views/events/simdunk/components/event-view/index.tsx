// eleven-point-competition
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import EventsTitle from "@/components/events/events-title.tsx";
import EventsRichtext from "@/components/events/events-richtext.tsx";
import LeagueTable from "@/components/league-table/index.tsx";

import { getEinnerList } from "@/http/modules/event"; //接口
import { simdunkEventsData } from "@/views/events/simdunk/components/events"; //events
const View: React.FC = () => {
	const location = useLocation(); // router
	const navigate = useNavigate(); //路由跳转
	const [spinning, setSpinning] = useState<boolean>(true); //Spinning
	const [eventData, setEventData] = useState<any>({
		richtextArr: [],
	});
	const [leagueTableData, setLeagueTableData] = useState<any>({
		isLoading: false, //显示
		state: false, //是否请求后台数据
		title: "Winners", //title
		tableTitle: [], //标题
		tableContent: [], //内容
	});
	// 获取初始资源
	const getEventData = () => {
		const pathname = location.pathname;
		console.log(pathname);
		console.log(simdunkEventsData);

		const upEventsData = simdunkEventsData.find(item => {
			return item.path === pathname;
		});
		if (upEventsData) {
			setSpinning(false); //Spinning
			setEventData(upEventsData); //活动数据
			setLeagueTableData(upEventsData.leagueTableData); //获奖数据
		} else {
			navigate("/404");
		}
	};
	useEffect(() => {
		getEventData();
	}, []);
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
				<div className="mx-0 pb-40 md:mx-14">
					<EventsTitle eventsTitleData={eventData} />
					<EventsRichtext eventsRichtextData={eventData.richtextArr} />
					{leagueTableData.isLoading ? <LeagueTable leagueTableData={eventData.leagueTableData} /> : <></>}
				</div>
			</section>
		</>
	);
};

export default View;
