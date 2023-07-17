import { Link } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { useEffect, useState } from 'react'

import TableMusic from '../../../../../components/Layout/TableMusic/TableMusic'
import MusicInfos from '../../../../../components/Layout/MusicInfos/MusicInfos'

import styles from './All.module.css'

const All = ({ name }) => {

    const [fans, setFans] = useState([])
    const [musics, setMusics] = useState([])
    const [artist, seArtist] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/artists?name=${name}`, {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => seArtist(data[0]))
    }, [name])

    useEffect(() => {
        fetch(`http://localhost:8000/fans?user=${artist.userId}`, {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setFans(data[0]))
    }, [artist])

    useEffect(() => {
        fetch(`http://localhost:8000/musics?user=${artist.userId}`, {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setMusics(data))
    }, [artist])

    return (
        <>
            <section className={styles.mainResult}>
                <h1> Principal Resultado </h1>

                <div className={styles.profile}>
                    <img src={artist.photo} alt={artist.name} />

                    <div className={styles.infos}>
                        <h2> {artist.name} </h2>
                        <span> {fans.fansCount} fãs</span>
                        <div> Artista </div>
                    </div>
                </div>
            </section>

            <section className={styles.musics}>
                <Link to='/search/music'>
                    <h1> Músicas </h1>
                    <SlArrowRight size={20} />
                </Link>

                <div>
                    <TableMusic>
                        <span>MÚSICA</span>
                        <span>ARTISTA</span>
                        <span>ÁLBUM</span>
                        <span> <AiOutlineClockCircle /> </span>
                        <span>POP.</span>
                        <div id='cubeTable'></div>
                    </TableMusic>

                    <div className={styles.musicInfos}>
                        {musics.length > 0 ?
                            musics.map((music, index) => (
                                <MusicInfos key={index} infos={music} moreInfos={true} />
                            )) : (
                                <h1> Nenhuma música encontrada!</h1>
                            )}
                    </div>
                </div>
            </section>

            <section className={styles.albuns}>

            </section>

            <section className={styles.artists}>

            </section>

            <section className={styles.profiles}>

            </section>
        </>
    )
}

export default All