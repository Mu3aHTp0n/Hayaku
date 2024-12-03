import { createPortal } from "react-dom"
import { useAtomValue } from "jotai";
import Modal from "./Modal.jsx"
import {uiAtom} from "./state.jsx";

export default function Overlay({title, children, footerContent}) {
    const ui = useAtomValue(uiAtom)
    return (
        createPortal(
            <>
                {ui.modal &&
                    <Modal modalTitle={title}>
                        <form className={'modal__content'} onClick={event => event.preventDefault()}>
                            {children}
                        </form>
                        {/*<footer className={`modal__footer`}>*/}
                        {/*    {footerContent}*/}
                        {/*</footer>*/}
                    </Modal>}
            </>,
            document.body
        )
    )
}