import './app/styles/Header.css'
import useTheme from "./app/providers/ThemeProvider.jsx";

export default function Header() {
    // 死んたい
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
                                <a href="/Client" className="list__link">Клиенты</a>
                            </li>
                            <li className="list__item">
                                <a href="/Cassette" className="list__link">Видеокассеты</a>
                            </li>
                            <li className="list__item">
                                <a href="/Rental" className="list__link">Прокаты</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}