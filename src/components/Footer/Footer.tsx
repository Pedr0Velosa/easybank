import React from "react";
import Logo from "@components/Navbar/Logo";
import stylesMenuItems from "@styles/Navbar/MenuItems.module.css";
import Button from "@components/Navbar/Menu/Button";
import { Facebook, Youtube, Instagram, Pinterest, Twitter } from "@assets/svg/Imports";
import Icons from "./Icons";
import styles from "@styles/Footer/Footer.module.css";
import FooterItems from "./FooterItems";

const ICONS_ITEMS = [Facebook, Youtube, Twitter, Pinterest, Instagram];

const Footer = () => {
  return (
    <footer className={styles.background}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Logo fill="white" />
          <ul className={styles.links}>
            {ICONS_ITEMS.map((Component, index) => (
              <Icons key={index}>{<Component />}</Icons>
            ))}
          </ul>
        </div>
        <FooterItems />
        <div className={styles.right}>
          <Button>
            <button className={stylesMenuItems.invite}>Request Invite</button>
          </Button>
          <h4 className={styles.rights}>© Easybank. All Rights Reserved</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
