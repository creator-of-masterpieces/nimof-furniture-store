import { v4 as uuidv4 } from "uuid";

interface IProducts {
  id: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  price: string;
}

export const products: IProducts[] = [
  {
    id: uuidv4(),
    image: "/src/assets/images/living-room.jpg",
    alt: "Фото гостиной",
    title: "Гостиная Welcome",
    price: "39 990₽",
    description: "Описание гостиной",
  },
  {
    id: uuidv4(),
    image: "/src/assets/images/living-room.jpg",
    alt: "Фото гостиной",
    title: "Гостиная Welcome",
    price: "39 990₽",
    description: "Описание гостиной",
  },
  {
    id: uuidv4(),
    image: "/src/assets/images/living-room.jpg",
    alt: "Фото гостиной",
    title: "Гостиная Welcome",
    price: "39 990₽",
    description: "Описание гостиной",
  },
  {
    id: uuidv4(),
    image: "/src/assets/images/living-room.jpg",
    alt: "Фото гостиной",
    title: "Гостиная Welcome",
    price: "39 990₽",
    description: "Описание гостиной",
  },
  {
    id: uuidv4(),
    image: "/src/assets/images/living-room.jpg",
    alt: "Фото гостиной",
    title: "Гостиная Welcome",
    price: "39 990₽",
    description: "Описание гостиной",
  },
  {
    id: uuidv4(),
    image: "/src/assets/images/living-room.jpg",
    alt: "Фото гостиной",
    title: "Гостиная Welcome",
    price: "39 990₽",
    description: "Описание гостиной",
  },
];
