import {useState} from "react";
import "../styles/Header.css";
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
          <Link to="/products/list" style={{textDecoration: "none"}}>
            <li>🎁 상품리스트 페이지</li>
          </Link>
          <Link to="/bookmark" style={{textDecoration: "none"}}>
            <li>💜 북마크 페이지</li>
          </Link>
        </span>
      </ul>
    </div>
  );
}

export default Header;
