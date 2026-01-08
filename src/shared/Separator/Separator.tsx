import clsx from "clsx";
import styles from "./separator.module.css";
type TSeparatorProps = {
  className?: string;
};

export const Separator = (props: TSeparatorProps) => {
  const { className } = props;

  return (
    <>
      <hr className={clsx(styles.separatorSize, className || "")} />
    </>
  );
};
