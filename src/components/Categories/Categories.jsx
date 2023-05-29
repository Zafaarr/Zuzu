import { Link } from "react-router-dom";
import "./Categories_module.scss";

export function Categories() {
  return (
    <div className="categories">
      <div className="categories__container">
        <div className="catagory">Пицца</div>
        <div className="catagory">Паста</div>
        <div to="Салаты" className="catagory">
          Салаты
        </div>
        <div className="catagory">Напитки</div>
        <div className="catagory">Синнамон роллы</div>
        <div className="catagory">Гарниры</div>
        <div className="catagory">Соусы</div>
      </div>
    </div>
  );
}
