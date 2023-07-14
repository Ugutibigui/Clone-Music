import { useState } from 'react'
import { BsFillPlayFill, BsThreeDots, BsFillHeartFill } from 'react-icons/bs'
import { TbMicrophone2 } from 'react-icons/tb'
import { RiBarcodeFill } from 'react-icons/ri'

import styles from './MusicInfos.module.css'

function MusicInfos({ music, moreInfos }) {

    const [buttonClass, setButtonClass] = useState(`${styles.remove}`)
    const [wrapperClass, setWrapperClass] = useState('')

    return (
        <li className={styles.wrapper} id={wrapperClass}
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
                    <button className={buttonClass}> <BsFillPlayFill size={20} color='#000' /> </button>
                </div>

                <p>1. Set dos Casados</p>
            </div>

            <div className={styles.right}>
                <div className={styles.infos}>
                    <button> <TbMicrophone2 color='#fff' size={20} /> </button>
                    <button> <BsFillHeartFill color='#fff' size={20} /> </button>
                    <button> <BsThreeDots color='#fff' size={20} /> </button>
                </div>

                {moreInfos && (
                    <>
                        <h3> Mc hariel </h3>
                        <h3> Set dos Casados </h3>
                        <span> 10:43 </span>
                        <span> <RiBarcodeFill /> </span>
                        <input type="checkbox" name="boxMusics" id='cubeMusic' />
                        <label htmlFor="cubeMusic"></label>
                    </>
                )}
            </div>
        </li>
    )
}

export default MusicInfos