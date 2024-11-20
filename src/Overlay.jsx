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
                    {children}
                </Modal>}
            </>,
            document.body
        )
    )
}