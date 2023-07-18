import CustomSelect from '../../Nav/CustomSelect/CustomSelect'
import MusicCard from '../../Cards/Music Card/MusicCard'

import styles from './MusicFormat.module.css'

const MusicFormat = ({ listMusic, text, selectOne, selectTwo }) => {
    return (
        <div className={styles.music}>
            <div className={styles.format}>
                <h1> {text} </h1>

                <div id={styles.line}></div>

                <div className={styles.selects}>
                    {selectOne && (
                        <CustomSelect array={selectOne} />
                    )}

                    {selectTwo && (
                        <CustomSelect array={selectTwo} />
                    )}
                </div>
            </div>

            <section>
                
            </section>
        </div>
    )
}

export default MusicFormat