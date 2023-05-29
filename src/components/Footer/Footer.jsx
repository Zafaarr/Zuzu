import instagram from "../imgs/instagram.png";
import facebook from "../imgs/Facebook.png";
import telegram from "../imgs/Telegram.png";
import footerLogo from "../imgs/FooterLogo.png";
import { Link, NavLink } from "react-router-dom";
import style from "./Footer.module.scss";

export function Footer() {
  const linkClass = ({ isActive }) =>
    isActive ? `${style.footer__link} ${style.active}` : style.footer__link;

  return (
    <footer>
      <div className={style.footer__container}>
        <div className={style.footer__top}>
          <Link to="/" className={style.footer__logo}>
            <img src={footerLogo} alt="" />
          </Link>
          <ul className={style.footer__menu}>
            <li className={style.footer__link}>
              <NavLink to="/branches" className={linkClass}>
                Филиалы
              </NavLink>
            </li>
            <li className={style.footer__link}>
              <NavLink to="/we" className={linkClass}>
                О нас
              </NavLink>
            </li>
            <li className={style.footer__link}>
              <NavLink to="/contacts" className={linkClass}>
                Контакты
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={style.footer__center}></div>
        <div className={style.footer__bottom}>
          <p>©Zuzu 2005 - 2021 All rights reserved</p> 
          <div className={style.footer__icons}>
            <Link to="https://www.instagram.com/zuzupizzauz/">
              <img src={instagram} alt="instagram" />
            </Link>
            <Link to="https://www.facebook.com/zuzupizza/">
              <img src={facebook} alt="facebook" />
            </Link>
            <Link to="https://t.me/zuzupizzabot">
              <img src={telegram} alt="telegram" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
