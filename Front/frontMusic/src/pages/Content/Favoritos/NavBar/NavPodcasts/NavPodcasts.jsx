import { MdPodcasts } from 'react-icons/md'
import { CgMediaPodcast } from 'react-icons/cg'

import styles from './NavPodcasts.module.css'

function NavPodcasts() {
    return (
        <>
            <h1>0 Podcast</h1>

            <div className={styles.cards}>
                <div className={styles.content}>
                    <div className={styles.card} >
                        <MdPodcasts size={120} color='#ef5466'/>
                    </div>

                    <span> Últimos episódios </span>
                </div>

                <div className={styles.content}>
                    <div className={styles.card} >
                        <CgMediaPodcast size={120} color='#ef5466'/>
                    </div>

                    <span> Em progresso </span>
                </div>
            </div>
        </>
    )
}

export default NavPodcasts