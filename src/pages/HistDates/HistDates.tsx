import { HistDate } from "src/types";
import s from "./HistDates.module.scss";
import { useEffect, useState } from "react";
import EventList from "./components/EventList";
import DateCircle from "./components/DateCircle";
import useHistDates from "src/hooks/useHistDates";
import Container from "src/components/Container/Container";
import Pagination from "src/components/Pagination/Pagination";

function HistDates() {
	const { histDateList } = useHistDates();
	const [histDateNum, setHistDateNum] = useState(1);
	const [histDate, setHistDate] = useState<HistDate>();

	const handleChangeDate = (val: 0 | 1) => {
		const newHistDateNum = val ? histDateNum + 1 : histDateNum - 1;
		setHistDateNum(newHistDateNum);
		setHistDate(histDateList[newHistDateNum - 1]);
	};

	useEffect(() => {
		if (!histDate) {
			setHistDate(histDateList[0]);
		}
	}, [histDateList, histDate]);

	return (
		<Container className={s.container}>
			{histDate ? (
				<div className={s.app}>
					<h1 className={s.title}>Исторические даты</h1>
					<DateCircle
						curDate={histDate}
						dateList={histDateList}
						changeCurDate={(index) => {
							setHistDateNum(index + 1);
							setHistDate(histDateList[index]);
						}}
					/>
					<Pagination
						className={s.pagination}
						curSlideNum={histDateNum}
						handleChange={handleChangeDate}
						totalSlidesNum={histDateList.length}
					/>
					<EventList events={histDate?.events || []} />
				</div>
			) : (
				<></>
			)}
		</Container>
	);
}

export default HistDates;
