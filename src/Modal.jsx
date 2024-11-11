import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useSetAtom} from "jotai";
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import {uiAtom} from "./state.jsx";
import './app/styles/Modal.css'

export default function Modal({modalTitle}) {
    const setUi = useSetAtom(uiAtom);
    return (
        <>
            <article className={`modal`}>
                <section className={"modal-body"}>
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