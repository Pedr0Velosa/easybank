import React from "react";
import styles from "@styles/Sections.module.css";

const SectionContainer = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <>
      <section>
        <section className={styles.section}>{children}</section>
      </section>
    </>
  );
};

export default SectionContainer;
