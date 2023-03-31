import styles from './Channel.module.css'

import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'


function Channel({h2, h3, Card, requestAPI}) {                                                                    
    return (
        <section className={styles.channel}>
            <div className={styles.container}>
                <div className={styles.titleSlider}>
                    <div className={styles.texts}>
                        {h2 ? <h2>{h2}</h2> : null}

                        {h3 ? (<h3>{h3}</h3>) : null}
                    </div>

                    <div className={styles.sliders}>
                        <button id='button-left'><AiOutlineLeft /></button>
                        <button id='button-right'><AiOutlineRight /></button>
                    </div>
                </div>

                <div className={styles.gallery} >
                    <div className={styles.carousel}>
                        <Card image='' title='' fans='' date='' author='' tracks=''/>
                        <Card image='' title='' fans='' date='' author='' tracks=''/>
                        <Card image='' title='' fans='' date='' author='' tracks=''/>
                        <Card image='' title='' fans='' date='' author='' tracks=''/>
                        <Card image='' title='' fans='' date='' author='' tracks=''/>
                        <Card image='' title='' fans='' date='' author='' tracks=''/>
                        <Card image='' title='' fans='' date='' author='' tracks=''/>
                        <Card image='' title='' fans='' date='' author='' tracks=''/>
                        <Card image='' title='' fans='' date='' author='' tracks=''/>
                        <Card image='' title='' fans='' date='' author='' tracks=''/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Channel
