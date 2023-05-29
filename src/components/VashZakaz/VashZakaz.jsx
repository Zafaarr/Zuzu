import { useSelector } from "react-redux";
import "./VashZakaz_module.scss";

export function VashZakaz() {
  const zuzuFromRedux = useSelector((state) => state.zuzu);
  console.log("zuzuFromRedux", zuzuFromRedux);

  // const itemPrice = zuzuFromRedux.reduce((total, el) => {
  //   return total = el.count * el.price;
  // }, 0);

  const itemCount = zuzuFromRedux.reduce((total, el) => {
    return total + el.count + "x " + " " + el.name + "   ";
  }, 0);

  const totalSum = zuzuFromRedux.reduce((total, el) => {
    return total + el.price * el.count;
  }, 0);

  // let sum = [];

  // for(let i = 0; i <= zuzuFromRedux.length; i++) {
  //   const item = zuzuFromRedux[i];
  //   sum.push(<li key={item.idi}>{item.totalPrice}</li>)
  // }

  // console.log("sum", sum);

  return (
    <>
      <div className="vash__zakaz">
        <div className="order__item">
          <div className="itemCount">{ itemCount + " "} </div>
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
