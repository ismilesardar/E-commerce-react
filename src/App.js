import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Menu from "./components/nav/Menu";
import PrivateRoute from "./components/routes/PrivateRoute";
import DashBoard from "./pages/user/DashBoard";
import AdminRoute from "./components/routes/AdminRoute";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminCategory from "./pages/admin/Category";
import AdminProduct from "./pages/admin/Product";
import AdminProducts from "./pages/admin/Products";
import AdminProductUpdate from "./pages/admin/ProductUpdate";
import Shop from "./pages/Shop";

const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      404 | Page not found
    </div>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<DashBoard />} />
          </Route>

          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/category" element={<AdminCategory />} />
            <Route path="admin/product" element={<AdminProduct />} />
            <Route path="admin/products" element={<AdminProducts />} />
            <Route
              path="admin/product/update/:slug"
              element={<AdminProductUpdate />}
            />
          </Route>
          <Route path="*" element={<PageNotFound />} replace />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
