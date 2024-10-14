import React from "react";
import logo from "../../assets/svg/logo.svg"
import user from "../../assets/svg/user.svg"
import group from "../../assets/svg/group.svg"
import search from "../../assets/svg/search.svg"
import favourite from "../../assets/svg/favourite.svg"
import cart from "../../assets/svg/cart.svg"
import { Link } from "react-router-dom";
import "./header.scss"
function Header() {
return(
    <div className="header container">
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
                <li>
                <Link to="/contact">Контакт</Link>

                </li>
            </ul>
        </div>
        <div className="sign">
            <img src={user} alt="" />
            <div className="user">
                <p>Вход</p>
                <p>/</p>
                <p>Регистрация</p>
            </div>

        </div>
        </div>
        <div className="header-bottom">
            <div className="header-content">
              <img src={group} alt="" />
              <h4>Каталог товаров</h4>
              <div className="search">
              <input type="text"  placeholder="Поиск товаров и брендов"/>
              <img src={search} alt="" />
              </div>
              <div className="text">
                <h5>+996 779 47-70-51</h5>
                <p>Вам перезвонить?</p>
              </div>

            </div>
            <div className="header-icons">
                <div className="head-icon">
                    <img src={favourite} alt="" />
                   
                </div>
                
                <div className="head-icon">
                    <img src={cart} alt="" />
                
                </div>
            </div>

        </div>
    </div>
)
}
export default Header;
