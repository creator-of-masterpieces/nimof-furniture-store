import { v4 as uuidv4 } from "uuid";

export interface IImage {
  src: string;
  alt: string;
}

interface IProducts {
  id: string;
  images: IImage[];
  title: string;
  description: string;
  price: string;
}

export const products: IProducts[] = [
  {
    id: uuidv4(),
    images: [
      {
        src: "/src/assets/images/living-room.jpg",
        alt: "Фото гостиной первое",
      },
      { src: "/src/assets/images/kitchen.webp", alt: "Фото гостиной второе" },
    ],
    title: "Гостиная Welcome",
    price: "39 990₽",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto asperiores consequatur esse expedita magni quae quaerat quas recusandae voluptatem. Accusamus eligendi est nemo obcaecati quam unde veniam! Illo, minus.",
  },
  {
    id: uuidv4(),
    images: [
      {
        src: "/src/assets/images/living-room.jpg",
        alt: "Фото гостиной первое",
      },
      { src: "/src/assets/images/kitchen.webp", alt: "Фото гостиной второе" },
    ],
    title: "Гостиная Welcome",
    price: "39 990₽",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto asperiores consequatur esse expedita magni quae quaerat quas recusandae voluptatem. Accusamus eligendi est nemo obcaecati quam unde veniam! Illo, minus.",
  },
  {
    id: uuidv4(),
    images: [
      {
        src: "/src/assets/images/living-room.jpg",
        alt: "Фото гостиной первое",
      },
      { src: "/src/assets/images/kitchen.webp", alt: "Фото гостиной второе" },
    ],
    title: "Гостиная Welcome",
    price: "39 990₽",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto asperiores consequatur esse expedita magni quae quaerat quas recusandae voluptatem. Accusamus eligendi est nemo obcaecati quam unde veniam! Illo, minus.",
  },
  {
    id: uuidv4(),
    images: [
      {
        src: "/src/assets/images/living-room.jpg",
        alt: "Фото гостиной первое",
      },
      { src: "/src/assets/images/kitchen.webp", alt: "Фото гостиной второе" },
    ],
    title: "Гостиная Welcome",
    price: "39 990₽",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto asperiores consequatur esse expedita magni quae quaerat quas recusandae voluptatem. Accusamus eligendi est nemo obcaecati quam unde veniam! Illo, minus.",
  },
  {
    id: uuidv4(),
    images: [
      {
        src: "/src/assets/images/living-room.jpg",
        alt: "Фото гостиной первое",
      },
      { src: "/src/assets/images/kitchen.webp", alt: "Фото гостиной второе" },
    ],
    title: "Гостиная Welcome",
    price: "39 990₽",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto asperiores consequatur esse expedita magni quae quaerat quas recusandae voluptatem. Accusamus eligendi est nemo obcaecati quam unde veniam! Illo, minus.",
  },
  {
    id: uuidv4(),
    images: [
      {
        src: "/src/assets/images/living-room.jpg",
        alt: "Фото гостиной первое",
      },
      { src: "/src/assets/images/kitchen.webp", alt: "Фото гостиной второе" },
    ],
    title: "Гостиная Welcome",
    price: "39 990₽",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci architecto asperiores consequatur esse expedita magni quae quaerat quas recusandae voluptatem. Accusamus eligendi est nemo obcaecati quam unde veniam! Illo, minus.",
  },
];
