import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs'

import styles from './CardPlaylist.module.css'

function CardPlaylist() {

    const [className, setClassName] = useState(`${styles.remove}`);

    return (
        <div className={styles.card}>
            <div className={styles.image}
            onMouseEnter={() => setClassName(`${styles.add}`)}
            onMouseLeave={() =>  setClassName(`${styles.remove}`)}>
                <img src="https://e-cdns-images.dzcdn.net/images/cover/d41d8cd98f00b204e9800998ecf8427e/264x264-000000-80-0-0.jpg" alt="Recently" />
                
                <button className={className}>
                    <BsThreeDots/>
                </button>
            </div>

            <div>Rock</div>
            <span>Pública</span>
        </div>
    )
}

export default CardPlaylist