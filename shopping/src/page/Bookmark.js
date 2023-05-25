import "../styles/Bookmark.css";
import {useState, useEffect} from "react";
import Item from "../components/Item";
import Filter from "../components/Filter";

function Bookmark() {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [randomData, setRandomData] = useState([]);
  const [type, setType] = useState(null);

  useEffect(() => {
    const localStorageData = localStorage.getItem("bookmarkedItems");
    if (localStorageData) {
      setBookmarkedItems(JSON.parse(localStorageData));
    }
  }, []);

  const getRandomItems = (array, numItems) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
  };

  useEffect(() => {
    const filterItemsByType = (type) => {
      return bookmarkedItems.filter((item) => item.type === type);
    };

    const setFilteredRandomData = (type) => {
      const filteredItems = filterItemsByType(type);
      const randomItems = getRandomItems(filteredItems, 100);
      setRandomData(randomItems);
    };

    if (type === "Product") {
      setFilteredRandomData("Product");
    } else if (type === "Category") {
      setFilteredRandomData("Category");
    } else if (type === "Exhibition") {
      setFilteredRandomData("Exhibition");
    } else if (type === "Brand") {
      setFilteredRandomData("Brand");
    } else {
      setRandomData(getRandomItems(bookmarkedItems, 100));
    }
  }, [type, bookmarkedItems]);

  return (
    <div>
      <Filter type={type} setType={setType} />
      <ul className="itemList">
        {randomData.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default Bookmark;
