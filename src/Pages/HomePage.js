import React from "react";
import Products from "../Components/Products";
import heroImage from "../Images/HeroImage.png";

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6 d-flex flex-column my-4 order-2 order-sm-1">
            <h5 className="lh-1" style={{ color: "#a27ee0" }}>
              Want to buy Something
            </h5>
            <h1 className="fw-bold" style={{ color: "#fc5e2e" }}>
              We are the shopping Giants
            </h1>
            <p className="" style={{ maxWidth: "400px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda labore, vel possimus adipisci dignissimos animi quod
              iure fuga illo debitis obcaecati? Perferendis, amet illo iusto
              iure libero veniam fugit, facere inventore pariatur cumque,
              blanditiis neque dignissimos impedit quibusdam obcaecati debitis.
            </p>
            <button
              className="btn text-light fw-semibold mt-3"
              style={{ background: "#fc5e2d", maxWidth: "130px" }}
            >
              Shop Now
            </button>
          </div>
          <div className="col-md-6 order-1 order-sm-2">
            <img src={heroImage} alt="" width="100%" />
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
