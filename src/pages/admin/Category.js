import React from "react";
import Jumbotron from "../../components/card/Jumbotron";
import AdminMenu from "../../components/nav/AdminMenu";
import { useAuth } from "../../context/auth";

const AdminCategory = () => {
  //context
  const [auth, setAuth] = useAuth();

  return (
    <>
      <Jumbotron title={auth?.user?.name} subTitle="Admin Dashboard" />

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="p-3 mt-2 mb-2 h4 bg-light">Manage Categories</div>
            <h4>Create category form....</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCategory;
