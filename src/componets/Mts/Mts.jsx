import s from './Mts.module.css';
import { NavLink, useHistory } from 'react-router-dom';



const Mts = () => {

    return (
        <div className={s.item}>
            <form action="#">
                <h4>Детали платежа</h4>
                <span>«МТС. На шаг впереди»</span>
                <div className={s.payment}>
                    <p>Номер телефона: <br/><i>8-919-234-12-54</i></p>
                    <input className={s.payment__input} type='tel' pattern='^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$' ></input>
                    <p >Введите сумму: <br/><i>(0 - 1000руб.)</i></p>
                    <input className={s.payment__input} type="number"  min="1" max="1000" />
                    <input className={s.item__button} type='submit' value='Оплатить' ></input>
                </div>
            </form>
        </div>


    )
};

export default Mts;