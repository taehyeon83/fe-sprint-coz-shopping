import React from "react";
import "../styles/Filter.css";

function Filter({type, setType}) {
  const stateClickhandler = (selectedType) => {
    setType(selectedType);
  };

  return (
    <div className="Filter">
      <div className="Filter__list">
        <img src={process.env.PUBLIC_URL + "../Img/전체.png"} alt="전체" />
        <div className={type === null ? "Filter__discription" : null} onClick={() => stateClickhandler(null)}>
          전체
        </div>
      </div>
      <div className="Filter__list">
        <img src={process.env.PUBLIC_URL + "../Img/상품.png"} alt="상품" />
        <div className={type === "Product" ? "Filter__discription" : null} onClick={() => stateClickhandler("Product")}>
          상품
        </div>
      </div>
      <div className="Filter__list">
        <img src={process.env.PUBLIC_URL + "../Img/카테고리.png"} alt="카테고리" />
        <div className={type === "Category" ? "Filter__discription" : null} onClick={() => stateClickhandler("Category")}>
          카테고리
        </div>
      </div>
      <div className="Filter__list">
        <img src={process.env.PUBLIC_URL + "../Img/기획전.png"} alt="기획전" />
        <div className={type === "Exhibition" ? "Filter__discription" : null} onClick={() => stateClickhandler("Exhibition")}>
          기획전
        </div>
      </div>
      <div className="Filter__list">
        <img src={process.env.PUBLIC_URL + "../Img/브랜드.png"} alt="브랜드" />
        <div className={type === "Brand" ? "Filter__discription" : null} onClick={() => stateClickhandler("Brand")}>
          브랜드
        </div>
      </div>
    </div>
  );
}

export default Filter;
