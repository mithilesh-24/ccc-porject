import React, { useState } from "react";
import "../styles/Product.css";
import plant1 from "../assets/Product_Plant_1.png";
import plant2 from "../assets/Product_Plant_2.png";
import plant3 from "../assets/Product_Plant_3.png";
import plant4 from "../assets/Product_Plant_4.png";
import plant5 from "../assets/Product_Plant_5.png";
import plant6 from "../assets/Product_Plant_6.png";
import plant7 from "../assets/Product_Plant_7.png";
import plant8 from "../assets/Product_Plant_8.png";

const initialProducts = [
  { id: 1, name: "Cactus Plant", oldPrice: 10, price: 8, img: plant1, fav: true },
  { id: 2, name: "Cactus Plant", oldPrice: 10, price: 8, img: plant2, fav: false },
  { id: 3, name: "Cactus Plant", oldPrice: 10, price: 8, img: plant3, fav: false },
  { id: 4, name: "Cactus Plant", oldPrice: 10, price: 8, img: plant4, fav: false },
  { id: 5, name: "Cactus Plant", oldPrice: 10, price: 8, img: plant5, fav: false },
  { id: 6, name: "Cactus Plant", oldPrice: 10, price: 8, img: plant6, fav: false },
  { id: 7, name: "Cactus Plant", oldPrice: 10, price: 8, img: plant7, fav: false },
  { id: 8, name: "Cactus Plant", oldPrice: 10, price: 8, img: plant8, fav: false },
];

function Product() {
  const [products, setProducts] = useState(initialProducts);

  const toggleFav = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, fav: !item.fav } : item
      )
    );
  };

  return (
    <div className="product-container">
      <h2 className="section-title">What We Offer To You</h2>
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <div className="img-wrapper">
              <img src={item.img} alt={item.name} />
              <button
                onClick={() => toggleFav(item.id)}
                className={`fav-btn ${item.fav ? "active" : ""}`}
              >
                ♥
              </button>
            </div>
            <div className="product-info">
              <h3>{item.name}</h3>
              <div className="product-bottom">
                <p className="price">
                  <span className="old-price">${item.oldPrice}</span> <span className="new-price">${item.price}</span>
                </p>
                <button className={`buy-btn ${item.fav ? "fav-active" : ""}`}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;