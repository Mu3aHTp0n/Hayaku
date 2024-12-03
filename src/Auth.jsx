import {useState} from "react";
import '../src/app/styles/Modal.css'

export default function AuthWindow ({isShow, setDisable}) {
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    function auth() {
        if (login === 'admin' && password === 'passw0rd') {
            alert('Вы успешно авторизованы');
            setDisable(false);
        } else {
            alert('Неверный логин или пароль');
        }
    }

    return (
        <>
            {
                isShow && (
                    <article className={`modal`}>
                        <section className={"modal-body"} onClick={e => e.stopPropagation()}>
                            <header className={`modal__header`}>
                                <h3>Окно авторизации</h3>
                            </header>
                            {/*<form className={'modal__content'} onSubmit={event => event.preventDefault()}>*/}
                            <div className={'modal__content'}>
                                <div className={'form__group'}>
                                    <label className={'form__label'}>
                                        Логин
                                    </label>
                                    <input className={'form__input'}
                                           type={'text'}
                                           value={login}
                                           onChange={event => setLogin(event.target.value)}/>
                                </div>
                                <div className={'form__group'}>
                                    <label className={'form__label'}>
                                        Пароль
                                    </label>
                                        <input className={'form__input'}
                                               type={'password'}
                                               value={password}
                                               onChange={event => setPassword(event.target.value)}/>
                                </div>
                                <input className={'form__button'} type={'submit'} value={'Войти'} onClick={auth}/>
                            {/*</form>*/}
                            </div>
                        </section>
                    </article>
                )
            }
        </>
    )
}