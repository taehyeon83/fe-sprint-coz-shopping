import "../styles/item.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";

function Item({products}) {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  const toggleBookmark = (productId) => {
    if (bookmarkedItems.includes(productId)) {
      setBookmarkedItems(bookmarkedItems.filter((id) => id !== productId));
    } else {
      setBookmarkedItems([...bookmarkedItems, productId]);
    }
  };

  return (
    <div>
      <div className="product">
        {products.map((product) => (
          <div key={product.id}>
            <div className="image-container">
              <img className="image" alt="제품이미지" src={product.image_url || product.brand_image_url} />
              <FontAwesomeIcon
                icon={faStar}
                onClick={() => toggleBookmark(product.id)}
                className={`bookmark-icon ${bookmarkedItems.includes(product.id) ? "bookmarked" : ""}`}
              />
            </div>
            <div className="topLine">
              <div className="leftText">
                <div className="productTitle">{product.type === "Category" ? "#" + product.title : product.title || product.brand_name}</div>
              </div>
              <div className="rightText">
                {product.type === "Product" ? <span className="discountPercentage">{product.discountPercentage}%</span> : null}
                {product.type === "Brand" ? <span className="followerCount">관심고객수</span> : null}
              </div>
            </div>
            <div className="priceAndFollower">{product.price || product.follower}</div>
            <div className="subTitle">{product.sub_title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Item;
