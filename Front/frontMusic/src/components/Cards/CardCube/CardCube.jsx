import { useState } from 'react'

import styles from './CardCube.module.css'

import { ImPlay3 } from 'react-icons/im'
import { FiHeart } from 'react-icons/fi'
import { BsThreeDots } from 'react-icons/bs'

function CardCube() {

    const [className, setClassName] = useState(`${styles.btn}`);

    const ShowButtons = () => {
        setClassName(`${styles.addButton}`);
    };

    const HideButtons = () => {
        setClassName(`${styles.btn}`);
    };

    return (
        <div className={styles.imageCube}>
            <div className={styles.imageEnd}>
                <img
                onMouseEnter={ShowButtons}
                onMouseLeave={HideButtons} 
                src='https://e-cdns-images.dzcdn.net/images/playlist/6ebfed888b3b116667d2b2897c995f29/264x264-000000-80-0-0.jpg' alt="Artista" />

                <div className={styles.playButtonCube}>
                    <button>
                        <ImPlay3 />
                    </button>

                    <button className={className}>
                        <FiHeart />
                    </button>

                    <button className={className}>
                        <BsThreeDots />
                    </button>
                </div>
            </div>

            <span>Top 50 Sertanejo</span>

            <p>911.800 fãs</p>
        </div>
    )
}
export default CardCube
