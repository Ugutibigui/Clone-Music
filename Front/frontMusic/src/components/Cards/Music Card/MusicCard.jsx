import { useState, useEffect } from 'react'
import { ImPlay3 } from 'react-icons/im'
import { FiHeart } from 'react-icons/fi'
import { BsThreeDots } from 'react-icons/bs'

import styles from './MusicCard.module.css'

function MusicCard({ object }) {
    const [className, setClassName] = useState(`${styles.btn}`)
    const [artistNames, setArtistNames] = useState([])

    function formatDate(date) {
        const formattedDate = new Date(date)
        const day = formattedDate.getDate()
        const month = formattedDate.getMonth() + 1
        const year = formattedDate.getFullYear()
        return `${day}/${month}/${year}`
    }

    const userIdArray = object.userId.split(',').map(value => value.trim())

    useEffect(() => {
        const fetchArtistNames = async () => {
            const artists = []
            for (const userId of userIdArray) {
                const response = await fetch(`http://localhost:8000/artists?user=${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                const data = await response.json()
                if (data && data.length > 0) {
                    artists.push(data[0].name)
                }
            }
            setArtistNames(artists)
        }

        fetchArtistNames()
    }, [userIdArray])

    return (
        <div className={styles.MusicContainer}>
            <div className={styles.image}
                onMouseEnter={() => setClassName(`${styles.addButton}`)}
                onMouseLeave={() => setClassName(`${styles.btn}`)} >
                <img src={object.photo} alt={object.name} />

                <div className={styles.buttons}>
                    <button>
                        <ImPlay3 size={20}/>
                    </button>

                    <button className={className}>
                        <FiHeart size={20}/>
                    </button>

                    <button className={className}>
                        <BsThreeDots size={20}/>
                    </button>
                </div>
            </div>

            <h2>{object.name}</h2>
            <span>
                Por
                {artistNames.map((name, index) => (
                    <a key={index} href=""> {name},  </a>
                ))}
            </span>
            <p> Lançado em {formatDate(object.date)}</p>
        </div>
    );
}

export default MusicCard;
