import { AiOutlineClockCircle } from 'react-icons/ai'

import Search from '../../../../../components/Search/Search'
import MusicInfos from '../../../../../components/Layout/MusicInfos/MusicInfos'

import styles from './TopTrack.module.css'

function TopTrack() {
    return (
        <div className={styles.topTrack}>
            <h1> Top Músicas </h1>

            <Search size='40%' placeholder='Buscar nas faixas' />¨

            <div className={styles.texts}>
                <span>MÚSICA</span>
                <span>ÁLBUM</span>
                <span> <AiOutlineClockCircle /> </span>
                <span>POP.</span>
                <div id={styles.cube}></div>
            </div>

            <ul>
                <MusicInfos moreInfos={true} />
                <MusicInfos moreInfos={true} />
                <MusicInfos moreInfos={true} />
                <MusicInfos moreInfos={true} />
                <MusicInfos moreInfos={true} />
                <MusicInfos moreInfos={true} />
                <MusicInfos moreInfos={true} />
            </ul>
        </div>
    )
}

export default TopTrack