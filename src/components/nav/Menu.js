import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

const Menu = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handelClick = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <>
      <ul
        style={{ height: "50px" }}
        className="nav d-flex justify-content-center shadow-sm mb-2 "
      >
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            HOME
          </NavLink>
        </li>

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
              <Link
                className="nav-link pointer dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                {auth?.user?.name?.toUpperCase()}
              </Link>

              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="nav-link"
                    to={`/dashboard/${auth?.user?.role===1 ? "admin" : "user"
                      }`}
                  >
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item pointer">
                  <Link onClick={handelClick} className="nav-link text-black">
                    LOGOUT
                  </Link>
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
