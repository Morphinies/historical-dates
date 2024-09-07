import useDisabled from "./useDisabled";
import s from "./SwiperBtns.module.scss";
import type { Swiper as SwiperType } from "swiper";
import ArrowBackIcon from "src/assets/icons/ArrowBackIcon";
import ArrowNextIcon from "src/assets/icons/ArrowNextIcon";

type SwiperBtnsProps = {
	className?: string;
	swiper: SwiperType;
};

const SwiperBtns = ({ className, swiper }: SwiperBtnsProps) => {
	const [disabled] = useDisabled(swiper);

	return (
		<>
			<button
				disabled={disabled.prev}
				onClick={() => swiper.slidePrev()}
				className={[s.btn, s.back, className].join(" ")}
			>
				<ArrowBackIcon className={s.iconArrow} />
			</button>
			<button
				disabled={disabled.next}
				onClick={() => swiper.slideNext()}
				className={[s.btn, s.next, className].join(" ")}
			>
				<ArrowNextIcon className={s.iconArrow} />
			</button>
		</>
	);
};

export default SwiperBtns;
