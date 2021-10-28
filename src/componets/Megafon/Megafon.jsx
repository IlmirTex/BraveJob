import s from './Megafon.module.css';
import { NavLink } from 'react-router-dom';



const Megafon = () => {
    return (
        <div className={s.item}>
            <form action="#">
                <h4>Детали платежа</h4>
                <p>«МегаФон. Начинается с тебя»</p>
                <div className={s.payment}>
                    <p>Номер телефона: </p>
                    <input className={s.payment__input} type='tel' name='tel' placeholder="(___) ___ __ __"></input>
                    <p >Введите сумму:</p>
                    <input className={s.payment__input}></input>
                    <NavLink className={s.item__button} to="/Header">Оплатить</NavLink>
                </div>
                
            </form>
        </div>


    )
};

export default Megafon;