import { Badge } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ p }) => {
    
  const navigate = useNavigate();

  return (
    <div className="card md-3 m-3 hoverable">
      <Badge.Ribbon text={`${p?.sold} sold`} color="purple">
        <Badge.Ribbon
          text={`${
            p?.quantity >= 1
              ? `${p?.quantity - p?.sold} in stock`
              : "Out of stock"
          }`}
          placement="start"
          color="green"
        >
          <img
            className="card-img-top"
            src={`${process.env.REACT_APP_API_KEY}/product/photo/${p._id}`}
            alt={p.name}
            style={{ height: "300px", objectFit: "cover" }}
          />
        </Badge.Ribbon>
      </Badge.Ribbon>

      <div className="card-body">
        <h5>{p.name}</h5>
        <h4 className="fw-bold">
          {p?.price?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h4>
        <p className="card-text">{p?.description?.substring(0, 60)}...</p>
      </div>

      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary col card-button"
          style={{ borderBottomLeftRadius: "5px" }}
          onClick={() => navigate(`/product/${p.slug}`)}
        >
          View Product
        </button>
        <button
          className="btn btn-outline-primary col card-button"
          style={{ borderBottomLeftRadius: "5px" }}
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default ProductCard;
