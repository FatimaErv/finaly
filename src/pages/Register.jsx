import React, {useState} from 'react'
import "./Register.scss"
import { auth } from '../firabase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

function Register() {
    const [user, setUser] = useState({email:"", password: ""})
    const [active, setActive] = useState(false)

    function handler (event) {
        const {value, name} = event.target

        setUser({ ...user, [name]: value });
    }


    async function createUser() {
        try {
            const res = await createUserWithEmailAndPassword(
              auth,
              user.email,
              user.password
            );
            if(res) {
              toast.success("Пользователь успешно создан")
            }

            console.log(res);
            
           
          } catch (error) {
            console.log(error);
           toast.error("Пользователь уже существует")
          }

        
    }
  return (
    <div className='reg'>
        <div className='register'>
            <div className='register-top'>
                <p>Главная/Регистрация</p>
                <h2>Регистрация</h2>
                <span>Registration</span>
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
                    <input placeholder='Имя' type="text"  /> <br />
                    <input placeholder='E-mail' type="email" value={user.email} name="email"
          onChange={handler}/> <br />
                    <input placeholder='Телефон' type="number" /> <br />
                    <input placeholder='Пароль' type="password" value={user.password} name="password"
          onChange={handler}/> <br />
                    <button  onClick={() => createUser()}>Сохранить</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Register
