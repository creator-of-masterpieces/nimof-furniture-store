import style from "./filters.module.css";

const Filters = () => {
  return (
    <div className={style.filters}>
      <h2 className={style.title}>Категории</h2>
      <ul className={style.list}>
        <li>
          <label className={style.label}>
            <input className={style.input} type="checkbox" />
            <span className={style.checkmark} />
            Все категории
          </label>
        </li>

        <li>
          <label className={style.label}>
            <input className={style.input} type="checkbox" />
            <span className={style.checkmark} />
            Гостиная
          </label>
        </li>

        <li>
          <label className={style.label}>
            <input className={style.input} type="checkbox" />
            <span className={style.checkmark} />
            Кухня
          </label>
        </li>

        <li>
          <label className={style.label}>
            <input className={style.input} type="checkbox" />
            <span className={style.checkmark} />
            Ванная комната
          </label>
        </li>

        <li>
          <label className={style.label}>
            <input className={style.input} type="checkbox" />
            <span className={style.checkmark} />
            Санузел
          </label>
        </li>

        <li>
          <label className={style.label}>
            <input className={style.input} type="checkbox" />
            <span className={style.checkmark} />
            Шкафы
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Filters;
