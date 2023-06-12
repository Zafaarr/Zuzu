import { useState } from "react";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addOrder } from "../../Redux/ZuzuRedux";
import css from "./Modal.module.scss";

export default function ModalItem({ currentProduct, setOpenModalId }) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  let minusButton = () => {
    if (count < 2) {
      return null;
    }
    return setCount(count - 1);
  };

  let plusButton = () => {
    setCount(count + 1);
  };

  const addToOrders = (price) => {
    const newOrder = {
      ...currentProduct,
      totalPrice: price * count,
      count,
      idi: "a" + Date.now(),
    };
    dispatch(addOrder(newOrder));
    setOpenModalId(false);
  };

  return (
    <>
      <Box className={css.style}>
        <div className={css.modal} key={currentProduct.idi}>
          <div className={css.modalImg}>
            {<img src={currentProduct.image} alt="abc" />}
          </div>
          <div className={css.main}>
            <div className={css.title} variant="p">
              {currentProduct.title}
            </div>
            <br></br>
            <br></br>
            <div variant="p" className={css.subtitle}>
              {currentProduct.description}
            </div>
            <div className={css.sty}>
              <div className={css.minus} onClick={minusButton}>
                -
              </div>
              <div className={css.number}>{count}</div>
              <div className={css.plus} onClick={plusButton}>
                +
              </div>
              <div
                className={css.styl}
                onClick={() => addToOrders(currentProduct.price)}
              >
                Добавить {Math.floor(currentProduct.price * count)} сум
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}
