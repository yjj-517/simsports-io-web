// <!-- live-play -->
import React, { useRef, useEffect } from "react";
// import ReactPlayer from "react-player";

const View: React.FC = () => {
	// YouTube直播链接 todo: 1.修改为从环境变量获取 2.修改为从后端游戏配置获取
	// const liveStreamUrl = "https://www.youtube.com/watch?v=j1MGJ9C9_yg";
	const liveStreamUrl = "https://test-download.simsports.io/game/last-one.mp4";

	// video
	const videoRef = useRef<HTMLVideoElement>(null);
	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.muted = true; // 确保视频自动播放不会被阻止
			videoRef.current.play();
		}
	}, [videoRef.current]);

	return (
		<div className="w-full border-2 border-bgcolor-200 rounded-xl overflow-hidden">
			<video
				ref={videoRef}
				className="inset-0 w-full h-full object-cover object-center"
				autoPlay
				muted
				playsInline
				loop
				preload="auto"
			>
				<source src={liveStreamUrl} />
			</video>
			{/* <ReactPlayer
				url={liveStreamUrl}
				width="100%"
				height="auto"
				controls
				playing
				muted
				config={{
					youtube: {
						playerVars: {
							autoplay: 1,
						},
					},
				}}
				className="aspect-video"
			/> */}
		</div>
	);
};

export default View;
