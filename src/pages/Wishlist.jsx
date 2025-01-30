import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';  // react-icons'тан heart иконкасын импорттоо
import "./wishlist.scss";
import { useDispatch, useSelector } from 'react-redux';
import { removewish, addWish } from '../redux/wishlist/wishSlice';
import { addCart } from '../redux/cart/cartSlice';
import { Link } from 'react-router-dom';

function Wishlist() {
  const { items } = useSelector((state) => state.wishlist); // Redux'tен wishlist items алуу
  const [likedItems, setLikedItems] = useState([]); // LocalStorageтен алынган лайк болгон товарлардын ID'лери
  const dispatch = useDispatch();

  // LocalStorageтен алынган лайк абалдарын алуу
  useEffect(() => {
    const storedLikes = JSON.parse(localStorage.getItem('likedProducts')) || [];
    setLikedItems(storedLikes);

    // localStorageтен алынган товарлардын id'лерин Reduxке кошуу
    storedLikes.forEach(productId => {
      const existingProduct = items.find(item => item.id === productId);
      if (existingProduct) {
        dispatch(addWish(existingProduct)); // Product кошуу
      }
    });
  }, [dispatch, items]);

  // Лайк басканда localStorageке сактоо жана Reduxке кошуу/алып салуу
  const toggleLike = (productId) => {
    let updatedLikes = [...likedItems];
    if (updatedLikes.includes(productId)) {
      updatedLikes = updatedLikes.filter(id => id !== productId); // Лайкты алып салуу
      dispatch(removewish(productId)); // Redux wishlistтен алып салуу
    } else {
      updatedLikes.push(productId); // Лайк кошуу
      const productToAdd = items.find(item => item.id === productId);
      dispatch(addWish(productToAdd)); // Redux wishlistке кошуу
    }
    localStorage.setItem('likedProducts', JSON.stringify(updatedLikes)); // localStorageке сактоо
    setLikedItems(updatedLikes); // Статусту жаңыртуу
  };

  // Продукцияларды Redux жана localStorage синхрондоштуруу
  useEffect(() => {
    // Продукцияларды localStorageке сактоо
    const productsInWishlist = items.map(item => item.id);
    localStorage.setItem('wishlistProducts', JSON.stringify(productsInWishlist));
  }, [items]);

  return (
    <div className="wishlist container">
      <Link to="/">
        <h6>Главная / Личный кабинет</h6>
      </Link>
      <h2>Избранные товары</h2>
      <div className="products">
        <div className="wishs">
          {items?.map((data) => (
            <div key={data.id} className="wish-prod">
              <Link to={`/detailProduct/${data.id}`}>
                <img src={data.image} alt={data.title} />
              </Link>
              <div className="product-content">
                <h5>{data.title}</h5>
                <p>В наличии</p>
                <h4>122$</h4>
                <div className="shop">
                  <button onClick={() => dispatch(addCart(data))}>В корзину</button>
                  <div className="icons">
                    <FaHeart
                      onClick={() => toggleLike(data.id)}  // Лайк абалына жараша
                      size={24}
                      color={likedItems.includes(data.id) ? 'red' : 'gray'} // Лайк абалына жараша түс өзгөрөт
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
