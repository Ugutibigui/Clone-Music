import styles from './ArtistCard.module.css'

import { useState } from 'react';
import { ImPlay3 } from 'react-icons/im'
import { FaHeart } from 'react-icons/fa'

function ArtistCard({ object }) {

    const [className, setClassName] = useState(`${styles.btn}`);

    return (
        <div className={styles.imageRound}>
            <div className={styles.imageCenter}
            onMouseEnter={() => setClassName(`${styles.addButton}`)}
            onMouseLeave={() => setClassName(`${styles.btn}`)} >
                <img src={object.photo} alt={object.name} />

                <div className={styles.buttonsRound}>
                    <button className={className}>
                        <ImPlay3 />
                    </button>

                    <button className={className}>
                        <FaHeart color='#EF5466'/>
                    </button>
                </div>
            </div>

            <span> {object.name} </span>

            <p>7.137.751 fãs</p>
        </div>
    )
}

export default ArtistCard
