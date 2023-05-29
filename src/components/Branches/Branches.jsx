import style from "./Branches.module.scss";
import vector from "../imgs/Vector.png";
import { Link, NavLink } from "react-router-dom";
import branches from "../mock/branches";

export function Branches() {
  const linkClass = ({ isActive }) =>
    isActive
      ? `${style.branches__button} ${style.active}`
      : style.branches__button;
  return (
    <div className={style.branches}>
      <div className={style.branches__container}>
        <div className={style.branches__top}>
          <div className={style.branches__title}>Филиалы</div>
          <div className={style.branches__buttons}>
            <NavLink to="/branches" className={linkClass}>
              Список
            </NavLink>
            <NavLink to="/map" className={linkClass}>
              Карта
            </NavLink>
          </div>
        </div>
        <div className={style.branches__cards}>
          <Link to="/branches/:id" className={style.branches__card}>
            <div className={style.branches__location}>
              <div className={style.branch__name}>
                <p>Зузу пицца Magic city</p>
                <img className={style.vector1} src={vector} alt="vector" />
              </div>
              <div className={style.branch__address}>
                Magic City,ул. Бабура, 174, Ташкент, Узбекистан
              </div>
            </div>
            <div className={style.branch__hours}>
              <p>Часы работы</p>
              <h2>Ежедневно: 10:00-03:00</h2>
            </div>
          </Link>
          <Link to="/branches/:id" className={style.branches__card}>
            <div className={style.branches__location}>
              <div className={style.branch__name}>
                <p>Зузу пицца Универсам</p>
                <img className={style.vector2} src={vector} alt="vector" />
              </div>
              <div className={style.branch__address}>Махалля Акбаробод </div>
            </div>
            <div className={style.branch__hours}>
              <p>Часы работы</p>
              <h2>Ежедневно: 10:00-03:00</h2>
            </div>
          </Link>
          <Link to="/branches/:id" className={style.branches__card}>
            <div className={style.branches__location}>
              <div className={style.branch__name}>
                <p>Зузу пицца Parkent</p>
                <img className={style.vector1} src={vector} alt="vector" />
              </div>
              <div className={style.branch__address}>
                Magic City,ул. Бабура, 174, Ташкент, Узбекистан
              </div>
            </div>
            <div className={style.branch__hours}>
              <p>Часы работы</p>
              <h2>Ежедневно: 10:00-03:00</h2>
            </div>
          </Link>
          <Link to="/branches/:id" className={style.branches__card}>
            <div className={style.branches__location}>
              <div className={style.branch__name}>
                <p>Зузу пицца Мукумий</p>
                <img className={style.vector1} src={vector} alt="vector" />
              </div>
              <div className={style.branch__address}>
                Универсам, Окилота 11, Ташкент, Узбекистан
              </div>
            </div>
            <div className={style.branch__hours}>
              <p>Часы работы</p>
              <h2>Ежедневно: 10:00-03:00</h2>
            </div>
          </Link>
          <Link to="/branches/:id" className={style.branches__card}>
            <div className={style.branches__location}>
              <div className={style.branch__name}>
                <p>Зузу пицца Сергели</p>
                <img className={style.vector2} src={vector} alt="vector" />
              </div>
              <div className={style.branch__address}>
                Массив Сергели-VIIIА, 11{" "}
              </div>
            </div>
            <div className={style.branch__hours}>
              <p>Часы работы</p>
              <h2>Ежедневно: 10:00-03:00</h2>
            </div>
          </Link>
          {/* {branches.map((v, i, a) => (
            <Link to={v.id} className="branches__card">
              <div className="branches__location">
                <div className="branch__name">
                  <p>{v.name}</p>
                  <img className="vector1" src={vector} alt="vector" />
                </div>
                <div className="branch__address">
                  Magic City,ул. Бабура, 174, Ташкент, Узбекистан
                </div>
              </div>
              <div className="branch__hours">
                <p>Часы работы</p>
                <h2>Ежедневно: 10:00-03:00</h2>
              </div>
            </Link>
          ))} */}
        </div>
      </div>
    </div>
  );
}
