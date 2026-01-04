import style from "./burgerMenu.module.css";
import NavigationList from "../NavigationList/NavigationList.tsx";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const BurgerMenu = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  // Ссылка на модальное окно
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Контейнер для модальных окон
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const modalRoot = document.getElementById("modal-root")!;

  // Открывает модалку с бургер меню
  const openBurger = () => {
    modalRoot.classList.add("active");
    dialogRef.current?.showModal();
    setIsBurgerOpen(true);
  };

  // Закрывает модалку с бургер меню
  const closeBurger = () => {
    modalRoot.classList.remove("active");
    dialogRef.current?.close();
    setIsBurgerOpen(false);
  };

  // Логика закрытия модального окна
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Обработчик события cancel модального окна
    const handleCancel = (e: Event) => {
      e.preventDefault();
      closeBurger();
    };

    // Вешает слушатель на модальное окно
    dialog.addEventListener("cancel", handleCancel);

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      closeBurger();
    }
  };

  return (
    <>
      <div className={style.burgerIcon} onClick={openBurger}>
        <div className={style.burgerIconRow}></div>
        <div className={style.burgerIconRow}></div>
        <div className={style.burgerIconRow}></div>
      </div>
      {createPortal(
        <dialog className={style.burgerModal} ref={dialogRef} onClick={handleClick}>
          <NavigationList type={"isBurgerNav"} />
        </dialog>,
        modalRoot,
      )}
    </>
  );
};

export default BurgerMenu;
