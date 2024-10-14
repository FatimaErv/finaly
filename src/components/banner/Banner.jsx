import React from 'react'
import './Banner.scss'
import newboth from '../../assets/image/newboth.png'
import axes2 from '../../assets/image/axes2.png'
import riho from '../../assets/image/riho.png'
import { Carousel } from 'react-bootstrap'


function Banner() {
  return (
    <div>

      <div className='new-both container'>
        

        <div className='banner-carousels'>
        <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={newboth} alt="" />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={axes2} alt="" />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={riho} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={newboth} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={axes2} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={riho} alt="" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </div>
      
        <div className='new-both2'>
            <h3>Скидки на мебель для ванной комнаты</h3>
            <h4>до 10%</h4>
            <button>Подробнее</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
