import { useEffect, useState } from "react";

interface ViewProps {
	endTime: number; // 毫秒时间戳
	onEnd?: () => void; // 倒计时结束回调（可选）
	endText?: string; // 自定义结束提示文字（默认是 "已经结束"）
}
const View: React.FC<ViewProps> = ({ endTime, onEnd, endText }: ViewProps) => {
	const [timeLeft, setTimeLeft] = useState(endTime - Date.now());

	useEffect(() => {
		if (timeLeft <= 0) return;

		const timer = setInterval(() => {
			const now = Date.now();
			const left = endTime - now;
			if (left <= 0) {
				clearInterval(timer);
				setTimeLeft(0);
				onEnd?.();
			} else {
				setTimeLeft(left);
			}
		}, 1000);

		return () => clearInterval(timer);
	}, [endTime]);

	const formatTime = (ms: number) => {
		const totalSeconds = Math.floor(ms / 1000);
		const hours = Math.floor(totalSeconds / 3600);
		const minutes = Math.floor((totalSeconds % 3600) / 60);
		const seconds = totalSeconds % 60;
		const pad = (n: number) => String(n).padStart(2, "0");
		return `${hours}:${pad(minutes)}:${pad(seconds)}`;
	};

	return <span>{timeLeft > 0 ? formatTime(timeLeft) : endText ? endText : "End"}</span>;
};

export default View;
