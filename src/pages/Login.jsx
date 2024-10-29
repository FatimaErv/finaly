import React from 'react'
import './Register.scss'

function Login() {
  return (
    <div>
         <div className='reg'>
        <div className='register'>
            <div className='register-top'>
                <p>Главная/Вход</p>
                <h2>Вход</h2>
                <span>Login</span>
            </div>
            <div className='register-main'>
                <div className='register-left'>
                    <p>Профиль</p>
                    <p>Корзина</p>
                    <p>Заказы</p>
                    <p>Интересные товары</p>
                    <p>Избранное</p>
                    <p>Сравнение</p>


                </div>
                <div className='register-right'>
                    
                    <input placeholder='E-mail' type="email" /> <br />
                    
                    <input placeholder='Пароль' type="password" /> <br />
                    <button>Вход</button>
                </div>
            </div>
        </div>
      
    </div>
      
    </div>
  )
}

export default Login
