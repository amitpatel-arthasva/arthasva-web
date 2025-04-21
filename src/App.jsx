import 'react'
import './App.css'
import Hero from './components/Hero'

function App() {
	return (
		<div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
			{/* Animated Circles */}
			<div className="absolute inset-0 -z-10">
				<div className="circle circle1"></div>
				<div className="circle circle2"></div>
				<div className="circle circle3"></div>
			</div>
			{/* Blur Overlay */}
			<div className="absolute inset-0 bg-white/10 backdrop-blur-lg -z-0"></div>
			{/* Content */}
			<Hero />
		</div>
	);
}

export default App
