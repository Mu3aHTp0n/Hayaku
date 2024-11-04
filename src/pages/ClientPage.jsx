import Window from "../Window.jsx";

import '../app/styles/Client.css'

export default function ClientPage() {
    const clients = [
        {
            id: 0,
            name: "Родик",
            secondName: "Эщин",
        },
        {
            id: 1,
            name: "Эрик",
            secondName: "Родин",
        },
        {
            id: 2,
            name: "Рощик",
            secondName: "Эдин",
        },
        {
            id: 3,
            name: "Рещик",
            secondName: "Один",
        },
        {
            id: 4,
            name: "Дощик",
            secondName: "Рэдин",
        },
        {
            id: 5,
            name: "Дорик",
            secondName: "Щинэ",
        },
        {
            id: 6,
            name: "Дирик",
            secondName: "Щонэ",
        },
        {
            id: 7,
            name: "Щинки",
            secondName: "Эрод",
        },
        {
            id: 8,
            name: "Ринки",
            secondName: "Эщод",
        },
        {
            id: 9,
            name: "Икро",
            secondName: "Эдщин",
        },
        {
            id: 10,
            name: "Киро",
            secondName: "Щинэд",
        },
        {
            id: 11,
            name: "Дикин",
            secondName: "Эщор",
        },
        {
            id: 12,
            name: "Эдрощ",
            secondName: "Кини",
        },
        {
            id: 13,
            name: "Одик",
            secondName: "Эрщин",
        },
        {
            id: 14,
            name: "Tayler",
            secondName: "Derden",
        },
    ]

    const clientsList = clients.map(client =>
        <li className="client-list__item" key={client.id}>
            {client.name} {client.secondName}
        </li>
    )

    // TODO: получение списка клиентов с бека

    return (
        <>
            <Window>
                <aside className="sidebar">
                    {/* TODO: сделать клиента активным при нажатии */}
                    <ul className="client-list">{clientsList}</ul>
                </aside>
                <section className="client__info">
                    <ul className="client-info__list">
                        {/* TODO: Сделать вывод данных активного клиента */}
                        {/*<li className="client-info__key">Фамилия:          <span className="client-info__value">{currentClient.SecondName}</span></li>*/}
                        <li className="client-info__key">Фамилия:          <span className="client-info__value">{clients[0].secondName}</span></li>
                        <li className="client-info__key">Имя:              <span className="client-info__value">{clients[0].name}</span></li>
                        <li className="client-info__key">Отчество:         <span className="client-info__value">{}</span></li>
                        <li className="client-info__key">Адрес:            <span className="client-info__value">{}</span></li>
                        <li className="client-info__key">Домашний телефон: <span className="client-info__value">{}</span></li>
                        <li className="client-info__key">Серия пасспорта:  <span className="client-info__value">{}</span></li>
                        <li className="client-info__key">Номер пасспорта:  <span className="client-info__value">{}</span></li>
                        <li className="client-info__key">Кем выдан:        <span className="client-info__value">{}</span></li>
                        <li className="client-info__key">Когда выдан:      <span className="client-info__value">{}</span></li>
                    </ul>
                </section>
                <section className="interaction">
                    {/* TODO: модальное окно для добавления клиента с отправкой на бек */}
                    <button>Добавить Тайлера</button>
                    {/* TODO: удаление активного клиента */}
                    <button>Удалить Тайлера</button>
                </section>
            </Window>
        </>
    )
}