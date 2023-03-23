import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useCart } from "../../context/cart";

const UserCartSidebar = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();

  const navigate = useNavigate();

  const cartTotal = () => {
    let total = 0;
    cart?.map((item) => (total += item["price"]));

    return total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="col-md-4 md-5">
      <h5>Your cart summary</h5>
      <h6>Total / Address / Payments</h6>
      <hr />
      <h6>Total : {cartTotal()}</h6>
      {auth?.user?.address ? (
        <>
          <div className="md-3">
            <h4>Delivery address :</h4>
            <h5>{auth?.user?.address}</h5>
          </div>
          <button
            className="btn btn-warning"
            onClick={() => navigate("/dashboard/user/profile")}
          >
            Update Address
          </button>
        </>
      ) : (
        <>
          <div className="md-3">
            {auth?.token ? (
              <button
                className="btn btn-warning"
                onClick={() => navigate("/dashboard/user/profile")}
              >
                Add delivery address
              </button>
            ) : (
              <button
                className="btn btn-warning"
                onClick={() =>
                  navigate("/login", {
                    state: "/cart",
                  })
                }
              >
                Login to checkout
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UserCartSidebar;
