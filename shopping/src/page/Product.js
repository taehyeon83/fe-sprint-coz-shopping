import React, {useEffect, useState} from "react";
import axios from "axios";
import Filter from "../components/Filter";
import Item from "../components/Item";
import "../styles/Product.css";

function Product() {
  const [wholedata, setWholedata] = useState(() => {
    const storedData = localStorage.getItem("wholedata");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [type, setType] = useState(null);
  const [scrollvalue, setScrollvalue] = useState(12);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://cozshopping.codestates-seb.link/api/v1/products?count=");
        const data = response.data;
        setWholedata(data);
        localStorage.setItem("wholedata", JSON.stringify(data));
      } catch (error) {
        console.error(error);
      } finally {
        console.log("로딩 끝");
      }
    }
    fetchData();
  }, []);

  const getRandomItems = (array, numItems) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
  };

  const filterItemsByType = (type) => {
    return wholedata.filter((item) => item.type === type);
  };

  useEffect(() => {
    const loadMoreData = () => {
      if (scrollvalue < 100) {
        setScrollvalue((prevValue) => prevValue + 12);
      } else {
        return;
      }
    };

    const handleScroll = () => {
      const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        loadMoreData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollvalue]);

  let filteredData;
  if (type === "Product" || type === "Category" || type === "Exhibition" || type === "Brand") {
    filteredData = filterItemsByType(type);
  } else {
    filteredData = wholedata;
  }

  return (
    <div>
      <Filter type={type} setType={setType} />
      <ul className="itemlist">
        {getRandomItems(filteredData, scrollvalue).map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default Product;
