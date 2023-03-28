import Channel from '../../../components/Layout/Channel/Channel'
import SuggestionCard from '../../../components/Cards/Suggestion Card/SuggestionCard'
import HighlightCard from '../../../components/Cards/Highlight Card/HighlightCard'

import styles from './Podcasts.module.css'

function Podcasts() {
    return(
        <div className={styles.infoContent}>
            <Channel h2='Podcasts populares' Card={SuggestionCard} RequestAPI='' />
            <Channel h2='Todas as categorias' Card={SuggestionCard} RequestAPI=''/>
            <Channel Card={HighlightCard} RequestAPI=''/>
            <Channel h2='Nossos editores estão amando' Card={SuggestionCard} RequestAPI='' />
            <Channel h2='Destaques' Card={HighlightCard} RequestAPI=''/>
            <Channel h2='Escolhas novas da semana' Card={SuggestionCard} RequestAPI='' />
            <Channel h2='Podcasts por duração' Card={SuggestionCard} RequestAPI=''/>
            <Channel h2='Deezer Originals' Card={SuggestionCard} RequestAPI='' />
            <Channel h2='Podcasts por produtora' Card={SuggestionCard} RequestAPI=''/>
        </div>
    )
}

export default Podcasts