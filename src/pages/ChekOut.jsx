import React from 'react'
import "./CheckOut.scss"
import cartnew from '../assets/image/category5.png'
import vectortop from '../assets/svg/vectortop.svg'
import vectorbottom from '../assets/svg/vectorbottom.svg'


function ChekOut() {
  return (
    <div>
      <div className='chek'>
        <div className='chek-top'>
            <h2>Купить в 1 клик</h2>
        </div>
      <div className='prices'>
                    <div className='title'>
                <img src={cartnew} alt="" />
                <p>kvvhucf</p>
                    </div>
                <div className='count'> 
                <h5>ffff</h5> 
                <div className='icons'> 
                 <img src={vectortop} alt="" /> 
                    <img src={vectorbottom} alt="" /> 
                </div> 
               </div> 
                    
            
            </div>
            <div className='number'>
                <div>1700$</div>
                <input placeholder='+7(___) ___ - __ - __' type="text" />
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
