import EventItem from "./EventItem";
import { HistEvent } from "src/types";
import s from "../HistDates.module.scss";
import { useEffect, useRef } from "react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperBtns from "src/components/SwiperBtns/SwiperBtns";

type EventListProps = {
	events: HistEvent[];
};

const EventList = ({ events = [] }: EventListProps) => {
	const swiperRef = useRef<SwiperType | null>(null);

	useEffect(() => {
		swiperRef.current?.slideTo(0);
	}, [events]);

	return (
		<div className={s.eventsWrap}>
			<ul className={s.eventList}>
				<Swiper
					spaceBetween={80}
					slidesPerView={3}
					modules={[Pagination]}
					onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
					pagination={{ clickable: true }}
					breakpoints={{
						0: { slidesPerView: 1.5, spaceBetween: 30 },
						650: { slidesPerView: 2, spaceBetween: 30 },
						1060: { slidesPerView: 3, spaceBetween: 50 },
					}}
				>
					{events.map((event) => (
						<SwiperSlide key={event.id}>
							<EventItem
								year={event.year}
								text={event.text}
							/>
						</SwiperSlide>
					))}
				</Swiper>
				{swiperRef.current && (
					<SwiperBtns
						className={s.swiperBtns}
						swiper={swiperRef.current}
					/>
				)}
			</ul>
		</div>
	);
};

export default EventList;
