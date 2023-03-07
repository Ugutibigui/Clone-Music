import styles from './Favorite.module.css'

import { TbArrowsShuffle } from 'react-icons/tb'

import Channel from '../../Section/Channel/Channel'
import PlaylistNav from '../../Nav/PlaylistNav/PlaylistNav'
import CardArtist from '../../Cards/CardArtist/CardArtist'

function Favorite() {

    const playlist = ['Destaque','Mais queridas','Playlists','Álbuns','Artistas','Histórico de reprodução','Podcasts','Meus MP3','Seguindo','Seguidores']

    return(
        <div className={styles.infoContent}>
            <div className={styles.topProfile}>
                <div className={styles.profile}>
                    <img src="https://e-cdns-images.dzcdn.net/images/user/d41d8cd98f00b204e9800998ecf8427e/264x264-000000-80-0-0.jpg" alt="Profile" />

                    <div className={styles.profileInfos}>
                        <h1>Ubbe Lothbrok</h1>

                        <div className={styles.follows}>
                            <span>0 seguidor</span>
                            <span>-</span>
                            <span>0 seguindo</span>
                        </div>

                        <button>
                            <TbArrowsShuffle/>
                            MINHA MÚSICA - ALEATÓRIO
                        </button>
                    </div>
                </div>

                <nav>
                    <ul>
                        {playlist.map((item, index) => (
                            <PlaylistNav text={item} key={index} />
                        ))}
                    </ul>
                </nav>
            </div>

            <div className={styles.mainPlaylists}>
                <Channel h2='Playlists' card='' addContent=''/>
                <Channel h2='Artistas' card={CardArtist} addContent=''/>
            </div>
        </div>
    )
}

export default Favorite