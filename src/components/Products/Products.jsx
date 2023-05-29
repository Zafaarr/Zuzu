import "./Products_module.scss";
import { useState } from "react";
import data from "../mock/data";
import ModalItem from "../Modal/Modal";
import { Button, Modal } from "@mui/material";

export default function Products() {
  const [open, setOpen] = useState(false);
  const [currentProduct, setProduct] = useState({});
  const handleClose = () => setOpen(false);

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
    marginLeft: "10px",
  };

  const handleOpen = (v) => {
    setOpen(true);
    setProduct(v);
  };

  return (
    <div className="products">
      {data.map((item) => (
        <div key={item.item}>
          <div className="products__title">{item.category}</div>
          <div className="products__container">
            {item.products.map((v) => (
              <div key={v.id} className="product__card">
                <div className="about__product">
                  <img src={v.img} alt="img" />
                  <div className="product__name">{v.name}</div>
                  <div className="product__ingridients">{v.comment}</div>
                </div>
                <div className="product__prices">
                  <div className="product__price"> От {v.price} сумов</div>
                  <Button sx={button} onClick={() => handleOpen(v)}>
                    Выбрать
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <ModalItem
                      currentProduct={currentProduct}
                      setOpen={setOpen}
                    />
                  </Modal>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
