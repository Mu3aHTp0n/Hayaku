import {useSetAtom} from "jotai";
import {useState} from "react";
import {uiAtom} from "../state.jsx";

import '../app/styles/Client.css'
import Overlay from "../Overlay.jsx";
import Window from "../Window.jsx";
import Search from "../SearchBar.jsx";
import Header from "../Header.jsx";
import {client} from "../services/Client.jsx";

const date = new Date();

export default function ClientPage() {
    const [surnameValue, setSurnameValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [patronymicValue, setPatronymicValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [passportSeriesValue, setPassportSeriesValue] = useState('')
    const [passportNumberValue, setPassportNumberValue] = useState('')
    const [issuedValue, setIssuedValue] = useState('')
    const [issuedDateValue, setIssuedDateValue] = useState(``)

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

    function createClient() {
        client.createClient(surnameValue, nameValue, patronymicValue, phoneValue, passportSeriesValue, passportNumberValue, issuedValue, issuedDateValue)
            .then(() => {
                setSurnameValue('');
                setNameValue('');
                setPatronymicValue('');
                setPhoneValue('');
                setPassportSeriesValue('');
                setPassportNumberValue('');
                setIssuedValue('');
                setIssuedDateValue('');
            })
    }

    return (
        <>
            <Overlay title={'Добавить клиента'}>
                <input type='text' placeholder={'Фамилия'}
                       value={surnameValue} onChange={event => setSurnameValue(event.target.value)} required={true}/>
                <input type='text' placeholder={'Имя'}
                       value={nameValue} onChange={event => setNameValue(event.target.value)} required={true}/>
                <input type='text' placeholder={'Отчество'}
                       value={patronymicValue} onChange={event => setPatronymicValue(event.target.value)}
                       required={true}/>
                <input type='tel' placeholder={'79536673978'} pattern="[7-8]{1}[0-9]{10}" maxLength={11}
                       value={phoneValue} onChange={event => setPhoneValue(event.target.value)} required={true}/>
                <input type='number' placeholder={'Серия паспорта'} min={1000} max={9999}
                       value={passportSeriesValue} onChange={event => setPassportSeriesValue(event.target.value)}
                       required={true}/>
                <input type='number' placeholder={'Номер паспорта'} min={100000} max={999999}
                       value={passportNumberValue} onChange={event => setPassportNumberValue(event.target.value)}
                       required={true}/>
                <input type='text' placeholder={'Кем выдан'}
                       value={issuedValue} onChange={event => setIssuedValue(event.target.value)} required={true}/>
                <input type='date' required min="1991-12-25" max={date.toISOString().slice(0, 10)}
                       value={issuedDateValue} onChange={event => setIssuedDateValue(event.target.value)}/>
                <button className={'form__button'} onClick={createClient}>Добавить</button>
            </Overlay>
            <Header/>
            <Search sendData={handleData} currentPage={'client'} />
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
                    <button onClick={() => client.deleteClient(userInfo.id).then(() => setUserInfo({
                        surname: null,
                        name: null,
                        patronymic: null,
                        phone: null,
                        passportSeries: null,
                        passportNumber: null,
                        issuedDate: null,
                        issued: null,
                    }))}>Удалить Тайлера</button>
                </section>
            </Window>
        </>
    )
}