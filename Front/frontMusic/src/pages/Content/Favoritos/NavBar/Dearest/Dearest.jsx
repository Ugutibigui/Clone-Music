import styles from './Dearest.module.css'
import Search from '../../../../../components/Nav/Search/Search'

import { RiShareForwardLine } from 'react-icons/ri'

function Dearest() {
    return (
        <>
            <h1 id={styles.dearest}>0 mais querida</h1>

            <section className={styles.shareSection}>
                <button id={styles.share}> <RiShareForwardLine/> </button>

                <Search size='600px' placeholder='Buscar nas faixas' />
            </section>

            <div className={styles.tracks}>
                <span>Sem faixas ainda</span>
                <p>Vamos encontrar algumas faixas para adicionar aqui.</p>
                <button>ADICIONAR FAIXAS</button>
            </div>
        </>
    )
}

export default Dearest