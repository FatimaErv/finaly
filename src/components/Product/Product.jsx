import React from 'react'
import product from "../../assets/image/product.png"
import favourite from "../../assets/svg/favourite.svg"
import rating from "../../assets/svg/rating.svg"
import "./product.scss"


function Product() {
  return (
    <div>
      <div className='products container'>
        <div className='product'>
          <img src={product} alt="" />
          <div className='product-content'>
            <h5>Наименование</h5>
            <h6>Бранд</h6>
            <h6>Страна</h6>
            <p>В наличии</p>
            <h4>1500$</h4>
            <div className='shop'>
              <button>В корзину</button>
              <div className='icons'>

              <img className='img1' src={favourite} alt="" />
              <img className='img2' src={rating} alt="" />
              </div>
            </div>
          </div>

        </div>
        <div className='product'>
          <img src={product} alt="" />
          <div className='product-content'>
            <h5>Наименование</h5>
            <h6>Бранд</h6>
            <h6>Страна</h6>
            <p>В наличии</p>
            <h4>1500$</h4>
            <div className='shop'>
              <button>В корзину</button>
              <div className='icons'>

              <img className='img1' src={favourite} alt="" />
              <img className='img2' src={rating} alt="" />
              </div>
            </div>
          </div>

        </div>
        <div className='product'>
          <img src={product} alt="" />
          <div className='product-content'>
            <h5>Наименование</h5>
            <h6>Бранд</h6>
            <h6>Страна</h6>
            <p>В наличии</p>
            <h4>1500$</h4>
            <div className='shop'>
              <button>В корзину</button>
              <div className='icons'>

              <img className='img1' src={favourite} alt="" />
              <img className='img2' src={rating} alt="" />
              </div>
            </div>
          </div>

        </div>
        <div className='product'>
          <img src={product} alt="" />
          <div className='product-content'>
            <h5>Наименование</h5>
            <h6>Бранд</h6>
            <h6>Страна</h6>
            <p>В наличии</p>
            <h4>1500$</h4>
            <div className='shop'>
              <button>В корзину</button>
              <div className='icons'>

              <img className='img1' src={favourite} alt="" />
              <img className='img2' src={rating} alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product
