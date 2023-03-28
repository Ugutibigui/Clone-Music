import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Index from "./pages/HomePage/Index"
import ScreenLogin from "./pages/Account/ScreenLogin"
import ScreenRegister from "./pages/Account/ScreenRegister"
import Music from "./pages/Content/Musica/Music"
import Podcasts from "./pages/Content/Podcasts/Podcasts"
import Radio from "./pages/Content/Radios/Radio"
import Explore from "./pages/Content/Explorar/Explore"
import Favorite from "./pages/Content/Favoritos/Favorite"
import NavHighlight from './pages/Content/Favoritos/NavBar/NavHighlight/NavHighlight'
import Album from './pages/Content/Favoritos/NavBar/Albums/Album'
import Dearest from './pages/Content/Favoritos/NavBar/Dearest/Dearest'
import Playlist from './pages/Content/Favoritos/NavBar/NavPlaylists/NavPlaylist'
import Artists from './pages/Content/Favoritos/NavBar/NavArtists/NavArtists'
import History from './pages/Content/Favoritos/NavBar/PlaybackHistory/PlaybackHistory'
import NavPodcasts from './pages/Content/Favoritos/NavBar/NavPodcasts/NavPodcasts'
import MP3 from './pages/Content/Favoritos/NavBar/NavMP3/NavMP3'
import Following from './pages/Content/Favoritos/NavBar/Following/Following'
import Followers from './pages/Content/Favoritos/NavBar/Followers/Followers'

export function App() {

	return (
		<Router>


			<Routes>
				/* Definindo rotas com layout padrão e passando por props seu componente */
				<Route exact path="/" element={<Index content={<Music/>} />}/> 
				<Route path="/podcast" element={<Index content={<Podcasts/>} />} />
				<Route path="/radio" element={<Index content={<Radio/>}/>}/>
				<Route path="/explore" element={<Index content={<Explore/>} />} />

				<Route exact path="/favorite" element={<Index content={<Favorite content={<NavHighlight/>}/>} />} />
				<Route path="/favorite/dearest" element={<Index content={<Favorite content={<Dearest/>}/>} />}/>
				<Route path="/favorite/playlist" element={<Index content={<Favorite content={<Playlist/>}/>} />}/>
				<Route path="/favorite/album" element={<Index content={<Favorite content={<Album/>}/>} />}/>
				<Route path="/favorite/artist" element={<Index content={<Favorite content={<Artists/>}/>} />}/>
				<Route path="/favorite/history" element={<Index content={<Favorite content={<History/>}/>} />}/>
				<Route path="/favorite/podcasts" element={<Index content={<Favorite content={<NavPodcasts/>}/>} />}/>
				<Route path="/favorite/mp3" element={<Index content={<Favorite content={<MP3/>}/>} />}/>
				<Route path="/favorite/following" element={<Index content={<Favorite content={<Following/>}/>} />}/>
				<Route path="/favorite/followers" element={<Index content={<Favorite content={<Followers/>}/>} />}/>

				<Route path="/login" element={<ScreenLogin />} />
				<Route path="/register" element={<ScreenRegister />} />
			</Routes>
		</Router>
	)
}

export default App