import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'

import AddContent from '../AddContent/AddContent'

import styles from './Channel.module.css'

function Channel({ addText, addLink, h2, h3, Card }) {

    return (
        <section className={styles.channel}>
            <div className={styles.titleSlider}>
                <div className={styles.texts}>
                    {h2 && (<h2> {h2} </h2>)}
                    {h3 && (<h3> {h3} </h3>)}
                </div>

                <div className={styles.sliders}>
                    <button id='button-left'><AiOutlineLeft /></button>
                    <button id='button-right'><AiOutlineRight /></button>
                </div>
            </div>

            <div className={styles.carousel}>
                <Card/>
            </div>
        </section>
    )
}

export default Channel
