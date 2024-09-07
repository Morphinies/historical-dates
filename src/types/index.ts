export type IconProps = {
	className?: string;
};

export type HistDate = {
	id: number;
	topic: string;
	events: HistEvent[];
	timePeriod: number[];
};

export type HistEvent = {
	id: number;
	year: number;
	text: string;
};
