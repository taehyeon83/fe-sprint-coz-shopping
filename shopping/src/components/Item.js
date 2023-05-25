import React, {useState} from "react";
import "../styles/Item.css";
import {useSelector, useDispatch} from "react-redux";
import {addToBookmark, removeFromBookmark} from "../store";

function Item(props) {
  const {id} = props;
  const bookmarkedItems = JSON.parse(localStorage.getItem("bookmarkedItems")) || [];
  const [clickedImage, setClickedImage] = useState("");
  const existingItem = bookmarkedItems.find((item) => item.id === id);
  const bookmark = useSelector((state) => state.bookmark);
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  console.log(bookmark);
  const handleBookmark = () => {
    const bookmarkedItems = JSON.parse(localStorage.getItem("bookmarkedItems")) || [];
    const existingItem = bookmarkedItems.find((item) => item.id === id);

    if (existingItem) {
      const updatedItems = bookmarkedItems.filter((item) => item.id !== id);
      localStorage.setItem("bookmarkedItems", JSON.stringify(updatedItems));
      dispatch(removeFromBookmark(id));
      console.log("제거되었습니다.");
    } else {
      const newItem = {
        id: props.id,
        title: props.title,
        brand_image_url: props.brand_image_url,
        brand_name: props.brand_name,
        discountPercentage: props.discountPercentage,
        follower: props.follower,
        image_url: props.image_url,
        price: props.price,
        sub_title: props.sub_title,
        type: props.type,
      };
      bookmarkedItems.push(newItem);
      localStorage.setItem("bookmarkedItems", JSON.stringify(bookmarkedItems));
      dispatch(addToBookmark(newItem));
      console.log("추가되었습니다.");
    }
  };
  const handleImageClick = (imageUrl) => {
    setModalOpen(!modalOpen);
    setClickedImage(imageUrl);
  };

  return (
    <div className="item">
      <div className="whole-wrapper">
        <div className="image-wrapper">
          <img
            className="image"
            src={props.image_url || props.brand_image_url}
            alt="대체이미지"
            onClick={() => handleImageClick(props.image_url || props.brand_image_url)}
          />
        </div>
        <div className="bookmark-wrapper">
          <button className="bookmark-button" onClick={handleBookmark}>
            <i className={`fas fa-star ${existingItem ? "custom-star" : ""}`}></i>
          </button>
        </div>
      </div>
      <div className="first-line">
        <div className="item-title">{props.type === "Brand" ? props.brand_name : props.type === "Category" ? "#" + props.title : props.title}</div>
        <div className="right-element">
          {props.type === "Product" ? props.discountPercentage + "%" : null}
          {props.type === "Brand" ? "관심고객수" : null}
        </div>
      </div>
      <div className="price">{props.price || props.follower}</div>
      <div>{props.sub_title}</div>
      {modalOpen && (
        <div className="modal">
          <img className="modal-image" src={clickedImage} alt="큰이미지" onClick={handleImageClick} />
          <button className="modal-bookmark-button" onClick={handleBookmark}>
            <i className={`fas fa-star ${existingItem ? "custom-star" : ""}`}></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default Item;
