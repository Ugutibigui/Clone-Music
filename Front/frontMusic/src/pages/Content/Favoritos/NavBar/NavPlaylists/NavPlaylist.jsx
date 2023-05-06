import Search from '../../../../../components/Nav/Search/Search'
import CustomSelect from '../../../../../components/Nav/CustomSelect/CustomSelect'
import Channel from '../../../../../components/Layout/Channel/Channel'
import PlaylistCard from '../../../../../components/Cards/Playlist Card/PlaylistCard'

import styles from './NavPlaylist.module.css'

function NavPlaylist() {
    return (
        <>
            <div className={styles.topContent}>
                <h1>1 playlist</h1>

                <div className={styles.searchOption}>
                    
                    <Search size='45%' placeholder='Buscar'/>

                    <CustomSelect text='TODAS' />
                    <CustomSelect text='ADICIONADAS RECENTEMENTE' />
                </div>
            </div>

            <Channel addText='Criar uma playlist' Card={PlaylistCard} />
        </>
    )
}

export default NavPlaylist