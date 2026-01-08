import style from "./sectionTitle.module.css";
import clsx from "clsx";
import { createElement } from "react";

interface ISectionTitleProps {
  title: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

const SectionTitle = (props: ISectionTitleProps) => {
  const { title, tag, className } = props;

  return createElement(tag, { className: clsx(style.sectionTitle, className || "") }, title);
};

export default SectionTitle;
