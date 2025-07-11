// <!-- failed-view -->
import React from "react";

interface ViewProps {
	tradeShowData: any; //交易数据
}
const View: React.FC<ViewProps> = ({ tradeShowData }: ViewProps) => {
	return (
		<div className="flex flex-col items-center gap-6 pb-6">
			<p className=" font-primary font-bold text-3xl  text-center">
				Sorry, your transaction has failed!
			</p>
			{/* contract链接 */}
			{tradeShowData.hash && (
				<p className=" flex gap-2 flex-wrap">
					<span className="text-text-100">View transaction records:</span>
					<a
						href={tradeShowData.chainApp + "txblock/" + tradeShowData.hash}
						target="_blank"
						rel="nofollow noopener noreferrer"
					>
						<span className="text-primary font-bold hover:underline">
							{tradeShowData.hash.slice(0, 6) + "..." + tradeShowData.hash.slice(-4)}
						</span>
					</a>
				</p>
			)}
		</div>
	);
};

export default View;
