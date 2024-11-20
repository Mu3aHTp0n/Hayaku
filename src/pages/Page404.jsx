import useTheme from "../app/providers/ThemeProvider.jsx";

import '../app/styles/Page404.css'

export default function Page404() {
    useTheme();

    return (
        <div className={'page404'}>
            <div className={'stars'}>
                <section className="page404-container">
                    <div className="page404-container-left">
                        <img draggable={"false"} src='src/assets/LeftSide.png' className="left-side" />
                    </div>
                    <div className="page404-container-right">
                        <img draggable={"false"} src='src/assets/RightSide.png' className="right-side" />
                    </div>
                </section>
                <article className="page404-content">
                    <h1 style={{color: '#D7D5E4', fontSize: '8em'}}>404</h1>
                    <h2 style={{color: '#9E9BB2', fontSize: '4em'}}>Страница не найдена!</h2>
                    <a  style={{fontSize: '3.5em', fontWeight: 700}} href='/'>Вернуться на главную</a>
                </article>
            </div>
        </div>
    )
}