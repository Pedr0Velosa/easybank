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
    <article>
      <img src={image} alt="" className={styles.image} />
      <p className={styles.author}>{author}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.author}>{description}</p>
    </article>
  );
};

export default ArticleContainer;
