import {useState} from "react";

import '../app/styles/Rental.css'

import Search from "../SearchBar.jsx";
import Window from "../Window.jsx";
import DropDownMenu from "../DropDownMenu.jsx";
import Overlay from "../Overlay.jsx";
import {useSetAtom} from "jotai";
import {uiAtom} from "../state.jsx";
import Header from "../Header.jsx";
import {rental} from "../services/Rental.jsx";

export default function RentalPage() {
    const [isActive, setIsActive] = useState(null);
    const setUi = useSetAtom(uiAtom)

    const [clientId, setClientId] = useState();
    const [cassetteId, setCassetteId] = useState();

    const [username, setUsername] = useState()
    const [rentalInfo, setRentalInfo] = useState()

    function handleData(rentalData) {
        setRentalInfo(rentalData)
    }

    function handleClick(i) {
        setIsActive(isActive === i ? null : i);
    }
    function addRental() {
        rental.addRental(clientId, cassetteId);
    }

    return (
        <>
            <Overlay title={'Добавление проката'} footerContent={
                <>
                </>
            }>
                <input type='text' placeholder={'id Клиента'}
                       value={clientId} onChange={event => setClientId(event.target.value)} required/>
                <input type='text' placeholder={'id Кассеты'}
                       value={cassetteId} onChange={event => setCassetteId(event.target.value)} required/>
                <input type={"submit"} className={'form__button'} value={"Submit"} onClick={() => addRental()}/>
            </Overlay>
            <Header/>
            <Search sendRentalData={handleData} currentPage={'rental'}/>
            <Window>
                <section className="rental">
                    {/* TODO: получение списка клиентов и прокатов с бека */}
                    <article className="rental-item">
                        <p className="rental__client">{username}</p>
                        <DropDownMenu active={isActive === 0} onMenuClick={() => handleClick(0)} />
                    </article>
                </section>
                <section className="interaction">
                    <button onClick={() => setUi(
                        (prev) => ({
                            ...prev,
                            modal: true
                        })
                    )}>Добавить Тайлера
                    </button>
                </section>
            </Window>
        </>
    );
}