import { useSelector } from "react-redux";
import "./VashZakaz_module.scss";

export function VashZakaz() {
  const zuzuFromRedux = useSelector((state) => state.zuzu);

  const itemCount = zuzuFromRedux.reduce((total, el) => {
    return total + el.count + "x " + " " + el.title + " ";
  }, 0);

  const totalSum = zuzuFromRedux.reduce((total, el) => {
    return total + el.price * el.count;
  }, 0);

  return (
    <>
      <div className="vash__zakaz">
        <div className="order__item">
          <div className="itemCount">{itemCount + " "} </div>
          <div>
            {zuzuFromRedux.map((item) => (
              <div className="itemPrice">
                {item.count * item.price + " cум "}{" "}
              </div>
            ))}
          </div>
        </div>
        <div className="dostavka">
          Доставка <span>0 сум</span>
        </div>
        <div className="total">
          Итого <div>{totalSum + "  сум"}</div>
        </div>
      </div>
    </>
  );
}
