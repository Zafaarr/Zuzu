import "./KorzinaItems_module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseAction,
  deleteAction,
  increaseAction,
} from "../../Redux/ZuzuRedux";

export function KorzinaItems() {
  const dispatch = useDispatch();
  const zuzuFromRedux = useSelector((state) => state.zuzu);

  const inrease = (idi) => {
    JSON.stringify(dispatch(increaseAction(idi)));
  };

  const decrease = (idi) => {
    JSON.stringify(dispatch(decreaseAction(idi)));
  };

  const deleteHandle = (idi) => {
    dispatch(deleteAction(idi));
  };

  return (
    <>
      {zuzuFromRedux.map((item) => (
        <div key={item.idi} className="korzinaItems">
          <div className="korzinaItems__container">
            <div className="zakaz__item">
              <img src={item.image} alt="abc" className="korzina__img" />
              <div>
                <div className="zakaz__name">{item.title}</div>
                <div className="zakaz__surname">{item.description}</div>
              </div>
            </div>
            <div className="zakaz__count">
              <div className="zakaz_price">
                {item.price} сум
              </div>
              <div onClick={() => decrease(item.idi)} className="zakaz__minus">
                -
              </div>
              <div className="zakaz__number">{item.count}</div>
              <div onClick={() => inrease(item.idi)} className="zakaz__plus">
                +
              </div>
              <div
                onClick={() => deleteHandle(item.idi)}
                className="zakaz__otmen"
              >
                x
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
