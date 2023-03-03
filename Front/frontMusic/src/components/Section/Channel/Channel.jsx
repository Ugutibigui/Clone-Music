import styles from './Channel.module.css'

import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'

function Channel(props) {                                                                    

    const h3 = (props) => {
        if (props.h3) {
            return <h3>{props.h3}</h3>
        }
    }

    return (
        <section className={styles.channel}>
            <div className={styles.container}>
                <div className={styles.titleSlider}>
                    <div className={styles.texts}>
                        <h2>{props.h2}</h2>

                        {h3(props)}
                    </div>

                    <div className={styles.sliders}>
                        <button id='button-left'><AiOutlineLeft /></button>
                        <button id='button-right'><AiOutlineRight /></button>
                    </div>
                </div>

                <div className={styles.gallery} >
                    <div className={styles.carousel}>
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                        <props.card image='' title='' fans='' date='' author='' tracks='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Channel
