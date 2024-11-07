import './app/styles/Rental.css'
import DropDownItem from "./DropDownItem.jsx";
import {useState} from "react";

export default function DropDownMenu() {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
        console.log(isActive);
        const dropdownMenu = document.querySelector(".dropdown__title");
        isActive ? dropdownMenu.classList.add("active") : dropdownMenu.classList.remove("active");
    }

    return (
        <>
            <div className="dropdown">
                <h3 className={`${isActive ? 'active' : null} dropdown__title`} onClick={toggleActive}>История проката</h3>
                {/* Мб сделать без прокидывания доп класса, а просто через усовную прорисовку, но тогда хз что делать с анимацией */}
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