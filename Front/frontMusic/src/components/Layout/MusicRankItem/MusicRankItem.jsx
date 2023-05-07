import { useState } from 'react'
import { BsFillPlayFill, BsThreeDots, BsFillHeartFill } from 'react-icons/bs'
import { TbMicrophone2 } from 'react-icons/tb'

import styles from './MusicRankItem.module.css'

function MusicRankItem({ image, title }) {

    const [buttonClass, setButtonClass] = useState(`${styles.remove}`)
    const [wrapperClass, setWrapperClass] = useState('')

    return (
        <li id={styles.wrapper} className={wrapperClass}
            onMouseEnter={() => {
                setButtonClass(`${styles.add}`)
                setWrapperClass(`${styles.background}`)
            }}
            onMouseLeave={() => {
                setButtonClass(`${styles.remove}`)
                setWrapperClass('')
            }}>
            <div className={styles.left}>
                <div className={styles.image}>
                    <img src="https://e-cdns-images.dzcdn.net/images/cover/22a7697cba2e247087ad0e0bb42ad8b6/40x40-000000-80-0-0.jpg" alt="Music" />
                    <button className={buttonClass}> <BsFillPlayFill size={20} /> </button>
                </div>

                <p>1. Set dos Casados</p>
            </div>

            <div className={styles.right}>
                <button> <TbMicrophone2 color='#fff' size={20} /> </button>
                <button> <BsFillHeartFill color='#fff' size={20} /> </button>
                <button> <BsThreeDots color='#fff' size={20} /> </button>
            </div>
        </li>
    )
}

export default MusicRankItem