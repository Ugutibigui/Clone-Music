import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"

import Index from "./pages/HomePage/Index"
import ScreenLogin from "./pages/Account/ScreenLogin"
import ScreenRegister from "./pages/Account/ScreenRegister"
import Music from "./pages/Content/Musica/Music"
import Podcasts from "./pages/Content/Podcasts/Podcasts"
import Radio from "./pages/Content/Radios/Radio"
import Explore from "./pages/Content/Explorar/Explore"
import Favorite from "./pages/Content/Favoritos/Favorite"

export function App() {

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Index content={<Music/>} />}/> 
				<Route path="/podcast" element={<Index content={<Podcasts/>} />} />
				<Route path="/radio" element={<Index content={<Radio/>}/>}/>
				<Route path="/explore" element={<Index content={<Explore/>} />} />
				<Route path="/favorite" element={<Index content={<Favorite/>} />} />
				<Route path="/login" element={<ScreenLogin />} />
				<Route path="/register" element={<ScreenRegister />} />
			</Routes>
		</Router>
	)
}

export default App