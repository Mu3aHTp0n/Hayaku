import {createPortal} from "react-dom";
import {useState} from "react";

import '../app/styles/Rental.css'

import Modal from "../Modal.jsx";
import Window from "../Window.jsx";
import DropDownMenu from "../DropDownMenu.jsx";

export default function RentalPage() {
    const [isActive, setIsActive] = useState(null);
    // const [dropdowns, setDropdowns] = useState(Array(3).fill(false));


    function handleClick(i) {
        // const newDropdowns = [...dropdowns];
        // newDropdowns[i] = !newDropdowns[i];
        // setDropdowns(newDropdowns);
        // console.log(dropdowns);
        setIsActive(isActive === i ? null : i);
    }

    return (
        <>
            {createPortal(<Modal modalTitle={'Какой-то заголовок'}/>, document.body)}
            <Window>
                <section className="rental">
                    {/* TODO: получение списка клиентов и прокатов с бека */}
                    <article className="rental-item">
                        <p className="rental__client">Тайлер Дерден</p>
                        <DropDownMenu active={isActive === 0} onMenuClick={() => handleClick(0)} />
                    </article>
                    <article className="rental-item">
                        <p className="rental__client">Тайлер Дерден</p>
                        <DropDownMenu active={isActive === 1} onMenuClick={() => handleClick(1)} />
                    </article>
                    <article className="rental-item">
                        <p className="rental__client">Тайлер Дерден</p>
                        <DropDownMenu active={isActive === 2} onMenuClick={() => handleClick(2)} />
                    </article>
                </section>
                <section className="interaction">
                    {/* TODO: TODAY Модальное окно с добавлением проката */}
                    <button>Добавить Тайлера</button>
                </section>
            </Window>
        </>
    );
}