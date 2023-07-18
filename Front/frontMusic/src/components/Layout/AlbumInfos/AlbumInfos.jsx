import { AiOutlineHeart } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import { useState } from 'react'

import styles from './AlbumInfos.module.css'

function AlbumInfos({ }) {

    const [ classname, setClassname ] = useState(`${styles.remove}`)

    return (
        <li className={styles.wrapper}
        onMouseEnter={() => setClassname(`${styles.add}`)}
        onMouseLeave={() => setClassname(`${styles.remove}`)}>
            <div className={styles.leftWrapper}>
                <div className={styles.wrapperImage}>
                    <img src="https://m.extra.globo.com/incoming/25211359-14c-f30/w480h720-PROP/mc-hariel-trafico-denuncia-1.jpg" alt="Playlist" />

                    <button className={classname}> <BsFillPlayFill size={20} color='#000' /> </button>
                </div>

                <div className={styles.texts}>
                    <h3>100% MC Hariel</h3>
                    <p> 50 faixas - 23.801 fãs </p>
                </div>
            </div>

            <button id={styles.heartButton}> <AiOutlineHeart color='#fff' size={20} /> </button>
        </li>
    )
}

export default AlbumInfos