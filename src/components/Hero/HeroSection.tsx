import React from "react";
import heroUrl from "@assets/image-mockups.png";
import IconMenu from "@assets/svg/bg-intro-mobile.svg";
import styles from "@styles/Hero/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles["image-container"]}>
        <img src={heroUrl} className={styles.image} alt="four images showing the different pages on easybank app" />
        <img src={IconMenu} className={styles["background-image"]} alt="" />
      </div>
      <div className={styles["text-container"]}>
        <h1 className={styles.title}>Next generation digital banking</h1>
        <p className={styles["sub-title"]}>
          Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving,
          budgeting, investing, and much more.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
