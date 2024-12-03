import {useState} from "react";
import {useSetAtom} from "jotai";
import {uiAtom} from "../state.jsx";

import Header from "../Header.jsx";
import Search from "../SearchBar.jsx";
import Overlay from "../Overlay.jsx";

import '../app/styles/Cassette.css'
import {cassette} from "../services/Cassette.jsx";

export default function CassettePage() {
    const [title, setTitle] = useState();
    const [desc, setDesk] = useState();
    const [file, setFile] = useState(null)
    const [urlImg, setUrlImg] = useState("");

    const [filmInfo, setFilmInfo] = useState({
        name: null,
        description: null,
    });

    const setUi = useSetAtom(uiAtom)

    function handleData(filmData) {
        setFilmInfo(filmData);
        setUrlImg(`http://130.193.44.220:5174/demo/cassette/getPhoto/${filmData.id}`);
    }

    async function createCassette() {
        await cassette.createCassette({ title, desc, file });
        setTitle('');
        setDesk('');
        setFile(null)
    }

    return (
        <>
            <Overlay title={'Добавление кассеты'} footerContent={
                <>
                </>
            }>
                <input type='text' placeholder={'Название'}
                       value={title} onChange={event => setTitle(event.target.value)} required/>
                <input type='text' placeholder={'Описание'}
                       value={desc} onChange={event => setDesk(event.target.value)} required/>
                <input type='file' accept="image/*"
                       onChange={(e) => setFile(e.target.files[0])} required/>
                <input type={"submit"} className={'form__button'} value={"Submit"} onClick={() => createCassette()}/>
            </Overlay>
            <Header/>
            <main className="cassetWindow">
                <Search sendData={handleData} currentPage={'cassette'}/>
                <article className="cassette__content">
                    {/*{filmInfo.name !== null && <img src={urlImg} alt={`${filmInfo.name}`} className="preview"/>}*/}
                    <img className={'preview'} src={urlImg} alt={'Bebebe'} />
                        <section>
                        <h3 style={{fontSize: '1.5em'}}>{filmInfo.name}</h3>
                        <p className="cassette__description">{filmInfo.description}</p>
                        <div className="button__container">
                            {
                                filmInfo.name !== null && (
                                    <>
                                        <button onClick={() => cassette.deleteCassette(filmInfo.id)}>Удалить кассету</button>
                                    </>
                                )
                            }
                            <button onClick={() => setUi((prev) => ({...prev, modal: true}))}>Добавить кассету</button>
                        </div>
                    </section>
                </article>
            </main>
        </>
    )
}