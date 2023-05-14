import { AiOutlineClockCircle } from 'react-icons/ai'

import Search from '../../../../../components/Search/Search'
import MusicRankItem from '../../../../../components/Layout/MusicRankItem/MusicRankItem'

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
                <MusicRankItem moreInfos={true} />
                <MusicRankItem moreInfos={true} />
                <MusicRankItem moreInfos={true} />
                <MusicRankItem moreInfos={true} />
                <MusicRankItem moreInfos={true} />
                <MusicRankItem moreInfos={true} />
                <MusicRankItem moreInfos={true} />
            </ul>
        </div>
    )
}

export default TopTrack