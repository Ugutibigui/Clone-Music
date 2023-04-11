import { BsFillPlayFill, BsThreeDots, BsFillHeartFill } from 'react-icons/bs'
import { TbMicrophone2 } from 'react-icons/tb'

import styles from './TopArtistMusic.module.css'

function TopArtistMusic({image, title}) {
    return (
        <li className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.image}>
                    <img src="https://e-cdns-images.dzcdn.net/images/cover/22a7697cba2e247087ad0e0bb42ad8b6/40x40-000000-80-0-0.jpg" alt="Music" />
                    <button> <BsFillPlayFill /> </button>
                </div>

                <p>1. Set dos Casados</p>
            </div>

            <div className={styles.right}>
                <button> <TbMicrophone2/> </button>
                <button> <BsFillHeartFill/> </button>
                <button> <BsThreeDots/> </button>
            </div>
        </li>
    )
}

export default TopArtistMusic