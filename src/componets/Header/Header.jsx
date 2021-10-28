import s from './Header.module.css';


const Header = () => {
    return <header className={s.header}>
        <h3 className={s.header__title}>Платежный терминал</h3>
        <img className={s.header__image} src="https://belbike.ru/wp-content/uploads/2021/02/png-transparent-envelope-paper-illustration-computer-icons-email-email-miscellaneous-angle-triangle-1.png" alt="трубка" />
    </header>
}

export default Header;