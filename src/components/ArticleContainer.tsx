import React from "react";
import styles from "@styles/Articles/Articles.module.css";

type ArticleType = {
  author: string;
  title: string;
  description: string;
  image: string;
};

const ArticleContainer = ({ author, title, description, image }: ArticleType) => {
  return (
    <article className={styles.container}>
      <img src={image} alt="" className={styles["image"]} />
      <div className={styles["text-container"]}>
        <p className={styles.author}>{author}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default ArticleContainer;
