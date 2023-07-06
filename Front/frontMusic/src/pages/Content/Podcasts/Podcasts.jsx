import Channel from '../../../components/Layout/Channel/Channel'
import MusicCard from '../../../components/Cards/Music Card/MusicCard'
import HighlightCard from '../../../components/Cards/Highlight Card/HighlightCard'
import Container from '../../../components/Layout/Container/Container'

import styles from './Podcasts.module.css'

function Podcasts() {
    return(
        <Container>
            <Channel h2='Podcasts populares' Card={MusicCard} RequestAPI='' />
            <Channel h2='Todas as categorias' Card={MusicCard} RequestAPI=''/>
            <Channel Card={HighlightCard} RequestAPI=''/>
            <Channel h2='Nossos editores estão amando' Card={MusicCard} RequestAPI='' />
            <Channel h2='Destaques' Card={HighlightCard} RequestAPI=''/>
            <Channel h2='Escolhas novas da semana' Card={MusicCard} RequestAPI='' />
            <Channel h2='Podcasts por duração' Card={MusicCard} RequestAPI=''/>
            <Channel h2='Deezer Originals' Card={MusicCard} RequestAPI='' />
            <Channel h2='Podcasts por produtora' Card={MusicCard} RequestAPI=''/>
        </Container>
    )
}

export default Podcasts