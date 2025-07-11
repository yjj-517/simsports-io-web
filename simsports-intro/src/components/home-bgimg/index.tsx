import React, { useEffect, useRef, useState } from "react";

interface ImageWrapperProps {
	Imgsrc: string;
	ImgHeight: string;
}

const ImageWrapper: React.FC<ImageWrapperProps> = ({ Imgsrc, ImgHeight }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [scrollProgress, setScrollProgress] = useState(0); // 滚动进度：0 到 1
	useEffect(() => {
		const handleScroll = () => {
			if (!ref.current) return;
			// 获取元素的边界信息
			const rect = ref.current.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			// 计算元素的底部与视口顶部的距离
			const elementBottom = rect.top + rect.height;
			// 计算滚动进度
			const progress = Math.min(Math.max((elementBottom - windowHeight) / windowHeight, 0), 1);
			setScrollProgress(progress);
		};
		const handleResize = () => {
			handleScroll(); // 在窗口大小变化时重新计算滚动进度
		};

		// 监听滚动事件
		window.addEventListener("scroll", handleScroll);
		window.addEventListener("resize", handleResize); // 监听窗口大小变化事件
		handleScroll(); // 初始化时也计算一次进度

		// 清理事件监听
		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// 根据滚动进度计算 transform
	const transformStyle = {
		transform: `translate3d(0px, ${0 - scrollProgress * 100}px, 0px) scale(1)`,
		willChange: "transform",
		transition: "transform 0.1s linear", // 防止抖动，短平滑过渡
	};

	return (
		<div
			className="w-[1980px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
			ref={ref}
		>
			<img
				src={Imgsrc}
				className={`object-cover w-full min-w-[1980px] h-[${ImgHeight}]`}
				style={transformStyle}
			/>
		</div>
	);
};

export default ImageWrapper;
