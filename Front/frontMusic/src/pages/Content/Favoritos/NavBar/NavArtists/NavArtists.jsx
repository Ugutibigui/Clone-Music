import styles from './NavArtists.module.css'

import CustomSelect from '../../../../../components/Nav/CustomSelect/CustomSelect'
import Search from '../../../../../components/Nav/Search/Search'
import CardFavorite from '../../../../../components/Cards/CardFavorite/CardFavorite'

function NavArtists() {
    const artistList = Array.from({ length: 12 }, (_, i) => <li key={i}><CardFavorite /></li>); 
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
                {artistList}
            </ul>
        </>
    )
}

export default NavArtists
