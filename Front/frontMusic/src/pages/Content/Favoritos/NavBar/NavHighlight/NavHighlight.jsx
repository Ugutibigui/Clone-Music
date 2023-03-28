import Channel from '../../../../../components/Layout/Channel/Channel'
import RecentlyCard from '../../../../../components/Cards/Recently Card/RecentlyCard'
import ArtistCard from '../../../../../components/Cards/Artist Card/ArtistCard'
import PlaylistCard from '../../../../../components/Cards/Playlist Card/PlaylistCard'

import styles from './NavHighlight.module.css'

function NavHighlight() {
    return (
        <>
            <Channel h2='Tocados recentemente' Card={RecentlyCard}/>
            <Channel h2='Playlists' Card={PlaylistCard}/>
            <Channel h2='Artistas' Card={ArtistCard}/>
        </>
    )
}

export default NavHighlight