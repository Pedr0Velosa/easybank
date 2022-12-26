import styles from "@styles/Navbar/MenuItems.module.css";
import type { OpenProps } from "../Navbar";
import MobileMenu from "./MobileMenu";
import React from "react";
import Button from "./Button";
const MENU_ITEMS = ["home", "about", "contact", "blog", "careers"];

const Menu = ({ isOpen, setIsOpen }: OpenProps) => {
  const handleClose = () => setIsOpen(false);

  const handleOnKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClose();
      return;
    }
  };

  return (
    <>
      <MobileMenu isOpen={isOpen} handleClose={handleClose}>
        <ul className={styles.list} data-open={isOpen}>
          {MENU_ITEMS.map((item, index) => (
            <li
              key={index}
              className={styles["list-item"]}
              // eslint-disable-next-line jsx-a11y/tabindex-no-positive
              tabIndex={1}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
              role={"link"}
              onClick={handleClose}
              onKeyDown={handleOnKeyDown}
            >
              {item}
            </li>
          ))}
        </ul>
      </MobileMenu>
      <div className={styles["only-desktop"]}>
        <ul className={styles.list} data-open={isOpen}>
          {MENU_ITEMS.map((item, index) => (
            <li
              key={index}
              className={styles["list-item"]}
              // eslint-disable-next-line jsx-a11y/tabindex-no-positive
              tabIndex={1}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
              role={"link"}
              onClick={handleClose}
              onKeyDown={handleOnKeyDown}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <Button>
        <button className={`${styles.invite} ${styles.responsive}`}>Request Invite</button>
      </Button>
    </>
  );
};

export default Menu;
