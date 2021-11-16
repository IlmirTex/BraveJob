import React, {useState} from 'react';
import s from './Megafon.module.css';


const Megafon = () => {
       const randomNumber = () => {
        let randomIssue = Math.random() * (10 - 5) + 3;
          if(randomIssue <5){
              alert('Успешно')
          }if(randomIssue >5){
              alert('В данный момент оплата недоступна')
          }
      }

    const [isLoading, setLoading] = useState(false);
    const fetchData = () => {
        setLoading(true);
        setTimeout(() => { setLoading(false); randomNumber()},2000)
    }
    return (
        <div className={s.item}>
            <form action="#">
                <h4>Детали платежа</h4>
                <span>«МегаФон. Начинается с тебя»</span>
                <div className={s.payment}>
                    <p>Номер телефона: <br /><i>8-921-234-12-54</i></p>
                    <input className={s.payment__input} type='tel' pattern='^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$' ></input>
                    <p >Введите сумму: <br /><i>(1 - 1000руб.)</i></p>
                    <input className={s.payment__input} type="number" min="1" max="1000" />
                     {isLoading ? "" :(<input className={s.item__button} onClick={fetchData} type='submit' value='Оплатить' ></input>)}
                     {isLoading ? <div><img style={{width: "30px", height: "30px" , marginTop: "10px"}} src="https://minecraft-pe.com/wp-content/themes/minecraft-pe/spinner.gif" /> </div> : '' 
                     }
                </div>
            </form>
        </div>


    )
};

export default Megafon;
