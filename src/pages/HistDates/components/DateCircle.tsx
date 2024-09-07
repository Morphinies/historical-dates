import { HistDate } from "src/types";
import s from "../HistDates.module.scss";
import getPointStyle from "src/utils/getPointStyle";
import { useEffect, useRef, useState } from "react";
import useTimePeriods from "src/hooks/useTimePeriods";

type DateCircleProps = {
	curDate: HistDate;
	dateList: HistDate[];
	changeCurDate: (v: number) => void;
};

const DateCircle = ({ dateList, curDate, changeCurDate }: DateCircleProps) => {
	const [topic, setTopic] = useState("");
	const circleRef = useRef<HTMLDivElement>(null);
	const [changing, setChanging] = useState(false);
	const [activeIndex, setActiveIndex] = useState<number>(-1);
	const { timePeriods, changeTimePeriods } = useTimePeriods();
	const changingTopicTimer = useRef<NodeJS.Timeout | null>(null);

	const changeTopic = () => {
		changingTopicTimer.current && clearTimeout(changingTopicTimer.current);
		setChanging(true);
		changingTopicTimer.current = setTimeout(() => {
			setChanging(false);
			setTopic(curDate.topic);
		}, 300);
	};

	useEffect(() => {
		changeTimePeriods(timePeriods, curDate.timePeriod);
		changeTopic();

		const activeIndex = dateList.findIndex((d) => d.id === curDate.id);
		setActiveIndex(activeIndex);
		// eslint-disable-next-line
	}, [dateList, curDate]);

	return (
		<div className={s.dateCircleWrap}>
			<p className={s.dateTitle}>{timePeriods?.[0] || ""}</p>
			<div
				ref={circleRef}
				className={s.dateCircle}
			>
				<div className={s.topicWrap}>
					{activeIndex >= 0 && (
						<div className={[s.topic, changing ? s.hidden : ""].join(" ")}>
							{topic}
						</div>
					)}
				</div>
				<ul className={s.histDateList}>
					{dateList.map((date, i) => (
						<li
							key={date.id}
							onClick={() => changeCurDate(i)}
							className={activeIndex === i ? s.active : ""}
							style={getPointStyle(
								i,
								dateList.length,
								activeIndex,
								circleRef.current
							)}
						>
							<div className={s.point}>
								<p>{i + 1}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
			<p className={s.dateTitle}>{timePeriods?.[1] || ""}</p>
		</div>
	);
};

export default DateCircle;
