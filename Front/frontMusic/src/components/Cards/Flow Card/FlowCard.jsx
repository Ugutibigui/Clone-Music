import { BsPlayFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'

import styles from './FlowCard.module.css'

function FlowCard({ object }) {
    return (
        <div className={styles.item}>
            <div className={styles.imageContainer}>
                <div className={styles.image}>
                    <img src={object.image} alt={object.name} />

                    <div className={styles.button} style={{ backgroundImage: `${object.background}` }}>
                        <button> <BsPlayFill size={20} /> </button>
                    </div>
                </div>
                <p> {object.name} </p>
            </div>
        </div>
    )
}

export default FlowCard