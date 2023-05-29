import pizzas from "../mock/pizzaData";
import "./Pizzas_module.scss";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { addOrder } from "../../Redux/ZuzuRedux";
import { useDispatch } from "react-redux";

export default function Pizzas() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [currentProduct, setProduct] = useState({ id: "", quantity: 1 });
  const handleClose = () => setOpen(false);

  const style = {
    display: "flex",
    felxDiraction: "column",
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

  const button = {
    cursor: "pointer",
    backgroundColor: "#961e1e",
    padding: "8px 15px",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
    textAlign: "center",
    background: "#f5f5f5",
    borderRadius: "34px",
    marginLeft: "70px",
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


  const addToOrders = (currentProduct, count, price, comment, id) => {
    const newOrder = {
      currentProduct,
      comment,
      price,
      count: count,
      totalPrice: price * count,
      id,
    }
    dispatch(addOrder(newOrder))
    handleClose()
    console.log(newOrder);
  }

  const handleOpen = (id) => {
    setOpen(true);
    setProduct({ id: id, quantity: 1 });
  };

  return (
    <>
      <div className="products__title">Пицца</div>
      <div className="products__container">
        {pizzas.map((v) => (
          <div key={v.id} className="product__card">
            <div className="about__product">
              <img src={v.imgPizza} alt="ghjgh" />
              <div className="product__name">{v.name}</div>
              <div className="product__ingridients">{v.comment}</div>
            </div>
            <div className="product__prices">
              <div className="product__price">{v.price}</div>
              <Button sx={button} onClick={() => handleOpen(v.id)}> Выбрать </Button>
              <Modal  open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                  {pizzas.map((pizza) => {
                if (currentProduct.id === pizza.id) {
                  return (
                    <div className="modal" key={pizza.id}>
                      <Typography id="modal-modal-title" variant="img"><img src={pizza.imgPizza} alt="abc" /></Typography>
                      <Typography sx={main}>
                        <Typography id="modal-modal-title" sx={title} variant="p">{pizza.name}</Typography><br></br><br></br>
                        <Typography id="modal-modal-description" variant="p" sx={subtitle}>{pizza.comment}</Typography>
                      </Typography>
                      <Typography sx={sty} id="modal-modal-description">
                        <Typography sx={minus} onClick={() => setProduct({...currentProduct, quantity: currentProduct.quantity - 1 })}>-</Typography>
                        <Typography sx={number}>{currentProduct.quantity}</Typography>
                        <Typography sx={plus} onClick={() => setProduct({...currentProduct, quantity: currentProduct.quantity + 1})}>+</Typography>
                        <Typography  sx={styl} className="totalPrice" onClick={() => addToOrders(pizza.name, currentProduct.quantity, pizza.price, pizza.comment, pizza.id)} open={open}>Добавить {currentProduct.quantity * pizza.price}</Typography>
                      </Typography>
                    </div>)}
                    return null;
                  })}
                </Box>
              </Modal>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
