import s from './Mts.module.css';
import { NavLink, useHistory } from 'react-router-dom';



const Mts = () => {

    const history = useHistory();

    const routeChange = () =>{ 
        let path = `/`; 
        history.push(path);
      }

    return (
        <div className={s.item}>
            <form action="#">
                <h4>Детали платежа</h4>
                <p>«МТС. На шаг впереди»</p>
                <div className={s.payment}>
                    <p>Номер телефона: </p>
                    <input className={s.payment__input} type='tel' pattern='/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/' ></input>
                    <p >Введите сумму:</p>
                    <input className={s.payment__input} type="number"  min="1" max="1000" />
                    {/* <NavLink className={s.item__button} to="/Header">Оплатить</NavLink> */}
                    <input className={s.item__button} type='submit' value='Оплатить' ></input>
                </div>
            </form>
        </div>


    )
};

export default Mts;