import styles from './CardForYou.module.css'

import { ImPlay3 } from 'react-icons/im'
import { FaDeezer } from 'react-icons/fa'

function CardForYou() {
    return (
        <div className={styles.imageSinger}>
            <div className={styles.image}>
                <img src="https://e-cdns-images.dzcdn.net/images/artist/75317cac54ca471123785d7c701e815d-a9cb605a0b64f652ec004187aba94ad8-18b811f5b9bac7241958b29682cae546-4b5733b0e49a754c4c776c9228990972/264x264-000000-80-0-0.jpg" />

                <div className={styles.logoDaily}>
                    <div className={styles.svgIcon}>
                        <FaDeezer /> Daily
                    </div>
                </div>

                <div className={styles.playButton}>
                    <button>
                        <ImPlay3 />
                    </button>
                </div>
            </div>

            <p>Destacando Munhoz & Mariano, Gusttavo Lima, Jorge & Mateus, Henrique & Juliano</p>

        </div>
    )
}

export default CardForYou
