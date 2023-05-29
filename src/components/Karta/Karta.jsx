import { NavLink } from "react-router-dom";
import style from "./Karta.module.scss";

export default function Karta() {
  const linkClass = ({ isActive }) =>
    isActive ? `${style.karta__button} ${style.active}` : style.karta__button;
  return (
    <div className={style.karta__container}>
      <div className={style.karta}>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8812171674276!2d69.31002797525379!3d41.311447600703374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5620c50b5e3%3A0xd8bc0bd6d5194a6a!2sZuzu%20pizz!5e0!3m2!1sru!2s!4v1685182036758!5m2!1sru!2s"
            width="100%"
            height="688"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={style.karta__buttons}>
          <NavLink to="/branches" className={linkClass}>
            Список
          </NavLink>
          <NavLink to="/map" className={linkClass}>
            Карта
          </NavLink>
        </div>
      </div>
    </div>
  );
}
