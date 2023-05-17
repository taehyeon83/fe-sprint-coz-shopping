import {useEffect, useState} from "react";
import axios from "axios";
import Item from "../components/Item";

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://cozshopping.codestates-seb.link/api/v1/products?count=4");
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
      <span className="productListTitle">상품 리스트</span>
      <Item products={products} />
    </div>
  );
}

export default Main;
