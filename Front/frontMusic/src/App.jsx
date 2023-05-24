import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Index from "./pages/HomePage/Index"

import ScreenLogin from "./pages/Account/ScreenLogin"
import ScreenRegister from "./pages/Account/ScreenRegister"

import Music from "./pages/Content/Musica/Music"
import Podcasts from "./pages/Content/Podcasts/Podcasts"
import Radio from "./pages/Content/Radios/Radio"
import Explore from "./pages/Content/Explorar/Explore"
import Recommendation from './pages/Content/Recommendation/Recommendation'

import Account from './pages/Content/SetUpAccount/SetUpAccount'
import Settings from './pages/Content/SetUpAccount/NavBar/Settings/Settings'
import Notifications from './pages/Content/SetUpAccount/NavBar/Notifications/Notifications'
import Device from './pages/Content/SetUpAccount/NavBar/Device/Device'
import Apps from './pages/Content/SetUpAccount/NavBar/Apps/Apps'

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

import Artist from './pages/Content/Artist/Artist'
import Discography from "./pages/Content/Artist/NavBar/Discography/Discography"
import TopTrack from "./pages/Content/Artist/NavBar/TopTrack/TopTrack"
import Related from "./pages/Content/Artist/NavBar/Related/Related"
import PlaylistArt from './pages/Content/Artist/NavBar/PlaylistArt/PlaylistArt'
import Concert from './pages/Content/Artist/NavBar/Concert/Concert'
import Biography from './pages/Content/Artist/NavBar/Biography/Biography'

export function App() {

	return (
		<Router>
			<Routes>
				/* Definindo rotas com layout padrão e passando por props seu componente */
				<Route index exact path="/" element={<Index content={<Music/>} />}/> 
				<Route path="/podcast" element={<Index content={<Podcasts/>} />} />
				<Route path="/radio" element={<Index content={<Radio/>}/>}/>
				<Route path="/explore" element={<Index content={<Explore/>} />} />

				<Route exact path="/account" element={<Index content={<Account content={<Settings/>}/>} />} />
				<Route exact path="/account/notifications" element={<Index content={<Account content={<Notifications/>}/>} />} />
				<Route exact path="/account/device" element={<Index content={<Account content={<Device/>}/>} />} />
				<Route exact path="/account/apps" element={<Index content={<Account content={<Apps/>}/>} />} />

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

				<Route exact path="/artist/:id" element={<Index content={<Artist content={<Discography/>}/>} />}/>
				<Route path="/artist/:id/top_track" element={<Index content={<Artist content={<TopTrack/>}/>} />}/>
				<Route path="/artist/:id/related_artist" element={<Index content={<Artist content={<Related/>}/>} />}/>
				<Route path="/artist/:id/playlists" element={<Index content={<Artist content={<PlaylistArt/>}/>} />}/>
				<Route path="/artist/:id/concerts" element={<Index content={<Artist content={<Concert/>}/>} />}/>
				<Route path="/artist/:id/biography" element={<Index content={<Artist content={<Biography/>}/>} />}/>


				<Route path="/recommendation" element={<Recommendation />} />
				<Route path="/login" element={<ScreenLogin />} />
				<Route path="/register" element={<ScreenRegister />} />
			</Routes>
		</Router>
	)
}

export default App