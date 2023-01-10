import React, { ReactHTML } from "react";
import styles from "@styles/Titles.module.css";

type TitleContainer = {
  title: string;
  titleAs?: keyof ReactHTML;
  subtitle?: string;
  image?: string;
  children?: React.ReactNode;
};

const TitleContainer = ({ title, subtitle, image, children, titleAs }: TitleContainer) => {
  const TitleAs = titleAs ? titleAs : "h1";

  return (
    <article className={styles["text-container"]}>
      {image && <img src={image} alt="" className={styles.image} />}
      <TitleAs className={styles.title}>{title}</TitleAs>
      {subtitle && <p className={styles["sub-title"]}>{subtitle}</p>}
      {children}
    </article>
  );
};

export default TitleContainer;
