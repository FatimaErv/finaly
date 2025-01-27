import React, { useState } from 'react';
import './pay.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Pay() {
    const { list } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const [street, setStreet] = useState({
        one: '',
        tree: '',
        text: '',
        block: '',
        title: '',
        two: '',
    });

    const checkPrice = (p, d) => {
        return (p - (p * (d / 100))).toFixed(0);
    };

    let result = list.reduce((sub, item) => sub + item.price * item.quantity, 0);

    const handleClick = () => {
        // Check if all fields are filled
        if (!street.one || !street.tree || !street.block || !street.title || !street.two) {
            toast.error("Пожалуйста, заполните все поля адреса.");
        } else {
            toast.success("Заказ оформлен!");
            setStreet({
                one: '',
                tree: '',
                text: '',
                block: '',
                title: '',
                two: '',
            });
        }
    };

    return (
        <div className='pay container'>
            <div className='adress'>
                <h3>Адрес доставки</h3>
                <input type="text" placeholder='Улица' value={street.one} onChange={(event) => setStreet({ ...street, one: event.target.value })} />
                <div className='four'>
                    <input type="text" placeholder='Дом/Корпус' value={street.tree} onChange={(event) => setStreet({ ...street, tree: event.target.value })} />
                    <input type="text" placeholder='Кв./Офис' value={street.block} onChange={(event) => setStreet({ ...street, block: event.target.value })} />
                    <input type="number" placeholder='Подъезд' value={street.title} onChange={(event) => setStreet({ ...street, title: event.target.value })} />
                    <input type="number" placeholder='Код домофона' value={street.two} onChange={(event) => setStreet({ ...street, two: event.target.value })} />
                </div>
                <input type="text" placeholder='Комментарий по доставке' value={street.text} onChange={(event) => setStreet({ ...street, text: event.target.value })} />
            </div>

            <div className='order'>
                <h3>Ваш заказ</h3>
                <div className='order-pay'>
                    <div className='order-price'>
                        <h6>Стоимость товаров:</h6>
                        <h6>{result}$</h6>
                    </div>
                    <div className='order-price'>
                        <h6>Доставка:</h6>
                        <h6>50$</h6>
                    </div>
                    <div className='order-price'>
                        <h6>Итого:</h6>
                        <h6>{result + 50}$</h6>
                    </div>
                    <button onClick={handleClick}>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
}

export default Pay;
