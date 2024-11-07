import '../app/styles/Cassette.css'

export default function CassettePage() {
    return (
        <>
            <main className="cassetWindow">
                            {/* TODO: вывод списка с кассетами */}
                <select>
                    <option value="Terminator2">Terminator 2</option>
                    <option value="WALL-E">WALL-E</option>
                    <option value="One day">One day</option>
                    <option value="Fight Club">Fight Club</option>
                    <option value="Ice Age">Ice Age</option>
                    <option value="Няньки">Няньки</option>
                    <option value="Эйс Вентура">Эйс Вентура: Розыск домашних животных</option>
                    <option value="Джуманджи">Джуманджи</option>
                </select>
                <article className="cassette__content">
                            {/* TODO: вывод картинки */}
                    <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/8/8a/Fight_club.jpg/640px-Fight_club.jpg"
                         alt="Обложка" className="preview"/>
                    <section>
                            {/* TODO: вывод описания */}
                        <p className="cassette__description">Сотрудник страховой компании страдает хронической
                            бессонницей и отчаянно пытается вырваться из мучительно скучной жизни. Однажды в очередной
                            командировке он встречает некоего Тайлера Дёрдена — харизматического торговца мылом с
                            извращенной философией. Тайлер уверен, что самосовершенствование — удел слабых, а
                            единственное, ради чего стоит жить, — саморазрушение.
                            <br/><br/>
                            Проходит немного времени, и вот уже новые друзья лупят друг друга почем зря на стоянке перед
                            баром, и очищающий мордобой доставляет им высшее блаженство. Приобщая других мужчин к
                            простым радостям физической жестокости, они основывают тайный Бойцовский клуб, который
                            начинает пользоваться невероятной популярностью.
                        </p>
                        <div className="button__container">
                            {/* TODO: Удаление выбранной кассеты */}
                            <button>Удалить кассету</button>
                            {/* TODO: TODAY модальное окно с добавление изображения */}
                            <button>Добавить кассету</button>
                        </div>
                    </section>
                </article>
            </main>
        </>
    )
}