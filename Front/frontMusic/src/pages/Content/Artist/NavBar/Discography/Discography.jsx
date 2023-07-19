import { IoIosArrowForward } from 'react-icons/io'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import Button from '../../../../../components/Button/Button'
import MusicInfos from '../../../../../components/Layout/MusicInfos/MusicInfos'
import AlbumInfos from '../../../../../components/Layout/AlbumInfos/AlbumInfos'
import MusicCard from '../../../../../components/Cards/Music Card/MusicCard'

import styles from './Discography.module.css'

function Discography({ musicData }) {

    const [arrayMusic, setArrayMusics] = useState({})

    const [topMusics, setTopMusics] = useState([])
    const [latestMusic, setLatestMusic] = useState([])

    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:8000/musics?user=${id}&descviews=true&limit=4`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setTopMusics(data))
            .catch(error => console.log(`Erro na procura de top 4 musicas do artista pelo ID: ${error}`))
    }, [id])

    useEffect(() => {
        fetch(`http://localhost:8000/musics?user=${id}&descdate=true&limit=1`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setLatestMusic(data))
            .catch(error => console.log(`Erro na procura de música mais recente do artista pelo ID: ${error}`))
    }, [id])

    return (
        <>
            <section className={styles.artistContent}>
                <div className={styles.content}>
                    <Link to={`/artist/${id}/top_track`}>
                        <h1>Top músicas  </h1>
                        <IoIosArrowForward size={25} />
                    </Link>

                    <ul className={styles.trackContent}>
                        {topMusics.map((music, index) => (
                            <MusicInfos key={index} infos={music} moreInfos={false} />
                        ))}
                    </ul>
                </div>

                <aside>
                    <Link to={``}>
                        <h1> Playlists </h1>
                        <IoIosArrowForward size={25} />
                    </Link>

                    <ul className={styles.albumContent}>
                        <AlbumInfos />
                        <AlbumInfos />
                        <AlbumInfos />
                    </ul>

                    <Button text='VER MAIS PLAYLISTS' type='black' />
                </aside>
            </section>

            <section className={styles.artistContent}>
                <div className={styles.content}>
                    <Link to={``}>
                        <h1> Último lançamento </h1>
                        <IoIosArrowForward size={25} />
                    </Link>

                    <div className={`${styles.trackContent} ${styles.row}`}>
                        {latestMusic.map((music, index) => (
                            <MusicCard object={music} key={index} />
                        ))}

                        <div className={styles.infoMusic}>
                            {latestMusic.length > 0 ? (
                                <>
                                    <h1>{latestMusic[0].name}</h1>
                                    <span>{latestMusic[0].views} visualizações</span>
                                    {latestMusic.map((music, index) => (
                                        <MusicInfos infos={music} key={index} moreInfos={false} />
                                    ))}
                                </>
                            ) : (
                                <h1>Nenhum lançamento encontrado</h1>
                            )}
                        </div>
                    </div>
                </div>

                <aside>
                    <Link to={``}>
                        <h1> Artistas semelhantes </h1>
                        <IoIosArrowForward size={25} />
                    </Link>

                    <ul className={styles.albumContent}>
                        <AlbumInfos />
                        <AlbumInfos />
                        <AlbumInfos />
                    </ul>

                    <Button text='VER MAIS PLAYLIST' type='black' />
                </aside>
            </section>

            <section className={`${styles.artistContent} ${styles.column}`}>
                <div className={styles.subtitle}>
                    <h1> Músicas </h1>
                    <div id={styles.line}></div>
                </div>

                <ul className={styles.musicList}>
                    {musicData.map((music, index) => (
                        <li key={index}>
                            <MusicCard object={music} />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default Discography