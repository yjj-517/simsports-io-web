// <!-- exception -->
import React from "react";

const View: React.FC = () => {
	return (
		<div className="absolute w-full h-full flex flex-col items-center justify-center text-center px-5 gap-4">
			<p className="text-2xl font-primary px-2">
				The page you are looking for might have been removed, had its name changed, or is
				temporarily unavailable.
			</p>
			<button className="primary-button p-2 text-xl">
				<a href="/" target="_top" rel="nofollow noopener noreferrer">
					Go To Home
				</a>
			</button>
		</div>
	);
};

export default View;
