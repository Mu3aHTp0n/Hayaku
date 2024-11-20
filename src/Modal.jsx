import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useSetAtom} from "jotai";
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import {uiAtom} from "./state.jsx";
import './app/styles/Modal.css'

export default function Modal({modalTitle = 'Заголовок модального окна', children, footerContent}) {
    const setUi = useSetAtom(uiAtom);
    return (
        <>
            <article className={`modal`} onClick={
                () =>
                    setUi((prev) => ({
                        ...prev,
                        modal: null,
                    }))
            }>
                <section className={"modal-body"} onClick={e => e.stopPropagation()}>
                    <header className={`modal__header`}>
                        <h3>{modalTitle}</h3>
                        <i onClick={
                            () =>
                                setUi((prev) => ({
                                    ...prev,
                                    modal: null,
                                }))
                        }>
                            <FontAwesomeIcon icon={faXmark} />
                        </i>
                    </header>
                    <main className={`modal__content`}>

                    </main>
                    <footer className={`modal__footer`}>

                    </footer>
                </section>
            </article>
        </>
    )
}