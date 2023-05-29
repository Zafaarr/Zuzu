import "./Empty_module.scss";
import empty from "../imgs/Empty.png";
import { Link } from "react-router-dom";

export default function EmptyKorzina() {
  return (
    <div className="emptyKorzina">
      <div className="emptyKorzina__container">
        <img src={empty} alt="empty" />
        <div className="empty__paragraph">
          <h1>В вашей корзине пока пусто</h1>
          <p>Тут появятся товары, которые вы закажете</p>
        </div>
        <Link to="/">
        <button>Вернуться в меню</button>
        </Link>
      </div>
    </div>
  );
}
