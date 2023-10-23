import { RiPlayList2Fill } from 'react-icons/ri'
import { MdFavoriteBorder } from 'react-icons/md'
import { TbPlaylist } from 'react-icons/tb'
import { IoMdShareAlt, IoIosArrowBack } from 'react-icons/io'
import { BsPeopleFill } from 'react-icons/bs'
import { useState, useEffect, useRef, useContext } from 'react'
import { Context } from '../../../context/context'

import Search from '../../Search/Search'
import api from '../../../services/api'

import styles from './InfoMusic.module.css'

const InfoMusic = ({ open, setOpen, music }) => {

    const options = [
        { icon: RiPlayList2Fill, text: 'Ouvir em seguida', click: '' },
        { icon: MdFavoriteBorder, text: 'Adicionar aos meus favoritos', click: 'favorite' },
        { icon: TbPlaylist, text: 'Adicionar a playlist', click: 'playlist' },
        { icon: IoMdShareAlt, text: 'Compartilhar', click: 'share' },
        { icon: BsPeopleFill, text: 'Perfil do Criador', click: 'profile' },
    ]

    const ulRef = useRef(null)
    const [actually, setActually] = useState('')
    const [playlist, setPlaylist] = useState([])

    const [userState, dispatch] = useContext(Context)

    const addToPlaylist = async (playId, musicId) => {
        const body = {
            playId : playId,
            idMusic : musicId
        }

        try {
            await api.post('/playlist/addToPlaylist', body)
            .then(response => {
                if (response.data.ok === true) {
                    alert("Música adicionada com sucesso")
                } else {
                    alert('Erro ao adicionar música')
                }
            })
        } catch (error) {
            console.log(`Erro ao adicionar música a playlist: ${error}`)
        }
    }

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (ulRef.current && !ulRef.current.contains(event.target)) {
                setOpen(false)
                setActually(false)
            }
        }
        document.addEventListener('mousedown', handleOutsideClick)
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [ulRef])

    useEffect(() => {
        if (open) {
            setActually('config')
        }
    }, [open])

    useEffect(() => {
        fetch(`http://localhost:8000/playlist?user=${userState.id}`, {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setPlaylist(data))
    }, [userState.id])

    return (
        <div className={styles.modalInfos} ref={ulRef}>
            {actually === 'config' && (

                options.map((option, index) => (
                    <div key={index} className={styles.option} onClick={() => setActually(option.click)}>
                        <option.icon color='#fff' size={20} />
                        <h3>{option.text}</h3>
                    </div>
                ))

            )}

            {actually === 'playlist' && (
                <div className={styles.addContent}>
                    <div className={styles.toBack}>
                        <button onClick={() => setActually('config')}>
                            <IoIosArrowBack size={20} color='#a2a2ad' />
                        </button>
                        <span>Voltar</span>
                    </div>

                    <div className={styles.search}>
                        <Search size='100%' placeholder='Buscar' />
                    </div>

                    <div className={styles.playlists}>
                        {playlist.map((playlist, index) => (
                            <div className={styles.playlist} key={index} onClick={() => addToPlaylist(playlist.playId, music.idMusic)}>
                                <img src={playlist.photo} alt={playlist.name} />

                                <h2> {playlist.name} </h2>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default InfoMusic