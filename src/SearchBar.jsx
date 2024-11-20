import { useState } from "react";

import { search } from "./services/Search";
import { client } from "./services/Client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './app/styles/Search.css'

export default function SearchBar({ sendData }) {
    const [searchValue, setSearchValue] = useState('')
    const [consumersList, setConsumersList] = useState([]);

    function searchClient() {
        let consumers = search.ClientSearch(searchValue);
        setConsumersList(consumers.map(consumer => (
            <li key={consumer.id} className={`clients-list__item`} onClick={() => handleClick(consumer)}>
                {consumer.name + ' ' + consumer.surname + ' ' + consumer.patronymic}
            </li>
        )));
    }

    function handleClick(consumer) {
        client.getClient(consumer.id)
            .then(a => {
                console.log(a);
                sendData(a);
                setConsumersList([]);
            })
            .catch(error => {
                console.error('Ошибка при получении клиента:', error);
            });
    }

    return (
        <>
            <form className={'search-form'} onSubmit={e => e.preventDefault()}>
                <div className="search-group">
                    <input className={'search-input'}
                           type="text" placeholder="Search..."
                           value={searchValue} onChange={event => setSearchValue(event.target.value)}/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={'searchIcon'} onClick={searchClient}/>
                </div>
                <section className={"clients"}>
                    <ul className={"clients-list"}>
                        {consumersList}
                    </ul>
                </section>
            </form>
        </>
    )
}