import styles from './CardFavorite.module.css'

import { useState } from 'react';
import { ImPlay3 } from 'react-icons/im'
import { FaHeart } from 'react-icons/fa'

function CardFavorite() {

    const [className, setClassName] = useState(`${styles.btn}`);

    return (
        <div className={styles.imageRound}>
            <div className={styles.imageCenter}>
                <img 
                onMouseEnter={() => setClassName(`${styles.addButton}`)}
                onMouseLeave={() => setClassName(`${styles.btn}`)} 
                src='https://e-cdns-images.dzcdn.net/images/artist/a9cb605a0b64f652ec004187aba94ad8/264x264-000000-80-0-0.jpg' alt="Artista" />

                <div className={styles.buttonsRound}>
                    <button className={className}>
                        <ImPlay3 />
                    </button>

                    <button className={className}>
                        <FaHeart color='#EF5466'/>
                    </button>
                </div>
            </div>

            <span>Gusttavo Lima</span>

            <p>7.137.751 fãs</p>
        </div>
    )
}

export default CardFavorite
