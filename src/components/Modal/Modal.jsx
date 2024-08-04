//Modal.jsx
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Icon from "../Icon/Icon";
import { Opacity, Modalcont, ModalClose } from "./Modal.styled";

const Modal = ({ children, width, height, onClose, top, left }) => {
  const modalRoot = document.getElementById("modal-root");

  // Effect for handling keypress
  useEffect(() => {
    const handleCloseKeyPress = (event) => {
      if (event.code === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleCloseKeyPress);

    return () => {
      document.removeEventListener("keydown", handleCloseKeyPress);
    };
  }, [onClose]);

  // Effect for handling outside click
  const handleOutsideClick = (event) => {
    console.log("Outside click detected", event.target, event.currentTarget); // Debugging log
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  return createPortal(
    <Opacity onClick={handleOutsideClick}>
      <Modalcont
        $Width={width}
        $Height={height}
        onClick={(event) => event.stopPropagation()}
        $top={top}
        $left={left}
      >
        <ModalClose
          type="button"
          aria-label="Close modal"
          onClick={handleClose}
        >
          <Icon
            width={18}
            height={18}
            strokeColor={"var(--text-color)"}
            name={"close"}
          />
        </ModalClose>
        {children}
      </Modalcont>
    </Opacity>,
    modalRoot
  );
};

export default Modal;
