import { useEffect } from "react";
import ModalWrapper from "../ModalWrapper";

const styled = {
  top: "4rem",
  paddingInline: "1rem",
  zIndex: 10,
  ["@media (min-width:800px)"]: {
    display: "none",
  },
};

type MobileMenuPros = {
  isOpen: boolean;
  handleClose: () => void;
  children: JSX.Element;
};

const MobileMenu = ({ isOpen, handleClose, children }: MobileMenuPros) => {
  const handleResize = (event: Event) => {
    const { innerWidth } = event.target as Window;
    if (innerWidth > 800) {
      handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ModalWrapper open={isOpen} handleClose={handleClose} styled={styled}>
        {children}
      </ModalWrapper>
    </>
  );
};

export default MobileMenu;
