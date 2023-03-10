import styles from './Favorite.module.css'

import { TbArrowsShuffle } from 'react-icons/tb'

import NavFavorite from '../../../components/Nav/PlaylistNav/NavFavorite'
import PinkButton from '../../../components/Buttons/PinkButton/PinkButton'

function Favorite({ content }) {

    const playlists = [
        { name: 'Destaque', to: '/favorite' },
        { name: 'Mais queridas', to: '/favorite/dearest' },
        { name: 'Playlists', to: '/favorite/playlist' },
        { name: 'Álbuns', to: '/favorite/album' },
        { name: 'Artistas', to: '/favorite/artist' },
        { name: 'Histórico de reprodução', to: '/favorite/history' },
        { name: 'Podcasts', to: '/favorite/podcasts' },
        { name: 'Meus MP3', to: '/favorite/mp3' },
        { name: 'Seguindo', to: '/favorite/following' },
        { name: 'Seguidores', to: '/favorite/followers' }
    ]

    return (
        <div className={styles.infoContent}>
            <div className={styles.topProfile}>
                <div className={styles.profile}>
                    <img src="https://e-cdns-images.dzcdn.net/images/user/d41d8cd98f00b204e9800998ecf8427e/264x264-000000-80-0-0.jpg" alt="Profile" />

                    <div className={styles.profileInfos}>
                        <span>Ubbe Lothbrok</span>

                        <div className={styles.follows}>
                            <span>0 seguidor</span>
                            <span> - </span>
                            <span>0 seguindo</span>
                        </div>

                        <PinkButton text='MINHA MÚSICA - ALEATÓRIO' icon={<TbArrowsShuffle/>}/>
                    </div>
                </div>

                <ul>
                    {playlists.map((item, index) => (
                        <NavFavorite object={item} key={index} />
                    ))}
                </ul>
            </div>

            <div className={styles.mainPlaylists}>
                {content}
            </div>
        </div>
    )
}

export default Favorite