import './app/styles/Rental.css'
import DropDownItem from "./DropDownItem.jsx";
import {useState, useEffect} from "react";

export default function DropDownMenu({active, onMenuClick, rentalInformation = []}) {
    const [dropdownItems, setDropdownItems] = useState();
    useEffect(() => {
        if (rentalInformation === null) {
            setDropdownItems([]);
            return undefined;
        }
        const dropdowns = rentalInformation.map(dropdownItem => (
            <DropDownItem key={dropdownItem.id} sendRentalInfo={dropdownItem} />
        ))
        setDropdownItems(dropdowns);
    }, [rentalInformation]);

    return (
        <>
            <div className="dropdown">
                <h3 className={`${active ? 'active' : ''} dropdown__title`} onClick={onMenuClick} >История проката</h3>
                {/* В теории я должен получить список с бека, потом просто через маппинг раскидать это сюда */}
                <ul className="dropdown__body">
                    { dropdownItems }
                </ul>
            </div>
        </>
    )
}