// events-richtext
import React from "react";

interface EventsRichtextDataProps {
	title: String;
	text: string[];
}
interface EventsProps {
	eventsRichtextData: Array<EventsRichtextDataProps>;
}
const View: React.FC<EventsProps> = ({ eventsRichtextData }: EventsProps) => {
	return (
		<>
			<div className="mt-14">
				{eventsRichtextData.map((item, index) => {
					return (
						<div key={index}>
							<h2 className="mt-8 text-primary text-2xl">{item.title}</h2>
							{item.text.map((t, i) => {
								return <p key={i} dangerouslySetInnerHTML={{ __html: t }} className="mt-2 text-text-200" />;
							})}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default View;
