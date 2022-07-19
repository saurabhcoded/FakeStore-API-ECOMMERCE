import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="text-light mt-5" style={{ background: "#6020bf" }}>
        <div className="container ">
          <div className="row">
            <div className="col-md-4 d-flex flex-column">
              <div className="text d-flex flex-column bg-secondary p-5 justify-content-evenly">
                <h2 className="fw-bold">eCommerce</h2>
                <h6>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia soluta id culpa veritatis laborum nobis doloribus
                  repellat praesentium harum rem!
                </h6>
                <h5 className="text-warning fw-bold mt-4">Follow us</h5>
                <div className="d-flex flex-wrap">
                  <i className="bi bi-facebook bg-white px-2 py-1 text-primary fs-3 rounded-3" />
                  <i className="bi bi-instagram bg-white px-2 py-1 text-primary fs-3 mx-3 rounded-3" />
                  <i className="bi bi-twitter bg-white px-2 py-1 text-info fs-3 rounded-3" />
                </div>
              </div>
              <h3 className="mt-3 mb-5">Best Ecommerce Website 2022</h3>
            </div>
            <div className="col-md-3 pt-5">
              <div className="d-flex flex-column">
                <div className="d-flex my-3">
                  <i className="bi bi-map fs-1 text-primary"></i>
                  <h5 className="ms-4">
                    Badarpur, New Delhi-110044,Delhi ,India
                  </h5>
                </div>
                <h5 className="text-center fw-bold">UseFul Links</h5>
                <ul>
                  <Link to="/">
                    <li>Home</li>
                  </Link>
                  <Link to="/">
                    <li>Electronics</li>
                  </Link>
                  <Link to="/">
                    <li>jewelery</li>
                  </Link>
                  <Link to="/">
                    <li>Men's Clothing</li>
                  </Link>
                  <Link to="/">
                    <li>Women's Clothing</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-md-5 pt-5">
              <div className="container p-4">
                <div className="d-flex">
                  <i className="bi bi-telephone-forward fs-1 text-primary"></i>
                  <h4 className="ms-4">+91 9310259192</h4>
                </div>
                <h5 className="fw-bold mt-2">Subscribe our New Launches</h5>
                <p className="w-75 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt exercitationem assumenda quisquam cum, quasi quo!
                </p>
                <form className="d-flex w-75">
                  <input
                    type="text"
                    className="form-control rounded-0 border-0 rounded-start"
                  />
                  <button className="btn btn-primary rounded-0 rounded-end">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="container-fluid bg-secondary pt-3 bg-opacity-50">
        <div className="container d-flex justify-content-between ">
          <p className="fw-semibold">
            copyright &copy; All Rights Reserved eCommerce
          </p>
          <ul>
            <li className="d-inline-block mx-2">Home</li>
            <li className="d-inline-block mx-2">Products</li>
            <li className="d-inline-block mx-2">About</li>
            <li className="d-inline-block mx-2">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
