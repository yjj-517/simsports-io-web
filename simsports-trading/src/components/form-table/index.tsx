// events-richtext
import React from "react";

interface TableDataProps {
	state: boolean;
	title: string;
	tableTitle: string[];
	tableContent: any;
}
interface FormTableDataProps {
	formTableData: TableDataProps;
}

const View: React.FC<FormTableDataProps> = ({ formTableData }: FormTableDataProps) => {
	// console.log(formTableData);

	return (
		<>
			<div className="mt-20">
				<h2 className="text-3xl font-bold">
					{formTableData.title}
					{formTableData.tableContent.length}/16
				</h2>
				<div className="max-h-[900px] overflow-auto trove-scrollbar w-full mt-8">
					<table className="border-spacing-y-6 border-separate w-full text-left">
						<thead>
							<tr className="h-[48px]">
								{formTableData.tableTitle.map((item, index) => {
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
							{formTableData.tableContent.map((item: any[], index: number) => {
								return (
									<tr key={index} className="h-[60px]">
										{formTableData.tableTitle.map((t: any, i: number) => {
											return (
												<td key={i} className="mt-6 bg-bgcolor-400 px-3 first:rounded-l-lg last:rounded-r-lg">
													<div>{item[t]}</div>
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
