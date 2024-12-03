import {useState} from "react";
import { rental } from './services/Rental.jsx'

import './app/styles/Rental.css'

export default function DropDownItem({sendRentalInfo}) {
    const [status, changeStatus] = useState(sendRentalInfo?.rentalStatus)

    function handleClick() {
        status === "ACTIVE" ? changeStatus("RETURNED") : changeStatus("ACTIVE")
        rental.changeStatus(sendRentalInfo.id);
    }

    return (
        <>
            <li className="dropdown__item" onClick={handleClick}>
                <h4 className="cassette__title">{ sendRentalInfo.name }</h4>
                <p className="cassette__status" >{ status }</p>
            </li>
        </>
    )
}