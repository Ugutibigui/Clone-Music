import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './common/reset.css'
import './common/root.css'

import Index from "./pages/HomePage/Index"

import ScreenLogin from "./pages/Account/ScreenLogin"
import ScreenRegister from "./pages/Account/ScreenRegister"

import Music from "./pages/Content/Musica/Music"
import Podcasts from "./pages/Content/Podcasts/Podcasts"
import Radio from "./pages/Content/Radios/Radio"
import Explore from "./pages/Content/Explorar/Explore"
import Recommendation from './pages/Content/Recommendation/Recommendation'

import SearchPage from "./pages/Content/Search/Search"
import All from './pages/Content/Search/navBar/All/All'
import MusicSearch from './pages/Content/Search/navBar/MusicSearch/MusicSearch'
import ArtistRelated from "./pages/Content/Search/navBar/ArtistRelated/ArtistRelated"

import CreateMusic from "./pages/Content/CreateMusic/CreateMusic"

import Account from './pages/Content/SetUpAccount/SetUpAccount'
import Settings from './pages/Content/SetUpAccount/NavBar/Settings/Settings'
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

function App() {
	return (
		<Router>
			<Routes>
				/* Definindo rotas com layout padrão e passando por props seu componente */
				<Route index exact path="/" element={<Index content={<Music/>} />}/> 
				<Route path="/podcast" element={<Index content={<Podcasts/>} />} />
				<Route path="/radio" element={<Index content={<Radio/>}/>}/>
				<Route path="/explore" element={<Index content={<Explore/>} />} />
				<Route path="/createmusic" element={<Index content={<CreateMusic/>}/>}/>

				<Route exact path="/account" element={<Index content={<Account content={<Settings/>}/>} />} />
				<Route exact path="/account/device" element={<Index content={<Account content={<Device/>}/>} />} />
				<Route exact path="/account/apps" element={<Index content={<Account content={<Apps/>}/>} />} />

				<Route exact path="/search" element={<Index content={<SearchPage content={<All/>}/>}/>}/>
				<Route exact path="/search/music" element={<Index content={<SearchPage content={<MusicSearch/>}/>}/>}/>
				<Route exact path="/search/artist" element={<Index content={<SearchPage content={<ArtistRelated/>}/>}/>}/>

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

				<Route path="/recommendation" element={<Recommendation />} />
				<Route path="/login" element={<ScreenLogin />} />
				<Route path="/register" element={<ScreenRegister />} />
			</Routes>
		</Router>
	)
}

export default App