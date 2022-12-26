import React from "react";
import styles from "@styles/Button.module.css";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles["custom-button"]} data-background>
        {children}
      </div>
    </>
  );
};

export default Button;
