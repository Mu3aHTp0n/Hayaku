import {useState} from "react";

import '../app/styles/Rental.css'

import Window from "../Window.jsx";
import DropDownMenu from "../DropDownMenu.jsx";
import Overlay from "../Overlay.jsx";
import {useSetAtom} from "jotai";
import {uiAtom} from "../state.jsx";

export default function RentalPage() {
    const [isActive, setIsActive] = useState(null);
    const setUi = useSetAtom(uiAtom)

    function handleClick(i) {
        setIsActive(isActive === i ? null : i);
    }

    return (
        <>
            <Overlay />
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