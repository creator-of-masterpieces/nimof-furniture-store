import { v4 as uuidv4 } from "uuid";
import type { IProduct, TCategory } from "../types.ts";

export const categories: TCategory[] = ["Гостиная", "Кухня", "Ванная", "Санузел", "Шкафы"];

export const products: IProduct[] = [
  // Гостиная (6 товаров)
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/living1/600/400", alt: "Фото гостиной первое" },
      { src: "https://picsum.photos/seed/living2/600/400", alt: "Фото гостиной второе" },
    ],
    category: "Гостиная",
    title: "Гостиная Welcome",
    price: "39 990₽",
    description:
      "Современный гарнитур с глянцевыми фасадами и светодиодной подсветкой. Идеален для интерьеров в стиле лофт и минимализм.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/living3/600/400", alt: "Фото гостиной первое" },
      { src: "https://picsum.photos/seed/living4/600/400", alt: "Фото гостиной второе" },
    ],
    category: "Гостиная",
    title: "Гостиная Modern",
    price: "42 500₽",
    description:
      "Универсальный комплект с вместительными шкафами и открытыми полками. Практичное решение для повседневной жизни.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/living5/600/400", alt: "Фото гостиной первое" },
      { src: "https://picsum.photos/seed/living6/600/400", alt: "Фото гостиной второе" },
    ],
    category: "Гостиная",
    title: "Гостиная Luxury",
    price: "59 900₽",
    description:
      "Элитная мебель из массива дерева с ручной резьбой. Фурнитура премиум‑класса и индивидуальная подгонка деталей.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/living7/600/400", alt: "Фото гостиной первое" },
      { src: "https://picsum.photos/seed/living8/600/400", alt: "Фото гостиной второе" },
    ],
    category: "Гостиная",
    title: "Гостиная Minimal",
    price: "36 800₽",
    description:
      "Лаконичный комплект в скандинавском стиле: натуральные материалы, светлые тона и максимум функциональности.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/living9/600/400", alt: "Фото гостиной первое" },
      { src: "https://picsum.photos/seed/living10/600/400", alt: "Фото гостиной второе" },
    ],
    category: "Гостиная",
    title: "Гостиная Classic",
    price: "44 200₽",
    description:
      "Традиционный гарнитур с резными фасадами и витражными вставками. Элегантность и статусность в каждой детали.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/living11/600/400", alt: "Фото гостиной первое" },
      { src: "https://picsum.photos/seed/living12/600/400", alt: "Фото гостиной второе" },
    ],
    category: "Гостиная",
    title: "Гостиная Compact",
    price: "33 900₽",
    description:
      "Компактный набор для небольших гостиных: оптимизированное хранение и визуальная лёгкость конструкции.",
  },

  // Кухня (6 товаров)
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/kitchen1/600/400", alt: "Кухня Модель 1, фото 1" },
      { src: "https://picsum.photos/seed/kitchen2/600/400", alt: "Кухня Модель 1, фото 2" },
    ],
    category: "Кухня",
    title: "Кухня Стандарт",
    price: "42 100₽",
    description: "Базовая кухня с эргономичной планировкой. Вместительные ящики и удобные столешницы.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/kitchen3/600/400", alt: "Кухня Модель 2, фото 1" },
      { src: "https://picsum.photos/seed/kitchen4/600/400", alt: "Кухня Модель 2, фото 2" },
    ],
    category: "Кухня",
    title: "Кухня Про",
    price: "59 800₽",
    description: "Профессиональная кухня для гурманов. Усиленные конструкции и премиальные покрытия.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/kitchen5/600/400", alt: "Кухня Модель 3, фото 1" },
      { src: "https://picsum.photos/seed/kitchen6/600/400", alt: "Кухня Модель 3, фото 2" },
    ],
    category: "Кухня",
    title: "Кухня Мини",
    price: "27 400₽",
    description: "Компактная кухня для малогабаритных помещений. Максимум функциональности при минимуме места.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/kitchen7/600/400", alt: "Кухня Модель 4, фото 1" },
      { src: "https://picsum.photos/seed/kitchen8/600/400", alt: "Кухня Модель 4, фото 2" },
    ],
    category: "Кухня",
    title: "Кухня Лофт",
    price: "51 600₽",
    description: "Кухня в индустриальном стиле с металлическими элементами. Для современных интерьеров.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/kitchen9/600/400", alt: "Кухня Модель 5, фото 1" },
      { src: "https://picsum.photos/seed/kitchen10/600/400", alt: "Кухня Модель 5, фото 2" },
    ],
    category: "Кухня",
    title: "Кухня Классика",
    price: "48 900₽",
    description: "Традиционная кухня с резными фасадами. Элегантность и функциональность.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/kitchen11/600/400", alt: "Кухня Модель 6, фото 1" },
      { src: "https://picsum.photos/seed/kitchen12/600/400", alt: "Кухня Модель 6, фото 2" },
    ],
    category: "Кухня",
    title: "Кухня Смарт",
    price: "63 200₽",
    description: "Умная кухня с встроенной техникой и системами хранения. Максимум технологий.",
  },

  // Ванная (6 товаров)
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/bath1/600/400", alt: "Ванная «Комфорт Плюс», фото 1" },
      { src: "https://picsum.photos/seed/bath2/600/400", alt: "Ванная «Комфорт Плюс», фото 2" },
    ],
    category: "Ванная",
    title: "Ванная «Комфорт Плюс»",
    price: "28 500₽",
    description:
      "Комплект для ванной комнаты с вместительными шкафами и зеркалами. Практичное решение с продуманной эргономикой.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/bath3/600/400", alt: "Ванная «Люкс», фото 1" },
      { src: "https://picsum.photos/seed/bath4/600/400", alt: "Ванная «Люкс», фото 2" },
    ],
    category: "Ванная",
    title: "Ванная «Люкс»",
    price: "47 300₽",
    description:
      "Премиальный комплект с мраморной столешницей и фурнитурой золотого цвета. Для ценителей роскошного дизайна.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/bath5/600/400", alt: "Ванная «Мини», фото 1" },
      { src: "https://picsum.photos/seed/bath6/600/400", alt: "Ванная «Мини», фото 2" },
    ],
    category: "Ванная",
    title: "Ванная «Мини»",
    price: "19 800₽",
    description: "Компактный набор для малогабаритных ванных. Оптимизированное хранение при скромных габаритах.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/bath7/600/400", alt: "Ванная «Эко», фото 1" },
      { src: "https://picsum.photos/seed/bath8/600/400", alt: "Ванная «Эко», фото 2" },
    ],
    category: "Ванная",
    title: "Ванная «Эко»",
    price: "32 400₽",
    description:
      "Набор из экологичных материалов: массив дерева и натуральное покрытие. Для здорового микроклимата в доме.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/bath9/600/400", alt: "Ванная «Модерн», фото 1" },
      { src: "https://picsum.photos/seed/bath10/600/400", alt: "Ванная «Модерн», фото 2" },
    ],
    category: "Ванная",
    title: "Ванная «Модерн»",
    price: "38 700₽",
    description: "Современный дизайн с гладкими фасадами и скрытой системой хранения. Минимализм и функциональность.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/bath9/600/400", alt: "Ванная «Модерн», фото 1" },
      { src: "https://picsum.photos/seed/bath10/600/400", alt: "Ванная «Модерн», фото 2" },
    ],
    category: "Ванная",
    title: "Ванная «Модерн»",
    price: "38 700₽",
    description: "Современный дизайн с гладкими фасадами и скрытой системой хранения. Минимализм и функциональность.",
  },

  // Санузел (6 товаров)
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/toilet1/600/400", alt: "Санузел «Стандарт», фото 1" },
      { src: "https://picsum.photos/seed/toilet2/600/400", alt: "Санузел «Стандарт», фото 2" },
    ],
    category: "Санузел",
    title: "Санузел «Стандарт»",
    price: "18 500₽",
    description:
      "Базовый комплект для санузла: компактная тумба под раковину и навесной шкаф. Практичное решение для типовых помещений.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/toilet3/600/400", alt: "Санузел «Премиум», фото 1" },
      { src: "https://picsum.photos/seed/toilet4/600/400", alt: "Санузел «Премиум», фото 2" },
    ],
    category: "Санузел",
    title: "Санузел «Премиум»",
    price: "34 900₽",
    description:
      "Комплект премиум‑класса с зеркальным шкафом и подсветкой. Влагостойкие материалы и современная фурнитура.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/toilet5/600/400", alt: "Санузел «Мини», фото 1" },
      { src: "https://picsum.photos/seed/toilet6/600/400", alt: "Санузел «Мини», фото 2" },
    ],
    category: "Санузел",
    title: "Санузел «Мини»",
    price: "14 200₽",
    description:
      "Ультракомпактный набор для маленьких санузлов. Минималистичный дизайн и максимум функциональности при малой площади.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/toilet7/600/400", alt: "Санузел «Лофт», фото 1" },
      { src: "https://picsum.photos/seed/toilet8/600/400", alt: "Санузел «Лофт», фото 2" },
    ],
    category: "Санузел",
    title: "Санузел «Лофт»",
    price: "29 700₽",
    description:
      "Дизайн в стиле лофт: металлические акценты, фактурные поверхности. Для современных интерьеров с индустриальными элементами.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/toilet9/600/400", alt: "Санузел «Эко», фото 1" },
      { src: "https://picsum.photos/seed/toilet10/600/400", alt: "Санузел «Эко», фото 2" },
    ],
    category: "Санузел",
    title: "Санузел «Эко»",
    price: "26 300₽",
    description:
      "Экологичные материалы: бамбук и переработанное стекло. Безопасное решение для здоровья и окружающей среды.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/toilet11/600/400", alt: "Санузел «Современный», фото 1" },
      { src: "https://picsum.photos/seed/toilet12/600/400", alt: "Санузел «Современный», фото 2" },
    ],
    category: "Санузел",
    title: "Санузел «Современный»",
    price: "31 800₽",
    description:
      "Лаконичный дизайн с гладкими фасадами и скрытыми ручками. Умное хранение и эргономичная организация пространства.",
  },

  // Шкафы (6 товаров)
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/wardrobe1/600/400", alt: "Шкаф «Классика», фото 1" },
      { src: "https://picsum.photos/seed/wardrobe2/600/400", alt: "Шкаф «Классика», фото 2" },
    ],
    category: "Шкафы",
    title: "Шкаф «Классика»",
    price: "42 500₽",
    description:
      "Традиционный шкаф с резными фасадами и зеркальными дверцами. Вместительное хранение в элегантном исполнении.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/wardrobe3/600/400", alt: "Шкаф «Комфорт», фото 1" },
      { src: "https://picsum.photos/seed/wardrobe4/600/400", alt: "Шкаф «Комфорт», фото 2" },
    ],
    category: "Шкафы",
    title: "Шкаф «Комфорт»",
    price: "36 800₽",
    description:
      "Универсальный шкаф с комбинированными секциями: полки, штанги и выдвижные ящики. Оптимальное решение для повседневной эксплуатации.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/wardrobe5/600/400", alt: "Шкаф-купе «Стиль», фото 1" },
      { src: "https://picsum.photos/seed/wardrobe6/600/400", alt: "Шкаф-купе «Стиль», фото 2" },
    ],
    category: "Шкафы",
    title: "Шкаф-купе «Стиль»",
    price: "54 200₽",
    description:
      "Современный шкаф-купе с раздвижными дверями и зеркальными панелями. Экономит пространство и визуально расширяет комнату.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/wardrobe7/600/400", alt: "Шкаф «Мини», фото 1" },
      { src: "https://picsum.photos/seed/wardrobe8/600/400", alt: "Шкаф «Мини», фото 2" },
    ],
    category: "Шкафы",
    title: "Шкаф «Мини»",
    price: "24 900₽",
    description:
      "Компактный шкаф для небольших помещений. Функциональные секции при скромных габаритах — идеально для малогабаритных квартир.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/wardrobe9/600/400", alt: "Шкаф «Премиум», фото 1" },
      { src: "https://picsum.photos/seed/wardrobe10/600/400", alt: "Шкаф «Премиум», фото 2" },
    ],
    category: "Шкафы",
    title: "Шкаф «Премиум»",
    price: "68 700₽",
    description:
      "Элитный шкаф из массива дуба с ручной отделкой. Фурнитура премиум‑класса и индивидуальная подгонка деталей.",
  },
  {
    id: uuidv4(),
    images: [
      { src: "https://picsum.photos/seed/wardrobe11/600/400", alt: "Шкаф «Модерн», фото 1" },
      { src: "https://picsum.photos/seed/wardrobe12/600/400", alt: "Шкаф «Модерн», фото 2" },
    ],
    category: "Шкафы",
    title: "Шкаф «Модерн»",
    price: "49 300₽",
    description:
      "Лаконичный дизайн с гладкими фасадами и скрытой фурнитурой. Минималистичное решение для современных интерьеров.",
  },
];
