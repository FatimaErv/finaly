import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import "./Item.scss"
import stars from "../../assets/svg/stars.svg"
import hit from "../../assets/svg/hit.svg"
import vanna from "../../assets/image/vanna.png"
import detail from "../../assets/image/detail.png"
import vannaDetail from "../../assets/image/vannaDetail.png"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addCart } from '../../redux/cart/cartSlice'

const API = "https://66fd3da2c3a184a84d199c30.mockapi.io/products"




function ItemProduct() {
  const{list} = useSelector ((state) => state.cart)

  const dispatch = useDispatch();

  const {id} = useParams()
  const [data, setData] = useState({})
  const [image,setImage] = useState("")
  const [title,setTitle] = useState("")
  const [price,setPrice] = useState()


  

  async function getProductById() {
    try {
      const res = await axios.get(`${API}/${id}`)
      console.log(res);
      setData(res.data)
      setImage(res.data.image)
      setTitle(res.data.title)
      setPrice(res.data.price)

      
      
    } catch (error) {
      console.log(error);
      
    }
    
  }
  useEffect (()=>{getProductById()},[])
  return (
    <div>

      <div className='tovar container'>
        <div className='tovar-left'>
          <div className='top'>
          <img src={stars} alt="" />
          <img src={hit} alt="" />
            
          </div>
          <div className='center'>
            <img src={image} alt="" />
            
          </div>
          <div className='details'>
            {data.images?.map((item)=>(
              <div onClick={()=>setImage(item)} className="img">

                <img src={item} alt="" />
              </div>

            ))}
      
          </div>
        </div>
        <div className='tovar-right'>
          <h3>{title}</h3>
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
            <div className='add'>
              <h3>{price}$</h3>
             

              {/* <button className='btn1'>В корзину</button> */}
              <button className='btn1' onClick={() =>dispatch(addCart(list))}>В корзину</button> 
              
              
              <button className='btn2'>Купить в один клик</button>
              <h6>Товар в наличии</h6>
            </div>

            </div>
          </div>
        </div>
      </div>
    
    </div>
      
  )
}

export default ItemProduct
