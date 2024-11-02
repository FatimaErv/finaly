import React from "react"
import "./Footer.scss"
import gidrator from "../../assets/image/gidrator.png"
import wk from "../../assets/image/wk.png"
import insta from "../../assets/image/insta.png"
import fbook from ".././../assets/image/fbook.png" 
import visa from "../../assets/visa.svg"
import mastercard from "../../assets/mastercard.svg"
import mir from "../../assets/mir.svg"
import tel from "../../assets/tel.svg"
import pochta from "../../assets/pochta.svg"
import loca from "../../assets/loca.svg"


function Footer() {
    return (
        <div className="new-footer">
            <div className="footer">
                <div className="footer1">
                    <div className="logo">
                    <img src={gidrator} alt="" />
                    </div>
                    <p>Мы в социальных сетях</p>
                    <div className="logo-img">
                        <img src={wk} alt="" />
                        <img src={insta} alt="" />
                        <img src={fbook} alt="" />
                    </div>
                    <p>Мы принимаем</p>
                    <div className="visa">
                        <img src={visa} alt="" />
                        <img src={mastercard} alt="" />
                        <img src={mir} alt="" />
                    </div>
                </div>

                <div className="footer2">
                    <h1>ПОКУПАТЕЛЮ</h1>
                    <p>Доставка</p>
                    <p>Оплата</p>
                    <p>Гарантии и возврат</p>
                    <p>Производители</p>
                    <p>Статьи</p>
                </div>
                <div className="footer2">
                <h1>КОМПАНИЯ</h1>
                    <p>О нас</p>
                    <p>Контакты</p>
                    <p>Пользовательское соглашение</p>
                    <p>Политика конфиденциальности</p>
                    <p>Обратная связь</p>
                </div>
                <div className="footer2">
                    <h1>КОНТАКТЫ</h1>
                    <div className="coot">
                        <img src={tel} alt="" />
                    <p>+996 779 47-70-51</p>
                    </div>
                    <div className="coot">
                    <img src={pochta} alt="" />
                    <p>zakaz@gidratop.ru</p>
                    </div>
                    <div className="coot">
                    <img src={loca} alt="" />
                    <p>г. Санкт-Петербург, пр-кт.    Невский, д.39</p>
                    </div>
                </div>
            </div>
            <div className="podpis">
                <div className="podpis2">
            <input placeholder="Введите e-mail" type="text" />
            <button>ПОДПИСАТЬСЯ</button>
                </div>
            <p>Станьте нашим подписчиком, чтобы быть в курсе информации о новинках и специальных предложениях.</p>
            </div>
        </div>
    )
}
export default Footer;