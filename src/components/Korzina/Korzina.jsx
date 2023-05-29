import "./Korzina_module.scss";
import trash from "../imgs/Trash_Full.png";
import { KorzinaItems } from "../KorzinaItems/KorzinaItems";
import { VashZakaz } from "../VashZakaz/VashZakaz";
import { useDispatch, useSelector } from "react-redux";
import { clearAction } from "../../Redux/ZuzuRedux";
import EmptyKorzina from "../EmptyKorzina/EmptyKorzina";

export function Korzina() {
  const dispatch = useDispatch();

  const zuzuFromRedux = useSelector((state) => state.zuzu);

  const clear = () => {
    dispatch(clearAction());
  };

  return (
    <>
      {zuzuFromRedux.length !== 0 ? (
        <div className="korzina">
          <div className="korzina__container">
            <div className="korzina__left">
              <div className="korzina__left__top">
                <div className="korzina__left__title">Корзина</div>
                <div onClick={clear} className="korzina__left__icon">
                  <img src={trash} alt="trash" />
                  Очистить корзину
                </div>
              </div>
              <KorzinaItems />
            </div>
            <div className="korzina__right">
              <div className="korzina__title">Ваш заказ</div>
              <VashZakaz />
              <button className="korzina__button">К оформление заказа</button>
            </div>
          </div>
        </div>
      ) : (
        <EmptyKorzina />
      )}
    </>
  );
}
