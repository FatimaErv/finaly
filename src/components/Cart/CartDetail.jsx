import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.scss'
import cartnew from "../../assets/image/category5.png"
import vectortop from "../../assets/svg/vectortop.svg"
import vectorbottom from "../../assets/svg/vectorbottom.svg"

function CartDetail() {
  return (
    <div>
      
    <div className='container'>
        <div className='cart-top'>
            <p>Главная / Корзина  </p>
            <h2>Корзина</h2>

        </div>
        
      
                <div className='prices'>
                    <div className='title'>
                <img src={cartnew} alt="" />
                <p>kvvhucf</p>
                    </div>
                    
                <p>88$</p>
                <div className='count'> 
                <h5>ffff</h5> 
                <div className='icons'> 
                 <img src={vectortop} alt="" /> 
                    <img src={vectorbottom} alt="" /> 
                </div> 
               </div> 
               
                <p>1111</p>
            </div>


          
       
        <div className='footer-cart'>
           <div className='input'>
                <input placeholder='Промокод' type="text" />
                <button>В корзину</button>
            </div>
            <div className='total'>
                <h4>Корзина</h4>
                <p>Цена: <span>12$</span></p>
                <p>Доставка: <span>500$</span> </p>
                <p>Итого: <span>12$</span></p>
               <Link to="/check-out">
                <button>Купить в один клик</button>
               </Link>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default CartDetail
