import {useEffect, useState} from "react";

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

    const [rentalInfo, setRentalInfo] = useState()
    const [username, setUsername] = useState('')

    function handleData(rentalData) {
        setRentalInfo(rentalData);
    }

    useEffect(() => {
        if (rentalInfo) {
            console.log("Обновленная информация о ренте: ", rentalInfo);
        }
    }, [rentalInfo]);

    function handleClick(i) {
        setIsActive(isActive === i ? null : i);
    }
    function addRental() {
        rental.addRental(clientId, cassetteId);
    }
    function getUsername(username) {
        setUsername(username);
    }
    function checkInfo() {
        console.log("Информация о прокатах: ", rentalInfo);
    }
    function changeClientId(clieId) {
        setClientId(clieId);
    }
    function changeCassetteId(cassId) {
        setCassetteId(cassId);
    }

    return (
        <>
            <Overlay title={'Добавление проката'} footerContent={
                <>
                </>
            }>
                <Search sendClientId={changeClientId} currentPage={'rentalModalClient'} />
                <input type='text' placeholder={'id Клиента'}
                       value={clientId} onChange={event => setClientId(event.target.value)} required/>
                <Search sendCassetteId={changeCassetteId} currentPage={'rentalModalCassette'} />
                <input type='text' placeholder={'id Кассеты'}
                       value={cassetteId} onChange={event => setCassetteId(event.target.value)} required/>
                <input type={"submit"} className={'form__button'} value={"Submit"} onClick={() => addRental()}/>
            </Overlay>
            <Header/>
            <Search sendData={handleData} sendUsername={getUsername} currentPage={'rental'} />
            <Window>
                <section className="rental">
                    <article className="rental-item">
                        <p className="rental__client" onClick={checkInfo}>{ username }</p>
                        { username !== '' && <DropDownMenu active={isActive === 0} onMenuClick={() => handleClick(0)} rentalInformation={rentalInfo} /> }
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