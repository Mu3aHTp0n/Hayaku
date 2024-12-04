import './app/styles/Header.css'
import useTheme from "./app/providers/ThemeProvider.jsx";
import {Link} from "react-router-dom";

export default function Header() {
    // 死にたい
    const { theme, setTheme } = useTheme()
    function changeTheme() {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <a className="logo-link" onClick={changeTheme}>
                        <img className="logo" src="../src/assets/logo.jpg" alt="Логотип"/>
                    </a>
                    <nav className="navigation">
                        <ul className="list">
                            <li className="list__item">
                                <Link to="/Client" className="list__link">Клиенты</Link>
                            </li>
                            <li className="list__item">
                                <Link to="/Cassette" className="list__link">Видеокассеты</Link>
                            </li>
                            <li className="list__item">
                                <Link to="/Rental" className="list__link">Прокаты</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}