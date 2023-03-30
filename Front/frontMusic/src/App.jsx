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
import Loading from "./components/Layout/Loading/Loading"

export function App() {

	return (
		<Loading/>
	)
}

export default App