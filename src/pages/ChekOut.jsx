import React from 'react'
import "./CheckOut.scss"
import cartnew from '../assets/image/category5.png'
import vectortop from '../assets/svg/vectortop.svg'
import vectorbottom from '../assets/svg/vectorbottom.svg'
import { useSelector, useDispatch } from 'react-redux'
import { incQuantity } from '../redux/cart/cartSlice'
import { disQuantity } from '../redux/cart/cartSlice'


function ChekOut() {
  const{list} = useSelector ((state) => state.cart)

  const dispatch = useDispatch();

  function checkPrice(p,d) {
      return p - p * (d / 100).toFixed(0);
  }
  checkPrice();

  let result = list.reduce((sub, item) => sub + item.price * item.quantity, 0);




  return (
    <div>
      <div className='chek'>
        <div className='chek-top'>
            <h2>Купить в 1 клик</h2>
        </div>
        <div className='obbsh'>
          {
            list.map((item) => (
              <div className='prices'>
              <div className='title'>
          <img src={item.image} alt="" />
          <p>{item.title}</p>
              </div>
          <div className='count'> 
          <h5>{item.quantity}</h5> 
          <div className='icons'> 
           <img onClick={() => dispatch(incQuantity (item.id))} src={vectortop} alt="" /> 
              <img onClick={() => dispatch(disQuantity (item.id))} src={vectorbottom} alt="" /> 
          </div> 
         </div> 
        </div>
      ))
      }
      </div>
    
            <div className='number'>
                <div>{result}$</div>
                <input placeholder='+7(___) ___ - __ - __' type="number" />
                <button>Заказать</button>
            </div>
            <div className='check-text'>
                <p>Нажимая «Заказать», вы соглашаетесь с условиями Пользовательского соглашения и Политики конфиденциальности</p>
                </div>
      </div>
    </div>
  )
}

export default ChekOut
