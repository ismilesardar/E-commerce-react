import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
import useCategory from "../../hooks/useCategory";

const Menu = () => {
  //custom hook
  const categories = useCategory();
  //context api
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handelLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <>
      <ul
        style={{ height: "50px" }}
        className="nav d-flex justify-content-end shadow-sm mb-2 "
      >
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            HOME
          </NavLink>
        </li>

        <div className="dropdown">
          <li>
            <NavLink  className="nav-link pointer dropdown-toggle"
              data-bs-toggle="dropdown">
            CATEGORIES
            </NavLink>
            <ul className="dropdown-menu"
              style={{overflow: "scroll" }}>
                <li>
                  <NavLink className="nav-link" to="/categories">
                  All Categories
                  </NavLink>
                </li>
                {categories?.map((ele)=>(
                  <li key={ele._id} >
                    <NavLink className="nav-link" to={`/category/${ele.slug}`}>{ele.name}</NavLink>
                  </li>
                ))}
            </ul>
          </li>
        </div>

        {!auth?.user ? (
          <>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                LOGIN
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className="nav-link">
                REGISTER
              </NavLink>
            </li>
          </>
        ) : (
          <div className="dropdown">
            <li>
              <NavLink
                className="nav-link pointer dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                {auth?.user?.name?.toUpperCase()}
              </NavLink>

              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="nav-link"
                    to={`/dashboard/${
                      auth?.user?.role === 1 ? "admin" : "user"
                    }`}
                  >
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item pointer">
                  <NavLink onClick={handelLogout} className="nav-link text-black">
                    Logout
                  </NavLink>
                </li>
              </ul>
            </li>
          </div>
        )}
      </ul>
    </>
  );
};

export default Menu;
