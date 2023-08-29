import { RiPlayList2Fill } from 'react-icons/ri'
import { MdFavoriteBorder } from 'react-icons/md'
import { TbPlaylist } from 'react-icons/tb'
import { IoMdShareAlt } from 'react-icons/io'
import { BsPeopleFill } from 'react-icons/bs'
import { useState, useEffect, useRef } from 'react'

import styles from './InfoMusic.module.css'

const InfoMusic = ({open, setOpen}) => {

    const options = [
        { icon: RiPlayList2Fill, text: 'Ouvir em seguida' },
        { icon: MdFavoriteBorder, text: 'Adicionar aos meus favoritos' },
        { icon: TbPlaylist, text: 'Adicionar a playlist' },
        { icon: IoMdShareAlt, text: 'Compartilhar' },
        { icon: BsPeopleFill, text: 'Perfil do Criador' },
    ]

    const ulRef = useRef(null)

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (ulRef.current && !ulRef.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [ulRef])

    return (
        open && (
            <div className={styles.modalInfos} ref={ulRef}>
                {options.map((option, index) => (
                    <div key={index} className={styles.option}>
                        <option.icon color='#fff' size={20}/>
                        <h3>{option.text}</h3>
                    </div>
                ))}
            </div>
        )
    )
}

export default InfoMusic