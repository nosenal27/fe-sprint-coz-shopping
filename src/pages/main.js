import React, { useState, useEffect } from "react";

const Main = () => {
  const [index, setIndex] = useState();
  const [items, setItems] = useState(index);

  const getProducts = () => {};
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "http://cozshopping.codestates-seb.link/api-docs/#/Products/get_api_v1_products"
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
            <h1 className="display-6 fw-bolderr">상품 리스트</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
