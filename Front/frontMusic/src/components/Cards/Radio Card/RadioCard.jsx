import { ImPlay3 } from 'react-icons/im'

import styles from './RadioCard.module.css'

function RadioCard() {
    return (
        <div className={styles.cardRadio}>
            <div className={styles.radioImage}>
                <img src="https://e-cdns-images.dzcdn.net/images/misc/3d25d3524c0628bb23e769c386542b87/264x264-000000-80-0-0.jpg" alt="Radio" />
            </div>

            <div className={styles.playButton}>
                <button>
                    <ImPlay3 />
                </button>
            </div>

            <span>Ao vivo</span>

            <div id={styles.channel}>Antena 1</div>
        </div>
    )
}

export default RadioCard
