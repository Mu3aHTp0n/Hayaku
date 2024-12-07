import { createPortal } from "react-dom"
import { useAtomValue } from "jotai";
import Modal from "./Modal.jsx"
import {uiAtom} from "./state.jsx";

export default function Overlay({title, children}) {
    const ui = useAtomValue(uiAtom)
    return (
        createPortal(
            <>
                {ui.modal &&
                    <Modal modalTitle={title}>
                        <form className={'modal__content'} onSubmit={event => event.preventDefault()}>
                            {children}
                        </form>
                    </Modal>}
            </>,
            document.body
        )
    )
}