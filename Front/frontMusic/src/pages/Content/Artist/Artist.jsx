import { BsTwitter, BsFillPlayFill, BsThreeDots } from 'react-icons/bs'
import { AiFillHeart, AiFillInstagram } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import CustomNav from '../../../components/Nav/CustomNav/CustomNav'
import Container from '../../../components/Layout/Container/Container'
import Button from '../../../components/Button/Button'

import styles from './Artist.module.css'

function Artist({ content }) {

    const { id } = useParams()

    const playlists = [
        { name: 'Discografia', to: `/artist/${id}` },
        { name: 'Top músicas', to: `/artist/${id}/top_track` }
    ]

    const [artist, setArtist] = useState([])
    const [music, setMusics] = useState([])
    const [fans, setFans] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/artists?user=${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setArtist(data[0]))
            .catch(error => console.log(`Erro na procura de artista pelo ID: ${error}`))
    }, [id])

    useEffect(() => {
        fetch(`http://localhost:8000/musics?user=${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setMusics(data.sort(() => Math.random() - 0.5)))
            .catch(error => console.log(`Erro na procura de musica do artista pelo ID: ${error}`))
    }, [id])

    useEffect(() => {
        fetch(`http://localhost:8000/fans?user=${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setFans(data))
            .catch(error => console.log(`Erro na procura de fans do artista pelo ID: ${error}`))
    }, [id])

    if (music.length === 0 || fans.length === 0 || artist.length === 0) {
        return (
            <Container>
                <h1>Artista não encontrado!</h1>
            </Container>
        )
    }

    return (
        <Container>
            <div className={styles.topContent}>
                <div className={styles.profile}>
                    <img src={artist.photo} alt={artist.name} />

                    <div className={styles.infoArtist}>
                        <h1> {artist.name} </h1>
                        <p>Ouça {music[0].name} aqui na Deezer!</p>
                        <span>{fans[0].fansCount.toLocaleString()} fãs</span>

                        <div className={styles.buttons}>
                            <Button icon={<BsFillPlayFill size={20} />} text='MIX' type='pink' />

                            <button> <AiFillHeart size={18} /> </button>
                            <button> <BsThreeDots size={18} /> </button>
                        </div>
                    </div>
                </div>

                <div className={styles.medias}>
                    <BsTwitter color='#fff8' size={20} />
                    <AiFillInstagram color='#fff8' size={20} />
                </div>
            </div>

            <CustomNav navigations={playlists} />

            {React.cloneElement(content, { musicData: music })}
        </Container>
    )
}

export default Artist