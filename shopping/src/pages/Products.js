import React, {useEffect, useState} from "react";
import axios from "axios";
import Item from "../components/Item";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://cozshopping.codestates-seb.link/api/v1/products");
        const data = response.data;
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="main">
      <Item products={products} />
    </div>
  );
}

export default Products;
