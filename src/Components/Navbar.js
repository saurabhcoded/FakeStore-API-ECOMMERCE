import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg "
        style={{ background: "#a27ee0" }}
      >
        <div className="container">
          <Link
            to="/"
            className="navbar-brand fs-4 fw-bold"
            style={{ color: "#ff8552" }}
          >
            eCommerce
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item fw-semibold fs-6 text-dark">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  style={{ color: "#faded3" }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item fw-semibold fs-6 text-dark">
                <Link
                  to="/products"
                  className="nav-link "
                  style={{ color: "#faded3" }}
                >
                  Products
                </Link>
              </li>
              <li>
                <form className="d-flex ms-4" role="search">
                  <input
                    className="form-control  border-0 rounded-0 rounded-start py-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-primary border-0 rounded-0 rounded-end"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <i className="bi bi-bag fs-4 text-light bg-primary bg-opacity-75 px-2 py-1 rounded-2"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
