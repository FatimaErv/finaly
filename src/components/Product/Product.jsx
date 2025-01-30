import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa'; // react-icons'тан heart иконкасын импорттоо
import "./product.scss";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { addCart } from '../../redux/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { addWish, removewish } from '../../redux/wishlist/wishSlice';

const API = "https://66fd3da2c3a184a84d199c30.mockapi.io/products";

function Product() {
  const [products, setProducts] = useState([]);
  const [likedItems, setLikedItems] = useState([]); // LocalStorageтен алынган лайк болгон товарлардын ID'лери
  const dispatch = useDispatch();

  // Продукцияларды жүктөө
  async function getProduct() {
    try {
      const res = await axios.get(API);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct();
    const storedLikes = JSON.parse(localStorage.getItem('likedProducts')) || [];
    setLikedItems(storedLikes);
  }, []);

  // Лайк басканда localStorage'ке сактоо
  const toggleLike = (productId) => {
    let updatedLikes = [...likedItems];
    if (updatedLikes.includes(productId)) {
      updatedLikes = updatedLikes.filter(id => id !== productId); // Лайкты алып салуу
      dispatch(removewish(productId)); // Redux wishlistтен алып салуу
    } else {
      updatedLikes.push(productId); // Лайк кошуу
      dispatch(addWish({ id: productId })); // Redux wishlistке кошуу
    }
    localStorage.setItem('likedProducts', JSON.stringify(updatedLikes)); // localStorageке сактоо
    setLikedItems(updatedLikes); // Статусту жаңыртуу
  };

  return (
    <div>
      <div className="products container">
        {products?.map((item) => (
          <div key={item.id} className="product">
            <Link to={`/detailProduct/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <div className="sale">{item.discount}%</div>
            </Link>
            <div className="product-content">
              <h5>{item.title}</h5>
              <h6>Бранд: {item.brand}</h6>
              <h6>Страна: Швейцария</h6>
              <p>В наличии</p>
              <div className="price">
                <h4>{item.price}$</h4>
                <h5>{(item.price - (item.price * (item.discount / 100))).toFixed(2)}$</h5>
              </div>
              <div className="shop">
                <button onClick={() => dispatch(addCart(item))}>В корзину</button>
                <div className="icons">
                  {/* Лайк иконкасы */}
                  <FaHeart
                    onClick={() => toggleLike(item.id)} // Лайк басканда функция иштейт
                    className={`img1 ${likedItems.includes(item.id) ? 'liked' : ''}`} 
                    size={24} 
                    color={likedItems.includes(item.id) ? 'red' : 'gray'} // Лайк абалына жараша түс өзгөрөт
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
