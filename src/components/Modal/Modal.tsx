import style from "./modal.module.css";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}
const Modal = (props: IModalProps) => {
  const { isOpen, onClose, children } = props;

  // Ссылка на модальное окно
  const dialogRef = useRef<HTMLDialogElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const modalRoot = document.getElementById("modal-root")!;

  // Главное управление открытием / закрытием
  useEffect(() => {
    if (modalRoot) {
      modalRoot.classList.toggle("active", isOpen);
    }
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [isOpen, modalRoot]);

  useEffect(() => {
    // Закрытие по событию close
    const handleClose = () => {
      onClose();
    };

    const dialog = dialogRef.current;
    if (dialog) {
      dialog.addEventListener("close", handleClose);
    }

    return () => {
      if (dialog) {
        dialog.removeEventListener("close", handleClose);
      }
    };
  }, [onClose]);

  const handleClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <dialog className={style.modal} ref={dialogRef} onClick={handleClick}>
      <div className={style.modalContent}>
        {children}
        <button className={style.closeButton} onClick={onClose}>
          &times;
        </button>
      </div>
    </dialog>,
    modalRoot,
  );
};

export default Modal;
