import {useState} from "react";
import {useSetAtom} from "jotai";
import {uiAtom} from "../state.jsx";

import Header from "../Header.jsx";
import FilmSearchBar from "../FilmSearchBar.jsx";
import Overlay from "../Overlay.jsx";

import '../app/styles/Cassette.css'
import {cassette} from "../services/Cassette.jsx";

export default function CassettePage() {
    const [filmInfo, setFilmInfo] = useState({
        name: null,
        photo: 'src/assets/cassettePhoto/FightClub.jpg',
        description: null,
    });

    const setUi = useSetAtom(uiAtom)

    function handleData(filmData) {
        setFilmInfo(filmData);
    }

    return (
        <>
            <Overlay title={'Добавление кассеты'} />
            <Header/>
            <main className="cassetWindow">
                <FilmSearchBar sendData={handleData}/>
                <article className="cassette__content">
                            {/* TODO: вывод картинки */}
                    <img src={ filmInfo.photo }
                         alt="Обложка" className="preview"/>
                    <section>
                        <p className="cassette__description">{ filmInfo.description }</p>
                        <div className="button__container">
                            <button onClick={() => cassette.deleteCassette(filmInfo.id)}>Удалить кассету</button>
                            <button onClick={() => setUi((prev) => ({...prev, modal: true}))} >Добавить кассету</button>
                        </div>
                    </section>
                </article>
            </main>
        </>
    )
}