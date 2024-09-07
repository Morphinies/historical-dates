import s from "./Pagination.module.scss";
import ArrowBackIcon from "src/assets/icons/ArrowBackIcon";
import ArrowNextIcon from "src/assets/icons/ArrowNextIcon";

type SwiperBtnsProps = {
	className?: string;
	curSlideNum: number;
	totalSlidesNum: number;
	handleChange: (v: 1 | 0) => void;
};

const Pagination = ({
	className,
	curSlideNum,
	handleChange,
	totalSlidesNum,
}: SwiperBtnsProps) => {
	const getStrWithPad = (str: string | number, pad: number): string => {
		return String(str).padStart(pad);
	};

	return (
		<div className={[s.pagination, className].join(" ")}>
			<p className={s.pagesText}>
				{`${getStrWithPad(curSlideNum, 2)} 
			/ 
			${getStrWithPad(totalSlidesNum, 2)}`}
			</p>
			<div className={s.btnsWrap}>
				<button
					className={s.btn}
					disabled={curSlideNum === 1}
					onClick={() => handleChange(0)}
				>
					<ArrowBackIcon className={s.iconArrow} />
				</button>
				<button
					className={s.btn}
					onClick={() => handleChange(1)}
					disabled={curSlideNum === totalSlidesNum}
				>
					<ArrowNextIcon className={s.iconArrow} />
				</button>
			</div>
		</div>
	);
};

export default Pagination;
