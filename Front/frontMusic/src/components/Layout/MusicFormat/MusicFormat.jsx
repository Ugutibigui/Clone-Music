import CustomSelect from '../../Nav/CustomSelect/CustomSelect'
import SuggestionCard from '../../Cards/Suggestion Card/SuggestionCard'

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
                <SuggestionCard />
                <SuggestionCard />
                <SuggestionCard />
                <SuggestionCard />
                <SuggestionCard />
                <SuggestionCard />
                <SuggestionCard />
                <SuggestionCard />
                <SuggestionCard />
                <SuggestionCard />
            </section>
        </div>
    )
}

export default MusicFormat