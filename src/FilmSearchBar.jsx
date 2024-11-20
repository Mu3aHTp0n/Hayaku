import {useState} from "react";

import { search } from "./services/Search";
import {cassette} from "./services/Cassette.jsx";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

import './app/styles/Search.css';

export default function FilmSearchBar({ sendData }) {
    const [searchValue, setSearchValue] = useState('');
    const [filmsList, setFilmsList] = useState([]);

    function searchFilm() {
        const films = search.FilmsSearch(searchValue);
        setFilmsList(films.map(film => (
            <li key={film.id} className={`clients-list__item`} onClick={() => handleClick(film)}>
                {film.name}
            </li>
        )));
    }

    function handleClick(film) {
        cassette.getCassette(film.id)
            .then(a => {
                console.log(a);
                sendData(a);
                setFilmsList([]);
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
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={'searchIcon'} onClick={searchFilm}/>
                </div>
                <section className={"clients"}>
                    <ul className={"clients-list"}>
                        {filmsList}
                    </ul>
                </section>
            </form>
        </>
    )
}