import React from 'react'
import axes from "../../assets/image/axes.png"
import axes2 from '../../assets/image/axes2.png'
import axes3 from '../../assets/image/axes3.png'
import './Axesuar.scss'

function Axesuar() {
  return (
    <div className='axes container'>
        <div className='axes-top'>
            <h1>Stock</h1>
            <div className='axes-flex'>
                <h3>Акции</h3>
                <h5>Все акции</h5>
            </div>
        </div>
        <div className='axesuar'>
            <div className='axesuar-product'>
                <img src={axes} alt="" />
            </div>
            <div  className='axesuar-product'>
                <img src={axes2} alt="" />
            </div>
            <div className='axesuar-product'>
                <img src={axes3} alt="" />
            </div>

        </div>
      
    </div>
  )
}

export default Axesuar
