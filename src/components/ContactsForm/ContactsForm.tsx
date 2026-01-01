import { useState } from "react";
import style from "./contactsForm.module.css";
interface IFormData {
  name: string;
  email: string;
  phone: string;
}

const ContactsForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    email: "",
    phone: "",
  });

  // Обработчик изменения полей
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Обработчик отправки формы
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Отправленные данные: ${formData}`);
  };
  return (
    <form className={style.contactsForm} onSubmit={submitHandler}>
      <div className={style.formGroup}>
        <label htmlFor="nameId">Ваше имя</label>
        <input className={style.formInput} id={"nameId"} name={"name"} type="text" onChange={changeHandler} required />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="phoneId">Телефон</label>
        <input className={style.formInput} id={"phoneId"} name={"phone"} type="tel" onChange={changeHandler} required />
      </div>

      <div className={style.formGroup}>
        <label htmlFor="emailId">Email</label>
        <input className={style.formInput} id={"emailId"} name={"email"} type="email" onChange={changeHandler} />
      </div>

      <button className={style.submitButton} type={"submit"}>
        Отправить
      </button>
    </form>
  );
};

export default ContactsForm;
