import styles from './Radio.module.css'

import {IoIosArrowDown} from 'react-icons/io'
import CardRadio from '../../../components/Cards/CardRadio/CardRadio'

function Radio() {
    return (
        <div className={styles.infoContent}>
            <div className={styles.radioContainer}>
                <h1>Rádios</h1>

                <button>
                    RECOMENDADO
                    <IoIosArrowDown/>
                </button>
            </div>

            <ul className={styles.radioContent}>
                {(() => { // Consertar ao usar API, utilizar map
                    let radioList = []
                    for (let i=0;i<100;i++) {
                        radioList.push(
                            <li>
                                <CardRadio key={i}/> 
                            </li>
                        )
                    }
                    return radioList
                })()}
            </ul>

            <footer>
                <span>Não são as estações que você está procurando?</span>
                <p>Use a Busca para encontrar estações de rádio no mundo todo.</p>
            </footer>
        </div>
    )
}

export default Radio
