//Modal.jsx
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { Opacity, Modalcont, ModalClose } from "./Modal.styled";

const Modal = ({
  children,
  width,
  height,
  onClose,
  top,
  left,
  border,
  background,
}) => {
  const modalRoot = document.getElementById("modal-root");

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

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
      event.stopPropagation();
    }
  };

  const handleClose = () => {
    onClose();
  };

  return createPortal(
    <Opacity onClick={handleOutsideClick} $background={background}>
      <Modalcont
        $Width={width}
        $Height={height}
        onClick={(event) => event.stopPropagation()}
        $top={top}
        $left={left}
        $border={border}
      >
        <ModalClose
          type="button"
          aria-label="Close modal"
          onClick={handleClose}
        >
          {/* Вставка SVG-кода вместо Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="none"
              stroke="var(--text-color)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="85.333"
              d="M768 256 256 768M256 256l512 512"
            />
          </svg>
        </ModalClose>
        {children}
      </Modalcont>
    </Opacity>,
    modalRoot
  );
};

export default Modal;
