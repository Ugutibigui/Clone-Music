import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs'

import styles from './PlaylistCard.module.css'

function PlaylistCard({object}) {

    const [className, setClassName] = useState(`${styles.remove}`);

    return (
        <div className={styles.card}>
            <div className={styles.image}
            onMouseEnter={() => setClassName(`${styles.add}`)}
            onMouseLeave={() =>  setClassName(`${styles.remove}`)}>
                <img src={object.photo} alt={object.name} />
                
                <button className={className}>
                    <BsThreeDots color='#000' size={20}/>
                </button>
            </div>

            <h2> {object.name} </h2>
            <span> 40 Músicas </span>
        </div>
    )
}

export default PlaylistCard