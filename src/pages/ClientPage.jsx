import {useSetAtom} from "jotai";
import {useState} from "react";
import {uiAtom} from "../state.jsx";

import '../app/styles/Client.css'
import Overlay from "../Overlay.jsx";
import Window from "../Window.jsx";
import SearchBar from "../SearchBar.jsx";
import Header from "../Header.jsx";
import {client} from "../services/Client.jsx";

export default function ClientPage() {
    const [userInfo, setUserInfo] = useState({
        surname: null,
        name: null,
        patronymic: null,
        phone: null,
        passportSeries: null,
        passportNumber: null,
        issued: null,
        issuedDate: null,
    });

    const setUi = useSetAtom(uiAtom)

    function handleData(userData) {
        setUserInfo(userData);
    }

    return (
        <>
            {/* TODO: добавление клиента */}
            <Overlay title={'Добавить клиента'}>
                <h3>Test</h3>
            </Overlay>
            <Header/>
            <SearchBar sendData={handleData} />
            <Window>
                <section className="client__info">
                    <ul className="client-info__list">
                        <li className="client-info__key">Фамилия:          <span className="client-info__value">{userInfo.surname}</span></li>
                        <li className="client-info__key">Имя:              <span className="client-info__value">{userInfo.name}</span></li>
                        <li className="client-info__key">Отчество:         <span className="client-info__value">{userInfo.patronymic}</span></li>
                        <li className="client-info__key">Домашний телефон: <span className="client-info__value">{userInfo.phone}</span></li>
                        <li className="client-info__key">Серия паспорта:   <span className="client-info__value">{userInfo.passportSeries}</span></li>
                        <li className="client-info__key">Номер паспорта:   <span className="client-info__value">{userInfo.passportNumber}</span></li>
                        <li className="client-info__key">Кем выдан:        <span className="client-info__value">{userInfo.issued}</span></li>
                        <li className="client-info__key">Когда выдан:      <span className="client-info__value">{userInfo.issuedDate}</span></li>
                    </ul>
                </section>
                <section className="interaction">
                    <button onClick={() => setUi((prev) => ({...prev, modal: true}))}>Добавить Тайлера</button>
                    {/* TODO: удаление клиента */}
                    <button onClick={() => client.deleteClient(userInfo.id)}>Удалить Тайлера</button>
                </section>
            </Window>
        </>
    )
}