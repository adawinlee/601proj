import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
	return (
		<BrowserRouter>
			<div id="grid-wrapper">
				<div id="title-container">
					<h1>Biography</h1>
				</div>

				<div id="empty-div"></div>

				<aside> 
					<h2>Navigation</h2>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
				</aside>

				<Routes>
					<Route exact path="/" element={<Home/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="/contact" element={<Contact/>}/>
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
