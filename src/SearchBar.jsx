import { useState } from "react";

import { search } from "./services/Search";
import { client } from "./services/Client"
import { rental } from "./services/Rental.jsx";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './app/styles/Search.css'
import {cassette} from "./services/Cassette.jsx";

// Через пропсы передать страницу, функцию и в зависимости от этого вызывать нужный метод
export default function SearchBar({ sendData, sendUsername, currentPage, sendClientId, sendCassetteId }) {
    const [searchValue, setSearchValue] = useState('');
    const [consumersList, setConsumersList] = useState([]);
    const [filmsList, setFilmsList] = useState([]);

    // Поиск клиентов (получение списка клиентов)
    async function searchClient() {
        let consumers = [];
        consumers = await search.ClientSearch(searchValue);
        setConsumersList(consumers.map(consumer => (
            <li key={consumer.id} className={`clients-list__item`} onClick={() => handleClickClient(consumer)}>
                {consumer.surname + ' ' + consumer.name + ' ' + consumer.patronymic}
            </li>
        )));
        setSearchValue("");
    }
    async function searchRental() {
        let consumers = [];
        consumers = await search.ClientSearch(searchValue);
        setConsumersList(consumers.map(consumer => (
            <li key={consumer.id} className={`clients-list__item`} onClick={() => handleClickRental(consumer)}>
                {consumer.surname + ' ' + consumer.name + ' ' + consumer.patronymic}
            </li>
        )));
        setSearchValue("");
    }

    // Получение списка фильмов при поиске
    async function searchFilm() {
        let films = [];
        films = await search.FilmsSearch(searchValue);
        setFilmsList(films.map(film => (
            <li key={film.cassetteId} className={`clients-list__item`} onClick={() => handleClickFilm(film)}>
                {film.name}
            </li>
        )));
        setSearchValue("")
    }




    async function searchRentalClient() {
        let consumers = [];
        consumers = await search.ClientSearch(searchValue);
        setConsumersList(consumers.map(consumer => (
            <li key={consumer.id} className={`clients-list__item`} onClick={() => sendConsumerId(consumer)}>
                {consumer.surname + ' ' + consumer.name + ' ' + consumer.patronymic}
            </li>
        )));
        setSearchValue("");
    }
    async function searchRentalCassette() {
        let films = [];
        films = await search.FilmsSearch(searchValue);
        setFilmsList(films.map(film => (
            <li key={film.cassetteId} className={`clients-list__item`} onClick={() => sendFilmId(film)}>
                {film.name}
            </li>
        )));
        setSearchValue("")
    }






    // Получение данных клиента при нажатии на клиента из полученного списка
    function handleClickClient(consumer) {
        client.getClient(consumer.id)
            .then(a => {
                sendData(a);
                setConsumersList([]);
            })
            .catch(error => {
                console.error('Ошибка при получении клиента:', error);
            });
    }

    // Получение обложки и описания фильма
    function handleClickFilm(film) {
        cassette.getCassette(film.cassetteId)
            .then(a => {
                sendData(a);
                // sendCassetteId(film.cassetteId)
                setFilmsList([]);
            })
            .catch(error => {
                console.error('Ошибка при получении клиента:', error);
            });
    }

    // Получение данных прокатов клиента при нажатии на ФИО клиента
    async function handleClickRental(consumer) {
        const rentalData = await rental.getRentals(consumer.id);
        sendData(rentalData);
        sendUsername(consumer.surname + ' ' + consumer.name);
        setConsumersList([]);
    }

    function sendFilmId(film) {
        sendCassetteId(film.cassetteId);
        setFilmsList([]);
    }
    function sendConsumerId(consumer) {
        sendClientId(consumer.id);
        setConsumersList([]);
    }

    return (
        <>
            <form className={'search-form'} onSubmit={e => e.preventDefault()}>
                <div className="search-group">
                    <input className={'search-input'}
                           type="text" placeholder="Поиск..."
                           value={searchValue} onChange={event => setSearchValue(event.target.value)}/>
                    {/* Через пропсы передаётся страница и в зависимости от этого рендерится нужный поиск */}
                    { currentPage === 'client'              && ( <FontAwesomeIcon icon={faMagnifyingGlass} className={'searchIcon'} onClick={searchClient}/> )}
                    { currentPage === 'cassette'            && ( <FontAwesomeIcon icon={faMagnifyingGlass} className={'searchIcon'} onClick={searchFilm}/> )}
                    { currentPage === 'rental'              && ( <FontAwesomeIcon icon={faMagnifyingGlass} className={'searchIcon'} onClick={searchRental}/> )}
                    { currentPage === 'rentalModalClient'   && ( <FontAwesomeIcon icon={faMagnifyingGlass} className={'searchIcon'} onClick={searchRentalClient}/> )}
                    { currentPage === 'rentalModalCassette' && ( <FontAwesomeIcon icon={faMagnifyingGlass} className={'searchIcon'} onClick={searchRentalCassette}/> )}
                </div>
                {
                    consumersList.length > 0 && (
                        <section className={"clients"}>
                            <ul className={"clients-list"}>
                                {consumersList}
                            </ul>
                        </section>
                    )
                }
                {
                    filmsList.length > 0 && (
                        <section className={"clients"}>
                            <ul className={"clients-list"}>
                                {filmsList}
                            </ul>
                        </section>
                    )
                }
            </form>
        </>
    )
}