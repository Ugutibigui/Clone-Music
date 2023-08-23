import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'
import { useState, useEffect } from 'react'

import AddContent from '../AddContent/AddContent'

import styles from './Channel.module.css'

function Channel({ addText, addLink, h2, h3, Card, request }) {

    const [contentCard, setContentCard] = useState([])

    useEffect(() => {
        console.log(`http://localhost:8000/${request}`)

        fetch(`http://localhost:8000/${request}`, {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json()) 
            .then(data => setContentCard(data.sort(() => Math.random() - 0.5)))
    }, [])

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
                {contentCard.map((item, index) => (
                    <Card object={item} key={index}/>
                ))}
            </div>
        </section>
    )
}

export default Channel
