import { ImPlay3 } from 'react-icons/im'

import styles from './RecentlyCard.module.css'

function RecentlyCard() {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <img src="https://e-cdns-images.dzcdn.net/images/cover/b3dd65f6ce5c6c32186bac6777471e6b/264x264-000000-80-0-0.jpg" alt="Recently" />
                
                <button>
                    <ImPlay3 />
                </button>
            </div>

            <span> Um mix infinito de favoritos e faixas novas </span>
        </div>
    )
}

export default RecentlyCard