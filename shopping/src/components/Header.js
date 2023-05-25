import React, {useState} from "react";
import {Link} from "react-router-dom";

function Header() {
  const [isOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((isOpen) => !isOpen);
  };

  return (
    <div className="header">
      <Link to="/" style={{textDecoration: "none"}}>
        <h1>COZ Shopping</h1>
      </Link>
      <div onClick={() => toggleMenu()} className="menu">
        ☰
      </div>
      <ul className={isOpen ? "show-menu" : "hide-menu"}>
        <span className="menuList">
          <li>OOO님, 안녕하세요!</li>
          <li>🎁 상품 리스트 페이지</li>
          <li>💜 북마크 페이지</li>
        </span>
      </ul>
    </div>
  );
}

export default Header;
