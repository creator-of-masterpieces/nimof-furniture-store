import style from "./sectionTitle.module.css";
import clsx from "clsx";

interface ISectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle = (props: ISectionTitleProps) => {
  const { title, className } = props;

  return <h2 className={clsx(style.sectionTitle, className || "")}>{title}</h2>;
};

export default SectionTitle;
