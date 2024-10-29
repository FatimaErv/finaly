import React, { useEffect, useState } from 'react'
import product from "../../assets/image/product.png"
import favourite from "../../assets/svg/favourite.svg"
import rating from "../../assets/svg/rating.svg"
import "./product.scss"
import axios from 'axios'
import { Link } from 'react-router-dom'
import { addWish } from '../../redux/wishlist/wishSlice'
import { useDispatch } from 'react-redux'




const API = "https://66fd3da2c3a184a84d199c30.mockapi.io/products"



function Product() {
  const[products, setProducts] = useState([])

  const dispatch = useDispatch()
  async function getProduct() {
    try {
      const res = await axios.get(API)
      console.log(res);
      setProducts(res.data)
      
    } catch (error) {
      console.log(error);
      
    }

    
  }
  useEffect(()=>{getProduct()},[])
  return (
    <div>
      <div className='products container'>
        {
          products?.map((item)=>(
            

        <div className='product'>
          <Link to={`/detailProduct/${item.id}`}>
          <img src={item.image}alt="" />
          </Link>
          <div className='product-content'>
            <h5>{item.title}</h5>
            <h6>Бранд</h6>
            <h6>Страна</h6>
            <p>В наличии</p>
            <h4>{item.price}$</h4>
            <div className='shop'>
              <button>В корзину</button>
              <div className='icons'>

              <img onClick={()=>dispatch(addWish(item))} className='img1' src={favourite} alt="" />
              <img className='img2' src={rating} alt="" />
              </div>
            </div>
          </div>

        </div>
          ))
        }
       
      </div>
    </div>
  )
}

export default Product
