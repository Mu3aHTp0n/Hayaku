import {useState} from "react";
import {useSetAtom} from "jotai";
import {uiAtom} from "../state.jsx";

import Header from "../Header.jsx";
import Search from "../SearchBar.jsx";
import Overlay from "../Overlay.jsx";

import '../app/styles/Cassette.css'
import {cassette} from "../services/Cassette.jsx";

export default function CassettePage() {
    const [title, setTitle] = useState('');
    const [desc, setDesk] = useState('');
    const [file, setFile] = useState(null)
    const [urlImg, setUrlImg] = useState("");
    const [tempUrl, setTempUrl] = useState('')

    const [filmInfo, setFilmInfo] = useState({
        name: null,
        description: null,
    });

    const setUi = useSetAtom(uiAtom)

    function handleData(filmData) {
        setFilmInfo(filmData);
        setUrlImg(`https://hayaku.ru/demo/cassette/getPhoto/${filmData.id}`);
    }

    function deleteCassette() {
        cassette.deleteCassette(filmInfo.id)
            .then(() => {
                setFilmInfo({
                    name: null,
                    description: null,
                });
                setUrlImg('')
            })
    }

    async function createCassette() {
        await cassette.createCassette({ title, desc, file });
        setTitle('');
        setDesk('');
        setFile(null)
        setTempUrl('')
    }

    function handleFileChange(event) {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setTempUrl(URL.createObjectURL(selectedFile));
        }
    }

    return (
        <>
            <Overlay title={'Добавление кассеты'}>
                <input type='text' placeholder={'Название'}
                       value={title} onChange={event => setTitle(event.target.value)} required/>
                <input type='text' placeholder={'Описание'}
                       value={desc} onChange={event => setDesk(event.target.value)} required/>
                {tempUrl && <img alt='' src={tempUrl} style={{maxHeight: 600}}/>}
                <input type='file' accept="image/*"
                       onChange={handleFileChange} required/>
                <button className={'form__button'} onClick={() => createCassette()}>Добавить</button>
            </Overlay>
            <Header/>
            <main className="cassetWindow">
            <Search sendData={handleData} currentPage={'cassette'}/>
                <article className="cassette__content">
                    { urlImg && <img className={'preview'} src={urlImg} alt={'Bebebe'} /> }
                        <section>
                        <h3 style={{fontSize: '1.5em'}}>{filmInfo.name}</h3>
                        <p className="cassette__description">{filmInfo.description}</p>
                        <div className="button__container">
                            {
                                filmInfo.name !== null && (
                                    <>
                                        <button onClick={deleteCassette}>Удалить кассету</button>
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