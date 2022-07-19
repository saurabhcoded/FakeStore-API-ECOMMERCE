import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Product = (props) => {
  const setCart = useContext(CartContext);
  const cart = useContext(CartContext);
  const buy = (e, id, title, price, img) => {
    e.preventDefault();
    let _cart = { ...cart };
    if (_cart.items[id]) {
      // _cart.items[id].qty = _cart.items[id].qty + 1;
    } else {
      _cart.items[id] = {};
      // _cart.items[id].qty = 1;
    }
    _cart.totalItems = _cart.totalItems + 1;
    console.log(_cart);
  };

  return (
    <Link
      to={`/product/${props.keyid}`}
      style={{ color: "inherit", textDecoration: "inherit" }}
    >
      <div className="m-3 product px-4 py-2 shadow-sm">
        <div className="d-flex flex-column" style={{ maxWidth: "200px" }}>
          <div
            className="d-flex align-items-center"
            style={{ width: "200px", height: "500px", maxHeight: "250px" }}
          >
            <img
              src={props.image}
              alt=""
              className="d-block"
              style={{
                objectFite: "cover",
                maxWidth: "100%",
                maxHeight: "100%",
                margin: "auto",
              }}
            />
          </div>
          <div
            className="d-flex flex-column justify-content-between"
            style={{ minHeight: "220px" }}
          >
            <div className="details">
              <h6 className="fw-bold mt-3">{props.title}</h6>
              <h6 className="lh-lg">
                <span className="bg-secondary py-1 px-3 bg-opacity-25 rounded-pill d-inline-block">
                  {props.category}
                </span>
                <span className="bg-secondary px-3 py-1 bg-opacity-25 me-3 rounded-pill d-inline-block my-1">
                  {props.rating}
                  <i className="bi bi-star-fill text-warning me-3"></i>
                  {props.review} reviews
                </span>
              </h6>
            </div>
            <div className="d-flex justify-content-between align-items-baseline">
              <h5 className="fw">$ {props.price}</h5>
              <button
                className="btn text-white"
                style={{ background: "#7946d3" }}
                onClick={(e) => {
                  buy(e, props.keyid, props.title, props.price, props.image);
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
