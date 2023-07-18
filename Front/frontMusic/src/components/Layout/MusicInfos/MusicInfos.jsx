import { useState, useEffect } from 'react'
import { BsFillPlayFill, BsThreeDots, BsFillHeartFill } from 'react-icons/bs'
import { TbMicrophone2 } from 'react-icons/tb'
import { RiBarcodeFill } from 'react-icons/ri'

import styles from './MusicInfos.module.css'

function MusicInfos({ infos, moreInfos }) {

    const [buttonClass, setButtonClass] = useState(`${styles.remove}`)
    const [wrapperClass, setWrapperClass] = useState('')
    const [artistNames, setArtistNames] = useState([])

    function formatDate(date) {
        const formattedDate = new Date(date)
        const day = formattedDate.getDate()
        const month = formattedDate.getMonth() + 1
        const year = formattedDate.getFullYear()
        return `${day}/${month}/${year}`
    }

    const userIdArray = infos.userId.split(',').map(value => value.trim())

    useEffect(() => {
        const fetchArtistNames = async () => {
            const artists = []
            for (const userId of userIdArray) {
                const response = await fetch(`http://localhost:8000/artists?user=${userId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                const data = await response.json()
                if (data && data.length > 0) {
                    artists.push(data[0].name)
                }
            }
            setArtistNames(artists)
        }

        fetchArtistNames()
    }, [userIdArray])

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
                    <img src={infos.photo} alt={infos.name} />
                    <button className={buttonClass}> <BsFillPlayFill size={20} color='#000' /> </button>
                </div>

                <p> {infos.name} </p>
            </div>

            <div className={styles.right} style={moreInfos ? {width: '50%'} : {width: 'unset'}}>
                <div className={styles.infos}>
                    <button> <TbMicrophone2 color='#fff' size={20} /> </button>
                    <button> <BsFillHeartFill color='#fff' size={20} /> </button>
                    <button> <BsThreeDots color='#fff' size={20} /> </button>
                </div>

                {moreInfos && (
                    <>
                        <div className={styles.artists}> {artistNames.map((name, index) => (
                            <a key={index} href=""> {name},  </a>
                        ))} </div>
                        <h3 id={styles.views}> {infos.name} </h3>
                        <span id={styles.date}> {formatDate(infos.date)} </span>
                        <span id={styles.pop}> <RiBarcodeFill /> </span>
                        <input type="checkbox" name="boxMusics" id={styles.cubeMusic} />
                        <label id={styles.labelMusic} htmlFor="cubeMusic"></label>
                    </>
                )}
            </div>
        </li>
    )
}

export default MusicInfos