import { Link } from 'react-router-dom'

import ArtistCard from '../../../../../components/Cards/Artist Card/ArtistCard'

import styles from './ArtistRelated.module.css'

const ArtistRelated = ({ artistData }) => {

    return (
        <div className={styles.allArtists}>
            <h1> Artistas </h1>

            <div className={styles.artistList}>
                {artistData.length > 0 ? (
                    <>
                        {artistData.map((artist, index) => (
                            <Link to={`/artist/${artist.userId}`} key={index}>
                                <ArtistCard object={artist} />
                            </Link>
                        ))}

                    </>
                ) : (
                    <h1> Aritsta não encontrado! </h1>
                )}
            </div>
        </div>
    )
}

export default ArtistRelated