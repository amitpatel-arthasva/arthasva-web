import 'react'
import './App.css'
import Hero from './components/Hero'
import NavBar from './components/navbar/navbar'
import HomePage from './pages/homepage';
import Manage from './pages/manage';
import MoneyManager from './pages/moneymanager';
import OurServices from './pages/services';
function App() {
	return (
		<div>
			<NavBar/>
			{/* <Hero/> */}
			<HomePage/>
			<Manage/>
			<MoneyManager/>
			<OurServices/>
		</div>
	);
}

export default App
