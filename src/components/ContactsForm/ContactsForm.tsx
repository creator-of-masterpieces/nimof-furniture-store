import { useState } from "react";
import style from "../../pages/ContactsPage/contactsPage.module.css";
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
      <div>
        <label htmlFor="nameId">Ваше имя</label>
        <input id={"nameId"} name={"name"} type="text" onChange={changeHandler} required />
      </div>

      <div>
        <label htmlFor="phoneId">Телефон</label>
        <input id={"phoneId"} name={"phone"} type="tel" onChange={changeHandler} required />
      </div>

      <div>
        <label htmlFor="emailId">Email</label>
        <input id={"emailId"} name={"email"} type="email" onChange={changeHandler} />
      </div>
    </form>
  );
};

export default ContactsForm;
