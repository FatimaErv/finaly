import React, { useEffect, useState } from 'react'
import product from "../../assets/image/product.png"
import favourite from "../../assets/svg/favourite.svg"
import rating from "../../assets/svg/rating.svg"
import "./product.scss"
import { Link } from 'react-router-dom'
import axios from "axios";

const API = "https://66fd3da2c3a184a84d199c30.mockapi.io/products"


function Product() {

  const [products, setProducts] = useState([])

  async function getProduct() {
      try {
        const res = await axios.get(API)
        console.log(res);
        setProducts(res.data)
      } catch (error) {
        console.log(error);
      }
    
  }

  useEffect(() => { getProduct() }, [])
  return (
    <div>
      <div className='products container'>

        {
          products.map((item) => (
            <Link to="/detail-product" className='product'>
            <img src={item.image} alt="" />
            <div className='product-content'>
              <h5>{item.title}</h5>
              <h6>Бранд</h6>
              <h6>Страна</h6>
              <p>В наличии</p>
              <h4>{item.price}$</h4>
              <div className='shop'>
                <button>В корзину</button>
                <div className='icons'>
  
                <img className='img1' src={favourite} alt="" />
                <img className='img2' src={rating} alt="" />
                </div>
              </div>
            </div>
  
          </Link>


            
          ))
        }


        
       

      </div>
    </div>
  )
}

export default Product
