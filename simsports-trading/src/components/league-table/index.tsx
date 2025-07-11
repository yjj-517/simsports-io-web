// events-richtext
import React from "react";

import esports01 from "@/assets/imgs/components/league/esports-01.png";
import esports02 from "@/assets/imgs/components/league/esports-02.png";
import esports03 from "@/assets/imgs/components/league/esports-03.png";

interface TableDataProps {
	tableTitle: string[];
	title: string;
	tableContent: any;
	state: boolean;
}
interface LeagueTableDataProps {
	leagueTableData: TableDataProps;
}

const View: React.FC<LeagueTableDataProps> = ({ leagueTableData }: LeagueTableDataProps) => {
	// console.log(leagueTableData);

	return (
		<>
			<div className="mt-20">
				<h2 className="text-3xl font-bold"> {leagueTableData.title}</h2>
				<div className="max-h-[900px] overflow-auto trove-scrollbar w-full mt-8">
					<table className="border-spacing-y-6 border-separate w-full text-left">
						<thead>
							<tr className="h-[48px]">
								{leagueTableData.tableTitle.map((item, index) => {
									return (
										<th
											key={index}
											className="bg-bgcolor-600 px-3 first:rounded-l-lg last:rounded-r-lg text-2xl font-normal text-primary"
										>
											{item}
										</th>
									);
								})}
							</tr>
						</thead>
						<tbody>
							{leagueTableData.tableContent.map((item: any[], index: number) => {
								return (
									<tr key={index} className="h-[60px]">
										{leagueTableData.tableTitle.map((t: any, i: number) => {
											return (
												<td key={i} className="mt-6 bg-bgcolor-400 px-3 first:rounded-l-lg last:rounded-r-lg">
													{i === 0 ? (
														<div className="relative w-[60px] h-[60px]">
															<>
																{index === 0 || index === 1 || index === 2 ? (
																	<img
																		src={index === 0 ? esports01 : index === 1 ? esports02 : index === 2 ? esports03 : ""}
																		className="w-[60px] h-[60px]  absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
																	/>
																) : (
																	<div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[40px] leading-10 bg-bgcolor-100 rounded-full text-center border-[1px] border-[#989898] font-bold">
																		{index + 1}
																	</div>
																)}
															</>
														</div>
													) : (
														<div>{item[t]}</div>
													)}
												</td>
											);
										})}
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default View;
