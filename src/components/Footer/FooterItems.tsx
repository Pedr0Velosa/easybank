import React from "react";
import styles from "@styles/Footer/Footer.module.css";

const FooterItems = () => {
  return (
    <ul className={styles["more-info"]}>
      <div>
        <li>About Us</li>
        <li>Contact</li>
        <li>Blog</li>
      </div>
      <div>
        <li>Careers</li>
        <li>Support</li>
        <li>Privacy Policy</li>
      </div>
    </ul>
  );
};

export default FooterItems;
