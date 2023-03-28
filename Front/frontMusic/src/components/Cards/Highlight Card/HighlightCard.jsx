import styles from './HighlightCard.module.css'
import { ImPlay3 } from 'react-icons/im'


function HighlightCard() {
    return (
        <div className={styles.highlight}>
            <img src="https://e-cdns-images.dzcdn.net/images/misc/92e6a428a32c3ccfba0959e740411f69/0x711-000000-80-0-0.jpg" alt="Destaques" />

            <div className={styles.playButton}>
                <button>
                    <ImPlay3 />
                </button>
            </div>
        </div>
    )
}

export default HighlightCard
