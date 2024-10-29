import React from 'react'
import "./wishlist.scss"
import vanna from "../assets/image/vanna.png"
import favourite from "../assets/svg/favourite.svg" 
import rating from "../assets/svg/rating.svg"
import line from "../assets/svg/line.svg"
import { useSelector } from 'react-redux'



function Wishlist() {
  const{items} = useSelector ((state) => state.wishlist)
  return (
    <div className='wishlist container'>
      <h6>Главная / Личный кабинет</h6>
      <h2>Избранные товары</h2>
      <div className='products'>
        <div className='pages'>
          <div className='text'>
            <p>Профиль</p>
            <p>Корзина</p>
            <p>Заказы</p>
            <p>Интересные товары</p>
            <p>Избранное</p>

          </div>
          <img src={line} alt="" />
        </div>
        <div className='wishs'>
          {
            items?.map((data)=>(

        <div className='wish-prod'>
     <img src={data.image}alt="" />
    <div className='product-content'>
        <h5>{data.title}</h5>
        <p>В наличии</p>
        <h4>122$</h4>
    <div className='shop'>
      <button>В корзину</button>
      <div className='icons'>

      <img className='img1' src={favourite} alt="" />
      <img className='img2' src={rating} alt="" />
      </div>
    </div>
  </div>

       </div>
            ))
          }

        </div>
           

           <button></button>
 
        </div>
      </div>
  
  )
}

export default Wishlist
