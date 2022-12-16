import { useState } from "react";
import Logo from "./Logo";
import NavButton from "./NavButton";
import styles from "@styles/Navbar.module.css";
import Menu from "./Menu/Menu";

export type OpenProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.container}>
          <Logo />
          <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
          <NavButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;
