import style from "./filters.module.css";
import type { TCategory } from "../../types.ts";

interface IFiltersProps {
  selectedCategories: TCategory[];
  setSelectedCategories: (categories: TCategory[]) => void;
  categories: TCategory[];
}

const Filters = (props: IFiltersProps) => {
  // Выбранные категории
  const { selectedCategories, setSelectedCategories, categories } = props;

  // Обработчик изменения чекбокса. Удаляет из массива категорию, если она там есть, добавляет, если её там нет.
  const handleChangeCheckbox = (category: TCategory) => {
    // Вычисляем новый массив категорий. Если категория уже выбрана — удаляем, иначе добавляем.
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];

    // Передаем готовый массив в setSelectedCategories
    setSelectedCategories(newCategories);
  };

  return (
    <div className={style.filters}>
      <h2 className={style.title}>Категории</h2>
      <ul className={style.list}>
        <li>
          <label className={style.label}>
            <input
              className={style.input}
              type="checkbox"
              checked={selectedCategories.length === 0}
              onChange={() => setSelectedCategories([])}
            />
            <span className={style.checkmark} />
            Все категории
          </label>
        </li>

        {categories.map((category) => (
          <li key={category}>
            <label className={style.label}>
              <input
                className={style.input}
                type="checkbox"
                aria-label={`Категория: ${category}`}
                checked={selectedCategories.includes(category)}
                onChange={() => handleChangeCheckbox(category)}
              />
              <span className={style.checkmark} />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
