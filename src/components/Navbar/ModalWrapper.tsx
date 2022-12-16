import Modal from "@mui/material/Modal";
import type { SxProps } from "@mui/material";

type ModalWrapperProps = {
  open: boolean;
  handleClose: (open: boolean) => void;
  children: JSX.Element;
  styled?: SxProps;
};

const ModalWrapper = ({ open, handleClose, styled, children }: ModalWrapperProps): JSX.Element => {
  return (
    <Modal open={open} onClose={handleClose} sx={styled}>
      {children}
    </Modal>
  );
};

export default ModalWrapper;
