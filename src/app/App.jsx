import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '../Header'
import ClientPage from '../pages/ClientPage'
import CassettePage from '../pages/CassettePage'
import RentalPage from '../pages/RentalPage'

import './styles/App.css'

function App() {
	return (
		<>
			<Header/>
			<BrowserRouter>
				<Routes>
					{/* TODO: добавить подстановочный путь */}
					{/* Подстановочный путь. Появлется если ни один из роутов не подходит */}
					{/*<Route path='*' element={<404 />} />*/}
					<Route path='Client' element={<ClientPage />} />
					<Route path='Cassette' element={<CassettePage />} />
					<Route path='Rental' element={<RentalPage />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
