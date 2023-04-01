import { useState } from 'react'

import styles from './AddArtist.module.css'

function AddArtist() {

    const [classname, setClassname] = useState(false)

    return (
        <div className={styles.artistImage}>
            <div 
            onMouseEnter={() => setClassname('opacity')} onMouseLeave={() => setClassname('remove')}>
                <div className={styles[classname]}></div>
                <img src="https://e-cdns-images.dzcdn.net/images/artist/fa9df597ebb4bef4f15555f1e7656396/242x242-000000-80-0-0.jpg" alt="Artist" />
            </div>

            <p>Krawk</p>
        </div>
    )
}

export default AddArtist