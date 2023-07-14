import { AiOutlineClockCircle } from 'react-icons/ai'

import TableMusic from '../../../../../components/Layout/TableMusic/TableMusic'
import MusicInfos from '../../../../../components/Layout/MusicInfos/MusicInfos'

import styles from './MusicSearch.module.css'

const MusicSearch = () => {
    return (
        <section className={styles.allMusics}>
            <h1> 319 Faixas </h1>

            <div>
                <TableMusic>
                    <span>MÚSICA</span>
                    <span>ARTISTA</span>
                    <span>ÁLBUM</span>
                    <span> <AiOutlineClockCircle /> </span>
                    <span>POP.</span>
                    <div id='cubeTable'></div>
                </TableMusic>

                <div className={styles.musicInfos}>
                    {Array.from({ length: 30 }).map((_, index) => (
                        <MusicInfos key={index} moreInfos={true} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MusicSearch