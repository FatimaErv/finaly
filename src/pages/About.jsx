import React from 'react'
import about from "../assets/svg/about.svg"
import aboutUs from "../assets/image/about.png"
import aboutUs1 from "../assets/image/about1.png"
import aboutUs11 from "../assets/image/about11.png"
import board from "../assets/svg/board.svg"
import category5 from "../assets/image/category5.png"
import offer from "../assets/svg/offer.svg"
import we from "../assets/image/we.png"
import we1 from "../assets/image/we1.png"
import we11 from "../assets/image/we11.png"
import dush from "../assets/image/dush.png"

import sms from "../assets/svg/sms.svg"

import klipartz from "../assets/image/klipartz.png"
import ruka from "../assets/image/ruka.png"
import sushilka from "../assets/image/sushilka.png"
import bolt from "../assets/image/bolt.png"

import category2 from "../assets/image/category2.png"
import category3 from "../assets/image/category3.png"
import category4 from "../assets/image/category4.png"
import category6 from "../assets/image/category6.png"
import category7 from "../assets/image/category7.png"
import category8 from "../assets/image/category8.png"





import "./about.scss"

function About() {
  return (
   <div className='about container'>
      <p>Главная  /  О нас  </p>
      <div className='about-logo'>
        <h4>О нас</h4>
        <img src={about} alt="" />
      </div>
      <div className='about-text'>
        <h5>Интернет-магазин сантехники gidratop.ru </h5>
        <p>Мы предлагаем большой ассортимент сантехнического оборудования из Европы на любой вкус по выгодным и доступным ценам. <br /> <br />

Мы ценим наших клиентов, поэтому продаем только сертифицированную продукцию, предоставляем качественный сервис и гарантируем индивидуальный подход к каждому клиенту. <br /> <br />

Кроме того, наш магазин сантехники постоянно проводит акции, предоставляем скидки на товары и делаем выгодные предложения с целью повышения лояльности наших клиентов. <br /> <br />

Наша цель – обеспечить комфорт каждому клиенту и предоставить отличные решения по организации пространства ванных комнат, кухонь и санузлов. Мы доставим товар в удобное время для клиента и точно в срок, потому что ценим каждого покупателя.</p>
       
      </div>

      <div className='why '>
        <img src={aboutUs} alt="" />
        <img src={aboutUs1} alt="" />
        <img src={aboutUs11} alt="" />
      
      <div className='why-content'>
        <h3>Почему стоить купить сантехнику именно у нас?</h3>
        <div className='why-info'>
          <div className='why-box'>
            <img src={board} alt="" />
            <div className='box-text'>
              <h5>ШИРОКИЙ АССОРТИМЕНТ ТОВАРОВ </h5>
              <p> Большой ассортимент ванн, унитазов и раковин</p>
            </div>
          </div>
          <div className='why-box'>
            <img src={board} alt="" />
            <div className='box-text'>
              <h5>ШИРОКИЙ АССОРТИМЕНТ ТОВАРОВ </h5>
              <p> Большой ассортимент ванн, унитазов и раковин</p>
            </div>
          </div>
          <div className='why-box'>
            <img src={board} alt="" />
            <div className='box-text'>
              <h5>ШИРОКИЙ АССОРТИМЕНТ ТОВАРОВ </h5>
              <p> Большой ассортимент ванн, унитазов и раковин</p>
            </div>
          </div>
          <div className='why-box'>
            <img src={board} alt="" />
            <div className='box-text'>
              <h5>ШИРОКИЙ АССОРТИМЕНТ ТОВАРОВ </h5>
              <p> Большой ассортимент ванн, унитазов и раковин</p>
            </div>
          </div>
          <div className='why-box'>
            <img src={board} alt="" />
            <div className='box-text'>
              <h5>ШИРОКИЙ АССОРТИМЕНТ ТОВАРОВ </h5>
              <p> Большой ассортимент ванн, унитазов и раковин</p>
            </div>
          </div>
          <div className='why-box'>
            <img src={board} alt="" />
            <div className='box-text'>
              <h5>ШИРОКИЙ АССОРТИМЕНТ ТОВАРОВ </h5>
              <p> Большой ассортимент ванн, унитазов и раковин</p>
            </div>
          </div>
          <div className='why-box'>
            <img src={board} alt="" />
            <div className='box-text'>
              <h5>ШИРОКИЙ АССОРТИМЕНТ ТОВАРОВ </h5>
              <p> Большой ассортимент ванн, унитазов и раковин</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className='offer-box'>
      <div className='offer-text'>
        <h4>Мы рады вам предложить</h4>
         <img src={offer} alt="" />
      </div>
          <div className='offers'>
            <div className='offer'>
              <img src={category5} alt="" />
              <h5>ВАННЫ <br />
              (акриловые, стальные,  чугунные, литьевые)</h5>
            </div>
            <div className='offer'>
              <img src={dush} alt="" />
              <h5>ДУШЕВЫЕ 
              КАБИНЫ</h5>
            </div>
            <div className='offer'>
              <img src={category7} alt="" />
              <h5>ДУШЕВЫЕ УГЛЫ И ОГРАЖДЕНИЯ</h5>
            </div>
            <div className='offer'>
              <img src={klipartz} alt="" />
              <h5>РАКОВИНЫ И 
              КУХОННЫЕ МОЙКИ</h5>
            </div>
            <div className='offer'>
              <img src={category4} alt="" />
              <h5>СИСТЕМЫ 
              ИНСТАЛЛЯЦИИ</h5>
            </div>
            <div className='offer'>
              <img src={category2} alt="" />
              <h5>УНИТАЗЫ И 
              БИДЕ</h5>
            </div>
            <div className='offer'>
              <img src={category3} alt="" />
              <h5>СМЕСИТЕЛИ</h5>
            </div>
            <div className='offer'>
              <img src={sushilka} alt="" />
              <h5>ПОЛОТЕНЦЕСУШИТЕЛИ</h5>
            </div>
            <div className='offer'>
              <img src={ruka} alt="" />
              <h5>СУШИЛКИ ДЛЯ 
              РУК</h5>
            </div>
            <div className='offer'>
              <img src={category8} alt="" />
              <h5>АКСЕССУАРЫ ДЛЯ ВАННЫХ КОМНАТ</h5>
            </div>
            <div className='offer'>
              <img src={category6} alt="" />
              <h5>МЕБЕЛЬ ДЛЯ 
              ВАННЫХ КОМНАТ</h5>
            </div>
            <div className='offer'>
              <img src={bolt} alt="" />
              <h5>КОМПЛЕКТУЮЩИЕ</h5>
            </div>
          </div>
      </div>

      <div className='we'>
        <div className='we-text'>
          <p>Наши сотрудники, отлично знающие ассортимент, всегда рады помочь выбрать необходимый товар и проконсультировать по техническим характеристикам. <br /> 
          Звоните по телефону 996(779)47-70-51 или оставляйте заявку на сайте. <br /> 
          Мы поможем вам подобрать необходимую сантехнику по вашему бюджету. <br /> 
          Ощутите комфорт и уют в собственной ванной комнате!</p>
          <h6>Приятных Вам покупок!</h6>
        </div>
        <img src={we} alt="" />
        <img src={we1} alt="" />
        <img src={we11} alt="" />

      </div>
      <div className='info4'>
        <img src={sms} alt="" />
        <button>Отправьте нам сообщение</button>
      </div>
   </div>
  )
}






export default About
