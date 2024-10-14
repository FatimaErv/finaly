import React from 'react'
import stars from "../assets/svg/stars.svg"
import hit from "../assets/svg/hit.svg"
import vanna from "../assets/image/vanna.png"
import detail from "../assets/image/detail.png"
import vannaDetail from "../assets/image/vannaDetail.png"

import "./about.scss"




function About() {
  return (
    <div>
      <div className='tovar container'>
        <div className='tovar-left'>
          <div className='top'>
          <img src={stars} alt="" />
          <img src={hit} alt="" />
            
          </div>
          <div className='center'>
            <img src={vanna} alt="" />
            
          </div>
          <div className='details'>
          <img src={vannaDetail} alt="" />
          <img src={detail} alt="" />
          <img src={detail} alt="" />
          <img src={vannaDetail} alt="" />
          </div>
        </div>
        <div className='tovar-right'>
          <h3>Ванна акриловая прямоугольная Акватек Мия 140*70см без гидромассажа</h3>
          <div className='tovar-content'>
            <div className='about'>
              <h5>Коротко о товаре</h5>

              <p>- Код товара:</p>
              <p>- Бренд</p>
              <p>- Страна: </p>
              <p>- Материал:</p>
              <p>- Габариты:</p>
              <p> - Вид установки:</p>
              <p>- Ручки:</p>
              <h6>Все характеристики</h6>
            </div>
            <div className='add'>
              <h3>15000$</h3>
              <button className='btn1'>В корзину</button>
              <button className='btn2'>Купить в один клик</button>
              <h6>Товар в наличии</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
