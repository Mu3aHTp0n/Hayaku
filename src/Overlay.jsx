import { createPortal } from "react-dom"
import { useAtomValue } from "jotai";
import Modal from "./Modal.jsx"
import {uiAtom} from "./state.jsx";

export default function Overlay() {
    const ui = useAtomValue(uiAtom)
    return (
        createPortal( 
            <>
                {ui.modal && <Modal modalTitle={"Modal title"}/>}
            </>,
            document.body
        )
    )
}