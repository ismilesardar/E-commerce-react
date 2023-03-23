import React from "react";
import Jumbotron from "../../components/card/Jumbotron";
import UserMenu from "../../components/nav/UserMenu";
import { useAuth } from "../../context/auth";

const UsersOrders = () => {
  const [auth, setAuth] = useAuth();

  return (
    <>
      <Jumbotron title={`Hello ${auth?.user?.name}`} subTitle="Dashboard" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="p-3 mt-2 md-3 h4 bg-light">Orders</div>
            user Order history...
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersOrders;
