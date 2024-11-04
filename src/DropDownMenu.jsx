import './app/styles/Rental.css'
import DropDownItem from "./DropDownItem.jsx";

export default function DropDownMenu() {
    return (
        <>
            <div className="dropdown">
                <h3 className="dropdown__title">История проката</h3>
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