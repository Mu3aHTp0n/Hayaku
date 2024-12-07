import {useState} from "react";
import {useSetAtom} from "jotai";
import {uiAtom} from "../state.jsx";

import '../app/styles/Rental.css'

import Search from "../SearchBar.jsx";
import Window from "../Window.jsx";
import DropDownMenu from "../DropDownMenu.jsx";
import Overlay from "../Overlay.jsx";
import Header from "../Header.jsx";
import {rental} from "../services/Rental.jsx";

export default function RentalPage() {
    const [isActive, setIsActive] = useState(null);
    const setUi = useSetAtom(uiAtom)

    const [client, setClient] = useState({});
    const [cassette, setCassette] = useState({});

    const [rentalInfo, setRentalInfo] = useState()
    const [username, setUsername] = useState('')

    function handleData(rentalData) {
        setRentalInfo(rentalData);
    }

    function handleClick(i) {
        setIsActive(isActive === i ? null : i);
    }
    function addRental() {
        rental.addRental(client.id, cassette.cassetteId)
            .then(() => {
                setClient({});
                setCassette({});
            });
    }
    function getUsername(username) {
        setUsername(username);
    }
    function checkInfo() {
        console.log("Информация о прокатах: ", rentalInfo);
    }
    function changeClientId(clieId) {
        setClient(clieId);
    }
    function changeCassetteId(cassId) {
        setCassette(cassId);
    }

    return (
        <>
            <Overlay title={'Добавление проката'}>
                <Search sendClientId={changeClientId} currentPage={'rentalModalClient'} />
                { client.name && <p>{client.surname + " " + client.name + " " + client.patronymic}</p> }
                <input className='hiden' type='text' placeholder={'id Клиента'}
                       value={client.id} onChange={event => setClient(event.target.value)} required/>
                <Search sendCassetteId={changeCassetteId} currentPage={'rentalModalCassette'} />
                { cassette.name && <p>{cassette.name}</p> }
                <input className='hiden' type='text' placeholder={'id Кассеты'}
                       value={cassette.cassetteId} onChange={event => setCassette(event.target.value)} required/>
                <button className={'form__button'} onClick={() => addRental()}>Добавить</button>
            </Overlay>
            <Header/>
            <Search sendData={handleData} sendUsername={getUsername} currentPage={'rental'} />
            <Window>
                <section className="rental">
                    <article className="rental-item">
                        <p className="rental__client" onClick={checkInfo}>{ username }</p>
                        { username && <DropDownMenu active={isActive === 0} onMenuClick={() => handleClick(0)} rentalInformation={rentalInfo} /> }
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