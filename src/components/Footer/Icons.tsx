/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "@styles/Footer/Footer.module.css";

type IconsProps = {
  children: React.ReactNode;
};

const Icons = ({ children }: IconsProps) => {
  return (
    <div>
      <a href="#" className={styles.icon}>
        {children}
      </a>
    </div>
  );
};

export default Icons;
