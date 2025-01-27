import React, {useState} from 'react'
import "./wishlist.scss"
import vanna from "../assets/image/vanna.png"
import favourite from "../assets/svg/favourite.svg" 
import line from "../assets/svg/line.svg"
import { useDispatch, useSelector } from 'react-redux'
import { removewish } from '../redux/wishlist/wishSlice'
import { addCart } from '../redux/cart/cartSlice'
import { Link } from 'react-router-dom'


function Wishlist() {
  const{items} = useSelector ((state) => state.wishlist)


  const [wishlist, setWishlist] = useState(  );
  const dispatch = useDispatch()

 
 
  

  return (
    <div className='wishlist container'>
         <Link to="/">
      <h6>Главная / Личный кабинет</h6>
         </Link>
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

        <div key={data.id} className='wish-prod'>
           <Link to={`/detailProduct/${data.id}`}> 
          <img src={data.image}alt="" /> 
          
          </Link> 
   
    <div className='product-content'>
        <h5>{data.title}</h5>
        <p>В наличии</p>
        <h4>122$</h4>
    <div className='shop'>
      <button onClick={() =>dispatch(addCart(data))}>В корзину</button>
      <div className='icons'>

      <img onClick={()=>dispatch(removewish(data.id))} className='img1' src={favourite} alt="" />

   
      </div>
    </div>
  </div>

       </div>
            ))
          }

        </div>
           


 
        </div>
      </div>
  
  )
}

export default Wishlist
