import Axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import loading from "../Images/loading.png";

const Products = () => {
  const [products, setProducts] = useState({});
  const [check, setCheck] = useState(false);
  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products").then((Response) => {
      setProducts(Response.data);
      setCheck(true);
      console.log("data fetch");
    });
  }, []);

  if (check) {
    return (
      <div className="container">
        <h4 className="text-center fw-bold my-5" style={{ color: "#ff8552" }}>
          Products
        </h4>
        <div className="d-flex flex-wrap align-items-center justify-content-evenly">
          {products.map((products) => {
            return (
              <Product
                key={products.id}
                keyid={products.id}
                title={products.title}
                category={products.category}
                rating={products.rating.rate}
                review={products.rating.count}
                price={products.price}
                image={products.image}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="preloaderContainer">
        <div className="m-auto">
          <img
            src={loading}
            width="100%"
            className="preloader mb-3"
            alt="loadingImage"
          />
          <h3 className="fw-bold text-primary">Loading</h3>
        </div>
      </div>
    );
  }
};

export default Products;
