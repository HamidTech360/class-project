// ------------- import external dependencies -------------
import { useEffect } from "react";
import { useDisableBodyScroll } from "./useDisableBodyScroll";

// -------------- import internal dependencies -------------
import { ModalWrapper } from "./style";

interface ModalProps {
  children?: React.ReactNode;
  open: boolean;
  close?: () => void;
}

function Modal({ open, close, children }: ModalProps) {
  /**
   * close modal window on esc key
   */
  const closeModalWithEscKey = (e: KeyboardEvent) => {
    if (close && e.key === "Escape") {
      close();
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", closeModalWithEscKey);
    return () => {
      window.removeEventListener("keyup", closeModalWithEscKey);
    };
  }, []);

  useDisableBodyScroll(open);

  return <>{open && <ModalWrapper role="dialog">{children}</ModalWrapper>}</>;
}

export default Modal;
