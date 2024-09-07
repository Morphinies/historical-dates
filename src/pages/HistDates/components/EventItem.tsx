import s from "../HistDates.module.scss";

type EventItemProps = {
	year: number;
	text: string;
};

const EventItem = ({ year, text }: EventItemProps) => {
	return (
		<li className={s.eventItem}>
			<h3>{year}</h3>
			<p>{text}</p>
		</li>
	);
};

export default EventItem;
