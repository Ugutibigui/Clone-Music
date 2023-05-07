import styles from './Explore.module.css'

import RadioList from '../../../components/RadioList/RadioList'

function Explore() {

    // Lógica temporaria

    return (
        <div className={styles.infoContent}>
            <h1>Todos os Canais</h1>

            <RadioList h2='Categorias' amount={29} />
            <RadioList h2='Gêneros' amount={38} />
            <RadioList h2='Podscasts por categoria' amount={39} />
        </div>
    )
}

export default Explore
