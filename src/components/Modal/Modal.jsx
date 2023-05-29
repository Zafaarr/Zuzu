import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addOrder } from "../../Redux/ZuzuRedux";

export default function ModalItem({ currentProduct, setOpen }) {
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

  const style = {
    // display: "flex",
    // flexDiraction: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 802,
    height: 326,
    bgcolor: "background.paper",
    border: "2px solid #fafafa",
    borderRadius: "12px",
    p: 3,
    outline: 1,
  };

  const main = {
    width: 428,
    height: 124,
    marginLeft: "50px",
  };

  const sty = {
    display: "flex",
    alignItems: "center",
    marginTop: "220px",
    marginLeft: "-420px",
    gap: "15px",
  };

  const styl = {
    p: 2,
    gap: "46px",
    width: 260,
    height: 48,
    background: "#EC8D1E",
    borderRadius: "100px",
    cursor: "pointer",
    color: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const minus = {
    cursor: "pointer",
    fontSize: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    background: "#F5F5F5",
    borderRadius: "100px",
  };

  const number = {
    cursor: "pointer",
    fontSize: "25px",
  };

  const plus = {
    cursor: "pointer",
    fontSize: "25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    background: "#F5F5F5",
    borderRadius: "100px",
  };

  const title = {
    fontWeight: 700,
    fontSize: "32px",
    lineHeight: "40px",
  };

  const subtitle = {
    width: 428,
    height: 72,
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "24px",
    color: "#808080",
  };

  const addToOrders = (price) => {
    const newOrder = {
      ...currentProduct,
      totalPrice: price * count,
      count,
      idi: "a" + Date.now(),
    };
    dispatch(addOrder(newOrder));
    setOpen(false);
  };

  return (
    <Box sx={style}>
      <div className="modal" key={currentProduct.idi}>
        <Typography>{<img src={currentProduct.img} alt="abc" />}</Typography>
        <Typography sx={main}>
          <Typography sx={title} variant="p">
            {currentProduct.name}
          </Typography>
          <br></br>
          <br></br>
          <Typography variant="p" sx={subtitle}>
            {currentProduct.comment}
          </Typography>
        </Typography>
        <Typography sx={sty}>
          <Typography sx={minus} onClick={minusButton}>
            -
          </Typography>
          <Typography sx={number}>{count}</Typography>
          <Typography sx={plus} onClick={plusButton}>
            +
          </Typography>
          <Typography
            sx={styl}
            className="totalPrice"
            onClick={() => addToOrders(currentProduct.price)}
          >
            Добавить {currentProduct.price * count} сум
          </Typography>
        </Typography>
      </div>
    </Box>
  );
}
