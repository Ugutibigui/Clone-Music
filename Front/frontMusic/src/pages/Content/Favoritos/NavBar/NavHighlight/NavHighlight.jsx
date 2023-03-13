import styles from './NavHighlight.module.css'

import Channel from '../../../../../components/Section/Channel/Channel'
import CardRecently from '../../../../../components/Cards/CardRecently/CardRecently'
import CardFavorite from '../../../../../components/Cards/CardFavorite/CardFavorite'
import CardPlaylist from '../../../../../components/Cards/CardPlaylist/CardPlaylist'

function NavHighlight() {
    return (
        <>
            <Channel h2='Tocados recentemente' Card={CardRecently}/>
            <Channel h2='Playlists' Card={CardPlaylist}/>
            <Channel h2='Artistas' Card={CardFavorite}/>
        </>
    )
}

export default NavHighlight