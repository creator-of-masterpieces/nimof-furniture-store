// Изображение товара
export interface IImage {
  src: string;
  alt: string;
}

// Информация о товаре
export interface IProduct {
  id: string;
  images: IImage[];
  category: TCategory;
  title: string;
  description: string;
  price: string;
}

// Список категорий товаров
export type TCategory = "Гостиная" | "Кухня" | "Ванная" | "Санузел" | "Шкафы";
