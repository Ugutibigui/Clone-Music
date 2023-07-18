import { IoIosArrowForward } from 'react-icons/io'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import Button from '../../../../../components/Button/Button'
import MusicInfos from '../../../../../components/Layout/MusicInfos/MusicInfos'
import SingerDetails from '../../../../../components/Layout/SingerDetails/SingerDetails'
import MusicFormat from '../../../../../components/Layout/MusicFormat/MusicFormat'

import styles from './Discography.module.css'

function Discography({ musicData }) {

    const [arrayMusic, setArrayMusics] = useState({})
    const [topMusics, setTopMusics] = useState([])

    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:8000/musics?user=${id}&desc=true&limit=4`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setTopMusics(data))
            .catch(error => console.log(`Erro na procura de top 4 musicas do artista pelo ID: ${error}`))
    }, [id])

    return (
        <>
            <div className={styles.topContent}>
                <div className={styles.content}>
                    <Link to={`/artist/${id}/top_track`}>
                        <span>Top músicas  </span>
                        <IoIosArrowForward />
                    </Link>

                    <ul>
                        {topMusics.map((music, index) => (
                            <MusicInfos key={index} infos={music} moreInfos={false} />
                        ))}
                    </ul>
                </div>

                <aside>
                    <ul>
                        <h1>
                            <span>Playlists  </span>
                            <IoIosArrowForward />
                        </h1>

                        <SingerDetails />
                        <SingerDetails />
                        <SingerDetails />

                        <Button text='VER MAIS PLAYLIST' type='black' />
                    </ul>

                </aside>
            </div>

            <div className={styles.topContent}>
                <div className={styles.content}>
                    <h1>
                        <span>Último lançamento </span>
                        <IoIosArrowForward />
                    </h1>

                    <div className={styles.latestTrack}>
                        <div className={styles.cardMusic}>
                            <img src="https://e-cdns-images.dzcdn.net/images/cover/c8252a730831e5931532ec798529591d/200x200-000000-80-0-0.jpg" alt="Music" />

                            <p> ℗ 2023 Warner Music Brasil Ltda. </p>
                        </div>

                        <div className={styles.infoMusic}>
                            <h1>Flores de Plástico</h1>
                            <p id={styles.data}>31/03/2024</p>


                        </div>
                    </div>
                </div>

                <aside>
                    <h1>
                        <span>Artistas semelhantes </span>
                        <IoIosArrowForward />
                    </h1>

                    <ul>
                        <SingerDetails />
                        <SingerDetails />
                        <SingerDetails />

                        <Button text='VER MAIS PLAYLIST' type='black' />
                    </ul>
                </aside>
            </div>

            <MusicFormat listMusic={arrayMusic[0]} text='Álbuns' selectOne={['Tipo', 'A-Z', 'Data de Lançamento', 'Mais ouvidos']} selectTwo={['Grade', 'Lista']} />
            <MusicFormat listMusic={arrayMusic[1]} text='EPs' />
            <MusicFormat listMusic={arrayMusic[2]} text='Singles' />
            <MusicFormat listMusic={arrayMusic[3]} text='Destaque em' />
        </>
    )
}

export default Discography