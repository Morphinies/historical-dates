import { IconProps } from "src/types";

const ArrowBackIcon = ({ className }: IconProps) => {
	return (
		<svg
			width="10"
			height="14"
			fill="none"
			viewBox="0 0 10 14"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
				stroke="#42567A"
				strokeWidth="2"
			/>
		</svg>
	);
};

export default ArrowBackIcon;
