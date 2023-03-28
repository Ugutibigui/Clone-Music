import styles from './Explore.module.css'

import ExploreContainer from '../../../components/Layout/ExploreContainer/ExploreContainer'

function Explore() {
    return (
        <div className={styles.infoContent}>
            <h1>Todos os Canais</h1>

            <ExploreContainer h2='Categorias' amount={29} />
            <ExploreContainer h2='Gêneros' amount={38} />
            <ExploreContainer h2='Podscasts por categoria' amount={39} />
        </div>
    )
}

export default Explore
