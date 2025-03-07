import React,{useState} from 'react'
import './Register.scss'
import { auth } from '../firabase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'


function Login() {
    const [user, setUser] = useState({email:"",password:""})
    const [active, setActive] = useState(false)

    function handler (event){
        const{value, name} = event.target;
        setUser({...user, [name]:value});

    }
    async function createUser() {
        try {
            const res = await signInWithEmailAndPassword(
                auth, user.email, user.password
            );
            if(res){
                toast.success("Вход выполнен успешно")
            }
            
        } catch (error) {
            console.log(error);
           toast.error("Неправильный логин или пароль")
        }
        
    }
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
                    
                    <input placeholder='E-mail' type="email" value={user.email}  name="email" onChange={handler} /> <br />
                    
                    <input placeholder='Пароль' type="password" value={user.password} name='password' onChange={handler} /> <br />
                    <button onClick={()=>createUser()}>Вход</button>
                </div>
            </div>
        </div>
      
    </div>
      
    </div>
  )
}

export default Login
