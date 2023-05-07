import { AiOutlineHeart } from 'react-icons/ai'

import styles from './SingerDetails.module.css'

function SingerDetails({image, title, info}) {
    return(
        <li className={styles.wrapper}>
            <img src="https://e-cdns-images.dzcdn.net/images/playlist/849c0eebb937d630ff0afc76fd2a1b60/56x56-000000-80-0-0.jpg" alt="Playlist" />

            <div className={styles.texts}>
                <p>
                    100% Mc Hariel 
                    <br />
                    <span> 50 faixas - 23.801 fãs </span>
                </p>
            </div>

            <button> <AiOutlineHeart color='#fff' size={20}/> </button>
        </li>
    )
}

export default SingerDetails