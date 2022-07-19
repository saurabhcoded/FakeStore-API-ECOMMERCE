import axios from "axios";
import React from "react";
import { useEffect } from "react";
const Cart = () => {
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/carts`).then((Response) => {
      console.log(Response);
    });
  }, []);

  return <div></div>;
};

export default Cart;
