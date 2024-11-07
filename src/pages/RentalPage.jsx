import '../app/styles/Rental.css'

import Window from "../Window.jsx";
import DropDownMenu from "../DropDownMenu.jsx";

export default function RentalPage() {
    return (
        <>
            <Window>
                <section className="rental">
                    {/* TODO: получение списка клиентов и прокатов с бека */}
                    <article className="rental-item">
                        <p className="rental__client">Тайлер Дерден</p>
                        <DropDownMenu />
                    </article>
                    <article className="rental-item">
                        <p className="rental__client">Тайлер Дерден</p>
                        <DropDownMenu />
                    </article>
                    <article className="rental-item">
                        <p className="rental__client">Тайлер Дерден</p>
                        <DropDownMenu />
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