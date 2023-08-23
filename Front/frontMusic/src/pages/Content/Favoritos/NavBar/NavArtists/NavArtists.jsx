import CustomSelect from '../../../../../components/Nav/CustomSelect/CustomSelect'
import Search from '../../../../../components/Search/Search'
import ArtistCard from '../../../../../components/Cards/Artist Card/ArtistCard'
import AddContent from '../../../../../components/Layout/AddContent/AddContent'

import styles from './NavArtists.module.css'

function NavArtists() {
    return (
        <>
            <div className={styles.topContent}>
                <h1>29 artistas</h1>

                <div className={styles.searchOption}>
                    <Search size='300px' placeholder='Buscar'/>
                    <CustomSelect array={['Adicionados Recentemente', 'A-Z']}/>
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
