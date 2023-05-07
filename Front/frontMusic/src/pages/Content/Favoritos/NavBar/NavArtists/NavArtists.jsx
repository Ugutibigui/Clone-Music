import CustomSelect from '../../../../../components/Nav/CustomSelect/CustomSelect'
import Search from '../../../../../components/Search/Search'
import ArtisrCard from '../../../../../components/Cards/Artist Card/ArtistCard'
import AddContent from '../../../../../components/Layout/AddContent/AddContent'

import styles from './NavArtists.module.css'

function NavArtists() {
    const artistList = Array.from({ length: 12 }, (_, i) => <li key={i}><ArtisrCard /></li>); 
    // Temporario até uso da API

    return (
        <>
            <div className={styles.topContent}>
                <h1>29 artistas</h1>

                <div className={styles.searchOption}>
                    <Search size='300px' placeholder='Buscar'/>
                    <CustomSelect text='ADICIONADAS RECENTEMENTE' />
                </div>
            </div>

            <ul className={styles.artistCollection}>
                <AddContent text='Adicione artistas' circle={true}/>
                {artistList}
            </ul>
        </>
    )
}

export default NavArtists
