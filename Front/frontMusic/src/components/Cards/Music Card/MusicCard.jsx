import { useState } from 'react'
import { ImPlay3 } from 'react-icons/im'
import { FiHeart } from 'react-icons/fi'
import { BsThreeDots } from 'react-icons/bs'

import styles from './MusicCard.module.css'

function MusicCard({ api }) {

    const [className, setClassName] = useState(`${styles.btn}`);

    return (
        <div className={styles.MusicContainer}>
            <div className={styles.imageEnd}
            onMouseEnter={() => setClassName(`${styles.addButton}`)}
            onMouseLeave={() =>  setClassName(`${styles.btn}`)}>
                <img src='https://e-cdns-images.dzcdn.net/images/playlist/6ebfed888b3b116667d2b2897c995f29/264x264-000000-80-0-0.jpg' alt="Artista" />

                <div className={styles.playButtonCube}>
                    <button>
                        <ImPlay3 />
                    </button>

                    <button className={className}>
                        <FiHeart />
                    </button>

                    <button className={className}>
                        <BsThreeDots />
                    </button>
                </div>
            </div>

            <h2> Nome da musica </h2>
            <span> Por Mc da leste</span>
            <p>Lançamento</p>
        </div>
    )
}
export default MusicCard
