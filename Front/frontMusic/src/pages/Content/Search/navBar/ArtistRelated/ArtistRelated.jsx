import ArtistCard from '../../../../../components/Cards/Artist Card/ArtistCard'

import styles from './ArtistRelated.module.css'

const ArtistRelated = ({ artistData }) => {

    return (
        <div className={styles.allArtists}>
            <h1> Artistas </h1>

            <ul className={styles.artistList}>
                {artistData.length > 0 ? (
                    <>
                        {artistData.map((artist, index) => (
                            <li key={index}>
                                <ArtistCard object={artist} />
                            </li>
                        ))}

                    </>
                ) : (
                    <h1> Aritsta não encontrado! </h1>
                )}
            </ul>
        </div>
    )
}

export default ArtistRelated