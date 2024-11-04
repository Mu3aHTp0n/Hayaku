import './app/styles/Rental.css'

export default function DropDownItem() {
    const statuses = ['Активно', 'Вернул']
    function changeStatus() {

    }

    return (
        <>
            <li className="drowdown__item">
                {/* TODO: при нажатии на прокат меняется статус */}
                <h4 className="cassette__title">Fight Club</h4>
                <p className="cassette__status" onClick={changeStatus}>{statuses[0]}</p>
            </li>
        </>
    )
}