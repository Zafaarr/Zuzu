import "./Products_module.scss";
import { useEffect, useState } from "react";
import ModalItem from "../Modal/Modal";
import { Button, Modal } from "@mui/material";
import axios from "axios";

export default function Products() {
  const [currentProduct, setProduct] = useState([]);
  const [openModalId, setOpenModalId] = useState(null);
  const handleClose = () => setOpenModalId(null);

  // const button = {
  //   cursor: "pointer",
  //   backgroundColor: "#961e1e",
  //   // padding: "8px 15px",
  //   fontWeight: 500,
  //   fontSize: "14px",
  //   lineHeight: "20px",
  //   textAlign: "center",
  //   background: "#f5f5f5",
  //   borderRadius: "34px",
  //   // marginLeft: "10px",
  // };

  // const handleOpen = (v) => {
  //   setOpen(true);
  //   setProduct(v);
  // };

  const handleOpen = (productId) => {
    setOpenModalId(productId);
  };

  // const data = "https://fakestoreapi.com/products";

  const data = "https://64787ea6362560649a2de4b0.mockapi.io/zuzu/products";

  useEffect(() => {
    axios
      .get(data)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  const formatCategories = (data) => {
    const categories = data.reduce(
      (total, el) =>
        total.includes(el.category) ? total : [...total, el.category],
      []
    );
    return categories.map((category) => {
      return {
        category,
        products: data.filter((e) => e.category === category),
      };
    });
  };

  const formattedData = formatCategories(currentProduct);

  return (
    <div className="products">
      {formattedData.map((item) => (
        <div key={item.category}>
          <div className="products__title">{item.category}</div>
          <div className="products__container">
            {item.products.map((v) => (
              <div key={v.id} className="product__card">
                <div className="about__product">
                  <div className="imgContainer">
                    <img src={v.image} alt="img" />
                  </div>
                  <div className="product__name">{v.title}</div>
                  <div className="product__ingridients">{v.description}</div>
                </div>
                <div className="product__prices">
                  <div className="product__price">От {v.price} сумов</div>
                  <div
                    className="product__choose"
                    onClick={() => handleOpen(v.id)}
                  >
                    Выбрать
                  </div>
                  <Modal
                    open={openModalId == v.id}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <ModalItem
                      currentProduct={v}
                      setOpenModalId={setOpenModalId}
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
