import React from "react";
import { Link } from "react-router-dom";
import "./Cart.scss";
import cartnew from "../../assets/image/category5.png";
import vectortop from "../../assets/svg/vectortop.svg";
import vectorbottom from "../../assets/svg/vectorbottom.svg";
import { useSelector, useDispatch } from "react-redux";
import { incQuantity } from "../../redux/cart/cartSlice";
import { disQuantity } from "../../redux/cart/cartSlice";
import { addCart } from "../../redux/cart/cartSlice";


function CartDetail() {
    const{list} = useSelector ((state) => state.cart)

    const dispatch = useDispatch();

    function checkPrice(p,d) {
        return p - p * (d / 100).toFixed(0);
    }
    checkPrice();

    let result = list.reduce((sub, item) => sub + item.price * item.quantity, 0);

    const handleCheckOut= (productId) => {
        const product = list.find((item) => item.id === productId);

        if(product) {
            dispatch(addCheck(product))
        }
    }

    
  return (
    <div>
      <div className="container">
        <div className="cart-top">
          <Link to="/">
          <p>Главная / Корзина </p>
          </Link>
          <h2>Корзина</h2>
        </div>
        <div className="obshiy">
            {
                list.map((item) => (
                    <div className="prices">
                    <div className="title">
                      <img src={item.image} alt="" />
                      <p>{item.title}</p>
                    </div>
          
                    <p>{item.price}$</p>
                    <div className="count">
                      <h5>{item.quantity}</h5>
                      <div className="icons">
                        <img onClick={() => dispatch(incQuantity (item.id))} src={vectortop} alt="" />
                        <img onClick={() => dispatch(disQuantity (item.id))} src={vectorbottom} alt="" />
                      </div>
                    </div>
          
                    <p>{item.price* item.quantity}$</p>
                  </div>


                ))
            }

      
        </div>


        <div className="footer-cart">
          <div className="input">
            <input placeholder="Промокод" type="text" />
            <button>В корзину</button>
          </div>
          <div className="total">
            <h4>Корзина</h4>
            <p>
              Цена: <span>{result}$</span>
            </p>
            <p>
              Доставка: <span>50$</span>{" "}
            </p>
            <p>
              Итого: <span>{result + 500}$</span>
            </p>
            <Link to="/pay">
              <button>Купить в один клик</button>
              </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDetail;
