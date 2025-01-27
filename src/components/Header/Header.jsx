import React, { useState } from "react";
import logo from "../../assets/image/gidrator.png";
import user from "../../assets/user.svg";
import group from "../../assets/group.svg";
import search from "../../assets/search.svg";
import favourite from "../../assets/favorite.svg";
import cart from "../../assets/cart.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.scss";
function Header() {

  
  const {items} = useSelector((state)=> state.wishlist)
  const {list} = useSelector((state)=> state.cart)

  const [ searchQuery, setSearchQuery] = useState("")
  const [searchResult, setSearchResult] = useState(null)

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  }

  const handleSearch = () => {
    console.log(searchQuery);
    const result = `${searchQuery}`
  }



  return (
    <div className="header">
      <div className="header-top">
        <img src={logo} alt="" />
        <div className="head">
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/guarantee">Гарантии и возврат</Link>
            </li>
            <li>
              <Link to="/delivery">Доставка </Link>
            </li>
            <li>
              <Link to="/payment">Оплата </Link>
            </li>
            
           
          </ul>
        </div>
        <div className="sign">
          <img src={user} alt="" />
          <div className="user">
            <Link to="/login">Вход</Link>
            <p>/</p>
            <Link to="/register">Регистрация</Link>
          </div>
        </div>
      </div>
      <div className="header-bottom container">
        <div className="header-content">
          <img src={group} alt="" />
          <h4>Каталог товаров</h4>
          <div className="search">
            <input type="text" placeholder="Поиск товаров и брендов" value={searchQuery} onChange={(event)=>setSearchQuery(event.target.value)} />
            <img onClick={handleSearch} src={search} alt="" />
          </div>
          <div className="text">
            <h5>+996 779 47-70-51</h5>
            <p>Вам перезвонить?</p>
          </div>
        </div>
        <div className="header-icons">
          <Link to="/Wishlist" className="head-icon">
            <img src={favourite} alt="" />
          </Link>
          <div className="count-1">{items.length}</div>
          <Link to="/cart" className="head-icon">
            <img src={cart} alt="" />
          </Link>
          <div className="count-2">{list.length}</div>
     

        </div>
      </div>
    </div>
  );
}
export default Header;
