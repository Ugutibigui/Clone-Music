import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsThreeDots } from 'react-icons/bs'

import styles from './PlaylistCard.module.css'

function PlaylistCard({object}) {

    const [className, setClassName] = useState(`${styles.remove}`);

    return (
        <Link to={`/playlist/${object.playId}`} className={styles.card}>
            <div className={styles.image}
            onMouseEnter={() => setClassName(`${styles.add}`)}
            onMouseLeave={() =>  setClassName(`${styles.remove}`)}>
                <img src={object.photo} alt={object.name} />
                
                <button className={className}>
                    <BsThreeDots color='#000' size={20}/>
                </button>
            </div>

            <h2> {object.name} </h2>
            <span> 0 Músicas </span>
        </Link>
    )
}

export default PlaylistCard