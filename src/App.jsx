import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Resume from './pages/Resume'
import Interests from './pages/Interests'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
	return (
		<BrowserRouter>
			<div id="grid-wrapper">
				<div id="title-container">
					<h1>Portfolio</h1>
				</div>

				<div id="empty-div"></div>

				<aside> 
					<h2 id="navhead">Navigation</h2>
					<ul id="navbar">
						<li><Link to="/">About</Link></li>
						<li><Link to="/resume">Resume</Link></li>
						<li><Link to="/interests">Interests</Link></li>
						<li><Link to="/gallery">Gallery</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
				</aside>

				<Routes>
					<Route exact path="/" element={<About/>}/>
					<Route path="/resume" element={<Resume/>}/>
					<Route path="/interests" element={<Interests/>}/>
					<Route path="/gallery" element={<Gallery/>}/>
					<Route path="/contact" element={<Contact/>}/>
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
