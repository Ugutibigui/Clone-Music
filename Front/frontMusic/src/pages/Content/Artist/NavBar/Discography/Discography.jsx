import { IoIosArrowForward } from 'react-icons/io'

import Button from '../../../../../components/Buttons/Button/Button'
import TopArtistMusic from '../../../../../components/Layout/TopMusic/TopArtistMusic'
import TopPlaylist from '../../../../../components/Layout/TopPlaylist/TopPlaylist'

import styles from './Discography.module.css'

function Discography() {
    return (
        <>
            <div className={styles.topContent}>
                <div className={styles.content}>
                    <h1>
                        <span>Top músicas  </span>
                        <IoIosArrowForward />
                    </h1>

                    <ul>
                        <TopArtistMusic />
                        <TopArtistMusic />
                        <TopArtistMusic />
                        <TopArtistMusic />
                    </ul>
                </div>

                <aside>
                    <ul>
                        <h1>
                            <span>Playlists  </span>
                            <IoIosArrowForward />
                        </h1>

                        <TopPlaylist />
                        <TopPlaylist />
                        <TopPlaylist />

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

                            <TopArtistMusic />
                        </div>
                    </div>
                </div>

                <aside>
                    <h1>
                        <span>Artistas semelhantes </span>
                        <IoIosArrowForward />
                    </h1>

                    <ul>
                        <TopPlaylist />
                        <TopPlaylist />
                        <TopPlaylist />

                        <Button text='VER MAIS PLAYLIST' type='black' />
                    </ul>
                </aside>
            </div>
        </>
    )
}

export default Discography