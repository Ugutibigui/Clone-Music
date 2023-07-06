import { BsPlayFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'

import styles from './FlowCard.module.css'

function FlowCard() {

    const [flow, setFlow] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/flows", {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => setFlow(data))
    }, [])

    return (
        <div className={styles.item}>
            {
                flow.map((item, index) => (
                    <div className={styles.imageContainer} key={index}>
                        <div className={styles.image}>
                            <img src={item.image} alt={item.name} />

                            <div className={styles.button} style={{ backgroundImage: `${item.background}` }}>
                                <button> <BsPlayFill size={20} /> </button>
                            </div>
                        </div>

                        <p> {item.name} </p>
                    </div>
                ))
            }
        </div>
    )
}

export default FlowCard