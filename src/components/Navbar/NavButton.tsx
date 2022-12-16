import styles from "@styles/Navbar/Navbutton.module.css";
import type { OpenProps } from "./Navbar";

const NavButton = ({ isOpen, setIsOpen }: OpenProps): JSX.Element => {
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className={styles["button-container"]} onClick={handleMenu} tabIndex={0}>
      <svg viewBox="0 0 100 100" className={styles.button} data-open={isOpen} aria-expanded={isOpen}>
        <desc>hamburguer button {isOpen ? "opened" : "closed"}</desc>
        <rect className={`${styles.line} ${styles.top}`} width={80} height={10} x={10} y={25} rx={5}></rect>
        <rect className={`${styles.line} ${styles.middle}`} width={80} height={10} x={10} y={45} rx={5}></rect>
        <rect className={`${styles.line} ${styles.bottom}`} width={80} height={10} x={10} y={65} rx={5}></rect>
      </svg>
    </button>
  );
};

export default NavButton;
