import { useState } from 'react'

import styles from './AddArtist.module.css'

function AddArtist({image, name}) {

    const [classname, setClassname] = useState(false)

    return (
        <div className={styles.artistImage}>
            <div 
            onMouseEnter={() => setClassname('opacity')} onMouseLeave={() => setClassname('remove')}>
                <div className={styles[classname]}></div>
                <img src={image} alt="Artist" />
            </div>

            <p> {name} </p>
        </div>
    )
}

export default AddArtist