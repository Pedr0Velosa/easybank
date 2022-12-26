import React from "react";
import styles from "@styles/Titles.module.css";

type TitleContainer = {
  title: string;
  subtitle?: string;
  image?: string;
  children?: React.ReactNode;
};

const TitleContainer = ({ title, subtitle, image, children }: TitleContainer) => {
  return (
    <article className={styles["text-container"]}>
      {image && <img src={image} alt="" className={styles.image} />}
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles["sub-title"]}>{subtitle}</p>}
      {children}
    </article>
  );
};

export default TitleContainer;
