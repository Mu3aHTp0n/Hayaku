import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ClientPage from '../pages/ClientPage'
import CassettePage from '../pages/CassettePage'
import RentalPage from '../pages/RentalPage'

import './styles/App.css'
import Page404 from "../pages/Page404.jsx";
import HomePage from "../pages/HomePage.jsx";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='*'        element={<Page404 />} />
					<Route path='/'        element={<HomePage />} />
					<Route path='Client'   element={<ClientPage />} />
					<Route path='Cassette' element={<CassettePage />} />
					<Route path='Rental'   element={<RentalPage />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App