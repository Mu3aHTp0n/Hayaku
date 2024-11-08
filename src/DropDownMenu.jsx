import './app/styles/Rental.css'
import DropDownItem from "./DropDownItem.jsx";
// import {useState} from "react";

export default function DropDownMenu({active, onMenuClick}) {
    // const [isActive, setIsActive] = useState(active);

    // const toggleActive = () => {
    //     setIsActive(!isActive);
    // }

    return (
        <>
            <div className="dropdown">
                <h3 className={`${active ? 'active' : ''} dropdown__title`} onClick={onMenuClick} >История проката</h3>
                {/* В теории я должен получить список с бека, потом просто через маппинг раскидать это сюда */}
                <ul className="dropdown__body">
                    <DropDownItem />
                    <DropDownItem />
                    <DropDownItem />
                </ul>
            </div>
        </>
    )
}