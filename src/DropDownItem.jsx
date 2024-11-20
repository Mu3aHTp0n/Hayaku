import {useState} from "react";
import { rental } from './services/Rental.jsx'

import './app/styles/Rental.css'

export default function DropDownItem() {
    function handleClick() {
        status === "Активно" ? changeStatus("Вернул") : changeStatus("Активно")
        rental.changeStatus()
    }
    const [status, changeStatus] = useState("Активно")

    return (
        <>
            <li className="dropdown__item" onClick={handleClick}>
                <h4 className="cassette__title">Fight Club</h4>
                <p className="cassette__status" >{status}</p>
            </li>
        </>
    )
}