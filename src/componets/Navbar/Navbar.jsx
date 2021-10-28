import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return <nav className={s.nav}>
        <h3 className={s.title}>Выберите оператора</h3>
        <div className={s.nav__menu}>
            <NavLink to="/Megafon" className={s.item__m}>Мегафон</NavLink>
            <NavLink to="/Beeline" className={s.item__b}>Билайн</NavLink>
            <NavLink to="/Mts" className={s.item__mt}>МТС</NavLink>
            <div className={s.arrow}>
                <img  src="https://img.flaticon.com/icons/png/512/35/35442.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="стрелка" />
            </div>
            
        </div>

    </nav>
}

export default Navbar;