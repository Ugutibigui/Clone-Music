import styles from './Favorite.module.css'

import { TbArrowsShuffle } from 'react-icons/tb'

import Channel from '../../../components/Section/Channel/Channel'
import PlaylistNav from '../../../components/Nav/PlaylistNav/PlaylistNav'
import CardFavorite from '../../../components/Cards/CardFavorite/CardFavorite'

import PinkButton from '../../../components/Buttons/PinkButton/PinkButton'

function Favorite() {

    const playlist = ['Destaque', 'Mais queridas', 'Playlists', 'Álbuns', 'Artistas', 'Histórico de reprodução', 'Podcasts', 'Meus MP3', 'Seguindo', 'Seguidores']

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
                    {playlist.map((item, index) => (
                        <PlaylistNav text={item} key={index} />
                    ))}
                </ul>
            </div>

            <div className={styles.mainPlaylists}>
                <Channel h2='Playlists' Card={CardFavorite} addContent='' />
                <Channel h2='Artistas' Card={CardFavorite} addContent='' />
            </div>
        </div>
    )
}

export default Favorite