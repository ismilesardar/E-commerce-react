import React from "react";
import { useNavigate } from "react-router-dom";
import Jumbotron from "../components/card/Jumbotron";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";

const Cart = () => {
  //context
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  //hook
  const navigate = useNavigate();

  return (
    <>
      <Jumbotron
        title={auth?.token && auth?.user?.name}
        subTitle={
          cart?.length
            ? `You have ${cart?.length} item it the cart. ${
                auth?.token ? "" : "Please login to checkout"
              }`
            : "Your Cart is Empty"
        }
      />
    </>
  );
};

export default Cart;
