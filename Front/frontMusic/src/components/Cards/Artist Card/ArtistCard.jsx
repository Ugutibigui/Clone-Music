import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImPlay3 } from 'react-icons/im'
import { FaHeart } from 'react-icons/fa'

import styles from './ArtistCard.module.css'

function ArtistCard({ object }) { // Obrigatorio ter como resposta o userId

    const [className, setClassName] = useState(`${styles.btn}`);
    const [fans, setFans] = useState([])
    const [artist, setArtist] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/fans?user=${object.userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => setFans(data))
            .catch(error => console.log(`Erro na procura de fans do artista pelo ID: ${error}`))
    }, [object.userId])

    useEffect(() => {
        fetch(`http://localhost:8000/artists?user=${object.userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => setArtist(data[0]))
            .catch(error => console.log(`Erro na procura de artista pelo ID: ${error}`))
    }, [object.userId])

    return (
        <div className={styles.imageRound}>
            <div className={styles.imageCenter}
                onMouseEnter={() => setClassName(`${styles.addButton}`)}
                onMouseLeave={() => setClassName(`${styles.btn}`)} >
                <Link to={`/artist/${artist.userId}`}>
                    <img src={artist.photo} alt={artist.name} />
                </Link>

                <div className={styles.buttonsRound}>
                    <button className={className}>
                        <ImPlay3 />
                    </button>

                    <button className={className}>
                        <FaHeart color='#EF5466' />
                    </button>
                </div>
            </div>

            <span> {artist.name} </span>

            <p> {fans[0]?.fansCount.toLocaleString()} </p>
        </div>
    )
}

export default ArtistCard
