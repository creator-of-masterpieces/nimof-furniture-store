import styles from "./map.module.css";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    ymaps: any;
  }
}

export const Map = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.ymaps.ready(() => {
      // Создаём новую карту внутри div с id="yandex-map"
      const map = new window.ymaps.Map(mapRef.current, {
        center: [55.583628, 37.711401], // Координаты центра карты (пример: Москва)
        zoom: 16, // Уровень приближения (больше — ближе)
        controls: ["zoomControl", "fullscreenControl"], // Добавляем кнопки управления
      });

      // Создаём метку (Placemark) на карте
      const placemark = new window.ymaps.Placemark(
        [55.583628, 37.711401], // Координаты метки
        {
          // Что будет показано в "баллуне"
          balloonContent: `
                <div>
                <h3 
                style="
                font-weight: var(--font-weight-bold);
                margin-block-end: 1px;">
                Магазин мебели Nimof
                </h3>
                <p>Мебель для дома и офиса</p>
                <p style="color: #777">МКАД, 25-й километр, 4с1, Москва<p>
                </div>
                `,
        },
        {
          preset: "islands#social-list", // Стиль метки
          iconColor: "#ff9900", // Цвет иконки (например, оранжевый)
        },
      );

      // Отключаем масштабирование карты колесиком мыши
      map.behaviors.disable("scrollZoom");

      // Добавляем метку на карту
      map.geoObjects.add(placemark);

      // Открываем баллун (всплывающую подсказку) сразу при загрузке
      placemark.balloon.open();
    });
  }, []);

  return (
    <section className={styles.map}>
      <div ref={mapRef} className={styles.frame}></div>
    </section>
  );
};
