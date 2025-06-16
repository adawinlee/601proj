import './css/App.css'
import { Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Resume from './pages/Resume'
import Interests from './pages/Interests'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
	return (
		<div id="grid-wrapper">
			<header>
				<h1>Ada Lee</h1>
			</header>

			<div id="empty-div"></div>

			<nav>
				<h2 id="navhead">Navigation</h2>
				<ul id="navbar">
					<li className="navli"><Link to="/">About</Link></li>
					<li className="navli"><Link to="/resume">Resume</Link></li>
					<li className="navli"><Link to="/interests">Interests</Link></li>
					<li className="navli"><Link to="/gallery">Gallery</Link></li>
					<li className="navli"><Link to="/contact">Contact</Link></li>
				</ul>
			</nav>

			<Routes>
				<Route path="/" element={<About />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/interests" element={<Interests />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={
					<main>
            			<h2 className="main-head">Sorry!</h2>
            			<p>This page does not exist.</p>
        			</main>} />
			</Routes>

			<footer>
				<p>© 2025 My Portfolio. All rights reserved.</p>
			</footer>
		</div>
	)
}

export default App
