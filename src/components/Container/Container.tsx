import { ReactElement } from "react";
import s from "./Container.module.scss";

type ContainerProps = {
	children: ReactElement;
	className?: string;
};

const Container = ({ children, className = "" }: ContainerProps) => {
	return <div className={[s.container, className].join(" ")}>{children}</div>;
};

export default Container;
