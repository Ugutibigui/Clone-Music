import { BsTwitter, BsFacebook, BsFillPlayFill, BsThreeDots } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'

import TopArtistMusic from '../../../components/Layout/TopMusic/TopArtistMusic'
import TopPlaylist from '../../../components/Layout/TopPlaylist/TopPlaylist'
import PlaylistNav from '../../../components/Nav/PlaylistNav/PlaylistNav'
import Button from '../../../components/Buttons/Button/Button'

import styles from './Artist.module.css'

function Artist() {

    const playlists = [
        { name: 'Discografia', to: '/artist/:id' },
        { name: 'Top músicas', to: '/artist/:id/top_track' },
        { name: 'Artistas semelhantes', to: '/artist/:id/related_artist' },
        { name: 'Playlists', to: '/artist/:id/playlists' },
        { name: 'Shows', to: '/artist/:id/concerts' },
        { name: 'Biografia', to: '/artist/:id/biography' }
    ]

    return (
        <section className={styles.container}>
            <div className={styles.topContent}>
                <div className={styles.profile}>
                    <img src="https://e-cdn-images.dzcdn.net/images/artist/3a6e09e739db1615be58b155a7331068/264x264-000000-80-0-0.jpg" alt="Mc Hariel" />

                    <div className={styles.infoArtist}>
                        <h1>Mc Hariel</h1>
                        <h2>Ouça Mundão Girou Deluxe aqui na Deezer!</h2>
                        <p>1.046.862 fãs</p>

                        <div className={styles.buttons}>
                            <Button icon={<BsFillPlayFill />} text='MIX' type='pink' />

                            <button> <AiFillHeart /> </button>
                            <button> <BsThreeDots /> </button>
                        </div>
                    </div>
                </div>

                <div className={styles.medias}>
                    <BsTwitter />
                    <BsFacebook />
                </div>
            </div>

            <nav>
                <ul>
                    {playlists.map((item, index) => (
                        <PlaylistNav object={item} key={index} />
                    ))}
                </ul>
            </nav>

            <div className={styles.topTrack}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1>Top músicas</h1>
                        <span> <IoIosArrowForward /> </span>
                    </div>

                    <ul>
                        <TopArtistMusic />
                        <TopArtistMusic />
                        <TopArtistMusic />
                        <TopArtistMusic />
                    </ul>
                </div>

                <aside>
                    <div className={styles.title}>
                        <h1>Playlists</h1>
                        <span> <IoIosArrowForward /> </span>
                    </div>

                    <ul>
                        <TopPlaylist />
                        <TopPlaylist />
                        <TopPlaylist />

                        <Button text='VER MAIS PLAYLIST' type='black' />
                    </ul>
                </aside>
            </div>

            <div className={styles.latest}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <h1>Último lançamento</h1>
                        <span> <IoIosArrowForward /> </span>
                    </div>

                    <div className={styles.latestTrack}>
                        <div className={styles.cardMusic}>
                            <img src="https://e-cdns-images.dzcdn.net/images/cover/c8252a730831e5931532ec798529591d/200x200-000000-80-0-0.jpg" alt="Music" />

                            <p> ℗ 2023 Warner Music Brasil Ltda. </p>
                        </div>

                        <div className={styles.infoMusic}>
                            <h1>Flores de Plástico</h1>
                            <p>31/03/2024</p>

                            <TopArtistMusic />
                        </div>
                    </div>
                </div>

                <aside>
                    <div className={styles.title}>
                        <h1>Artistas semelhantes</h1>
                        <span> <IoIosArrowForward /> </span>
                    </div>

                    <ul>
                        <TopPlaylist /> 
                        <TopPlaylist />
                        <TopPlaylist />

                        <Button text='VER MAIS PLAYLIST' type='black' />
                    </ul>
                </aside>
            </div>
        </section>
    )
}

export default Artist