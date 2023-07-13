import { Link } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'
import { AiOutlineClockCircle } from 'react-icons/ai'

import TableMusic from '../../../../../components/Layout/TableMusic/TableMusic'
import MusicInfos from '../../../../../components/Layout/MusicInfos/MusicInfos'

import styles from './All.module.css'

const All = () => {
    return (
        <>
            <section className={styles.mainResult}>
                <h1> Principal Resultado </h1>

                <div className={styles.profile}>
                    <img src="https://e-cdns-images.dzcdn.net/images/artist/3a6e09e739db1615be58b155a7331068/162x162-000000-80-0-0.jpg" alt="Aritst" />

                    <div className={styles.infos}>
                        <h2> MC Hariel </h2>
                        <span> 1.093.390 fãs </span>
                        <div> Artista </div>
                    </div>
                </div>
            </section>

            <section className={styles.musics}>
                <Link to='/search/music'>
                    <h1> Músicas </h1>
                    <SlArrowRight size={20} />
                </Link>

                <div>
                    <TableMusic>
                        <span>MÚSICA</span>
                        <span>ÁLBUM</span>
                        <span> <AiOutlineClockCircle /> </span>
                        <span>POP.</span>
                        <div id={styles.cube}></div>
                    </TableMusic>

                    {Array.from({ length: 8 }).map((_, index) => (
                        <MusicInfos key={index} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default All