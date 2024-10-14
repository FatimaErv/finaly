import React from 'react'
import help from "../../assets/image/help.png"
import help1 from "../../assets/svg/2k.svg"
import help2 from "../../assets/svg/30k.svg"
import transport from "../../assets/svg/transport.svg"
import car from "../../assets/svg/car.svg"
import dashboard from "../../assets/svg/dashboard.svg"
import support from "../../assets/svg/support.svg"
import thumb from "../../assets/svg/thumb-up.svg"
import sale from "../../assets/svg/sale.svg"
import "./help.scss"

function Help() {
  return (
    <div className='help'>
      <img src={help} alt="" />
      <div className='help1'></div>
      <div className='help-content'>
        <div className='imgs'>
          <img src={help1} alt="" />
          <img src={help2} alt="" />
        </div>
        <div className='texts'>
          <h3>Мы не просто продаем товары для ванной - мы помогаем вам найти лучшее решение.</h3>
          <div className='blocks'>
           
            <div className='block'>
            <div className='img'>

              <img src={transport} alt="" />
            </div>
              <div className='text'>
                <h5>ДОСТАВКА</h5>
                <p>Доставим товар в удобное для вас время</p>
              </div>
            </div>
            <div className='block'>
              <img src={car} alt="" />
              <div className='text'>
                <h5>САМОВЫВОЗ</h5>
                <p> Вы можете самостоятельно забрать заказ в пункте самовывоза.</p>
              </div>
            </div>
            <div className='block'>
              <img src={dashboard} alt="" />
              <div className='text'>
                <h5>ДОСТАВКАШИРОКИЙ АССОРТИМЕНТ ТОВАРОВ</h5>
                <p>У нас найдется все.</p>
              </div>
            </div>
            <div className='block'>
              <img src={support} alt="" />
              <div className='text'>
                <h5>КЛИЕНТСКИЙ СЕРВИС</h5>
                <p> Оказываем поддержку на всех этапах покупки товара</p>
              </div>
            </div>
            <div className='block'>
              <img src={thumb} alt="" />
              <div className='text'>
                <h5>ГАРАНТИЯ КАЧЕСТВА</h5>
                <p>Соответствуем требованиям и стандартам качестваДоставим товар в удобное для вас время</p>
              </div>
            </div>
            <div className='block'>
              <img src={sale} alt="" />
              <div className='text'>
                <h5>АКЦИИ И СКИДКИ </h5>
                <p>
                Постоянным клиентам акции и скидки</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Help
