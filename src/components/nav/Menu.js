import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Menu = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate()

  const handelClick = ()=>{
    setAuth({...auth,user: null,token:""});
    localStorage.removeItem("auth");
    navigate("/login");
  }

  return (
    <>
      <ul
        style={{ height: "50px" }}
        className="nav d-flex justify-content-center shadow-sm mb-2 bg-dark"
      >
        <li className="nav-item">
          <NavLink to="/" className="nav-link text-light">
            HOME
          </NavLink>
        </li>

        {!auth?.user ? (
          <>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link text-light">
                LOGIN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className="nav-link text-light">
                REGISTER
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
                <Link onClick={handelClick} className="nav-link text-light">LOGOUT</Link>
            </li>
          </>
        )}
      </ul>
    </>
  );
};

export default Menu;
