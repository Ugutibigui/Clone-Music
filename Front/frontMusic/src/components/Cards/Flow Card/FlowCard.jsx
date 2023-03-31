import { FaPlay } from 'react-icons/fa'

import styles from './FlowCard.module.css'

function FlowCard({ img, text, color }) {
    return (
        <div className={styles.imageContainer}>
            <div className={styles.image}>
                <img src='https://e-cdns-images.dzcdn.net/images/cover/134d9be9901c73f5618e022fa447871d/232x232-none-80-0-0.png' alt="Flow" />
                <div className={styles.button}>
                    <button> <FaPlay size={20}/> </button>
                </div>
            </div>

            <p> Relax </p>
        </div>
    )
}

export default FlowCard