import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import loading from "../Images/loading.png";

const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [check, setCheck] = useState(false);
  useEffect(() => {
    Axios.get(`https://fakestoreapi.com/products/${params.id}`).then((res) => {
      setProduct(res.data);
      console.log(res.data);
      setCheck(true);
    });
  }, [params.id]);
  console.log(params.id);
  if (check) {
    return (
      <div
        className="container mx-auto mt-5 row p-5 align-items-center shadow"
        style={{ minHeight: "400px" }}
      >
        <div className="col-md-5 border-1">
          <img src={product.image} alt="" width="80%" />
        </div>
        <div className="col-md-7">
          <div className="d-flex flex-column justify-content-around h-100">
            <div className="details">
              <h2 className="fw-bold">{product.title}</h2>
              <h6 className="lh-lg">
                <span className="bg-secondary py-1 px-3 bg-opacity-25 rounded-pill d-inline-block">
                  {product.category}
                </span>
                <span className="bg-secondary mx-2 px-3 py-1 bg-opacity-25 me-3 rounded-pill d-inline-block my-1">
                  {product.rating.rate}
                  <i className="bi bi-star-fill text-warning me-3"></i>
                  {product.rating.count} reviews
                </span>
              </h6>
              <h5 className="mt-3">{product.description}</h5>
            </div>
            <div className="d-flex justify-content-between align-items-baseline">
              <h5 className="fw">$ {product.price}</h5>
              <button
                className="btn text-white"
                style={{ background: "#7946d3" }}
              >
                Buy Now
              </button>
            </div>
          </div>
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

export default ProductPage;
