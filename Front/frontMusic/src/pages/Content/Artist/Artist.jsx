import { BsTwitter, BsFacebook, BsFillPlayFill, BsThreeDots } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

import CustomNav from '../../../components/Nav/CustomNav/CustomNav'
import Button from '../../../components/Buttons/Button/Button'

import styles from './Artist.module.css'

function Artist({content}) {

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
                            <Button width='130px' icon={<BsFillPlayFill size={20} />} text='MIX' type='pink' />

                            <button className={styles.button}> <AiFillHeart size={18} /> </button>
                            <button className={styles.button}> <BsThreeDots size={18} /> </button>
                        </div>
                    </div>
                </div>

                <div className={styles.medias}>
                    <BsTwitter color='#fff8' />
                    <BsFacebook color='#fff8' />
                </div>
            </div>

            <CustomNav navigations={playlists} padding='0 6rem' />

            {content}
        </section>
    )
}

export default Artist