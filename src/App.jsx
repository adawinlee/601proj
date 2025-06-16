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
					<li className="navli"><Link to="https://adawinlee.github.io/601proj/">About</Link></li>
					<li className="navli"><Link to="https://adawinlee.github.io/601proj/resume">Resume</Link></li>
					<li className="navli"><Link to="https://adawinlee.github.io/601proj/interests">Interests</Link></li>
					<li className="navli"><Link to="https://adawinlee.github.io/601proj/gallery">Gallery</Link></li>
					<li className="navli"><Link to="https://adawinlee.github.io/601proj/contact">Contact</Link></li>
				</ul>
			</nav>

			<Routes>
				<Route path="https://adawinlee.github.io/601proj/" element={<About />} />
				<Route path="https://adawinlee.github.io/601proj/resume" element={<Resume />} />
				<Route path="https://adawinlee.github.io/601proj/interests" element={<Interests />} />
				<Route path="https://adawinlee.github.io/601proj/gallery" element={<Gallery />} />
				<Route path="https://adawinlee.github.io/601proj/contact" element={<Contact />} />
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
