import { IoIosArrowDown } from 'react-icons/io'

import RadioCard from '../../../components/Cards/Radio Card/RadioCard'
import Container from '../../../components/Layout/Container/Container'

import styles from './Radio.module.css'

function Radio() {
    return (
        <Container>
            <div className={styles.radioContainer}>
                <h1>Rádios</h1>

                <button>
                    RECOMENDADO
                    <IoIosArrowDown />
                </button>
            </div>

            <ul className={styles.radioContent}>
                {(() => { // Consertar ao usar API, utilizar map
                    let radioList = []
                    for (let i = 0; i < 100; i++) {
                        radioList.push(
                            <li>
                                <RadioCard key={i} />
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
        </Container>
    )
}

export default Radio
