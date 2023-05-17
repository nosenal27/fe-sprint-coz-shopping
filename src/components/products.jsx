import React, { useState, useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = () => {
      setLoading(true);
      const response = await fetch(
        "http://cozshopping.codestates-seb.link/api-docs/#/Products/get_api_v1_products?count=4"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  return (
    <div>
      <div className="container my-4 py-5">
        <div className="row">
          <div className="col-12 my4">
            <h1 className="display-6 fw-bolder">상품 리스트</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
