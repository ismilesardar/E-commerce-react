import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/card/ProductCard";

const ProductView = () => {
  //state
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
  //react-router-dom
  const params = useParams();
  //useEffect
  useEffect(() => {
    if (params?.slug) loadProduct();
  }, [params?.slug]);

  const loadProduct = async () => {
    try {
      const { data } = await axios.get(`/product/${params?.slug}`);
    //   console.log(data)
      setProduct(data.Single);
      lodeRelated(data.Single._id, data.Single.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  const lodeRelated = async (productId, categoryId) => {
    try {
      const { data } = await axios.get(
        `/related-products/${productId}/${categoryId}`
      );
      setRelated(data);
    } catch (error) {
      console.log(error);
    }
  };

  return <div className="container-fluid">
    <div className="row">
        <div className="col-md-9">
            <h1>Coming Soon</h1>
        </div>
        <div className="col-md-3">
            <h2>Related Product</h2>
            <hr />
            {related?.length < 1 && <p>Nothing found</p>}
            {related?.map((p)=>(<ProductCard p={p} key={p._id} />))}
        </div>
    </div>
  </div>;
};

export default ProductView;
