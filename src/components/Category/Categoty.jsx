import React from 'react'
import klipartz from "../../assets/image/klipartz.png"
import categories from "../../assets/svg/categories.svg"
import category2 from "../../assets/image/category2.png"
import category3 from "../../assets/image/category3.png"
import category4 from "../../assets/image/category4.png"
import category5 from "../../assets/image/category5.png"
import category6 from "../../assets/image/category6.png"
import category7 from "../../assets/image/category7.png"
import category8 from "../../assets/image/category8.png"


import "./category.scss"

function Categoty() {
  return (
    <div className='category container'>
      <img className='category-svg' src={categories} alt="" />
      <h2>Популярные категории</h2>
      <div className='categories'>
        <div className='category-content'>
            <img src={klipartz} alt="" />
            <h5>РАКОВИНЫ</h5>
        </div>
        <div className='category-content'>
            <img src={category2} alt="" />
            <h5>УНИТАЗЫ</h5>
        </div>
        <div className='category-content'>
            <img src={category3} alt="" />
            <h5>СМЕСИТЕЛИ</h5>
        </div>
        <div className='category-content'>
            <img src={category4} alt="" />
            <h5>СИСТЕМЫ ИНСТАЛЛЯЦИИ</h5>
        </div>
        <div className='category-content'>
            <img src={category5} alt="" />
            <h5>ВАННЫ</h5>
        </div>
        <div className='category-content'>
            <img src={category6} alt="" />
            <h5>МЕБЕЛЬ ДЛЯ ВАННЫХ КОМНАТ</h5>
        </div>
        <div className='category-content'>
            <img src={category7} alt="" />
            <h5>ДУШЕВЫЕ УГЛЫ И ОГРАЖДЕНИЯ</h5>
        </div>
        <div className='category-content'>
            <img src={category8} alt="" />
            <h5>АКСЕССУАРЫ ДЛЯ ВАННЫХ КОМНАТ</h5>
        </div>
      </div>
    </div>
  )
}

export default Categoty
