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
  const { isOpen, onClose, children, title } = props;

  // Ссылка на модальное окно
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Главное управление открытием / закрытием
  useEffect(() => {
    if (isOpen && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [isOpen]);

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

  if (!isOpen) return null;

  return createPortal(
    <dialog className={style.modal} ref={dialogRef}>
      <div className={style.modalContent}>
        <h2 className={style.modalTitle}>{title}</h2>
        {children}
        <button className={style.closeButton} onClick={onClose}>
          Закрыть
        </button>
      </div>
    </dialog>,
    document.body,
  );
};

export default Modal;
