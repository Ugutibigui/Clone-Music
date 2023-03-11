import styles from './Podcasts.module.css'

import Channel from '../../../components/Section/Channel/Channel'
import CardCube from '../../../components/Cards/CardCube/CardCube'
import CardCategorie from '../../../components/Cards/CardCategorie/CardCategorie'
import CardHighlight from '../../../components/Cards/CardHighlight/CardHighlight'

function Podcasts() {
    return(
        <div className={styles.infoContent}>
            <Channel h2='Podcasts populares' Card={CardCube} RequestAPI='' />
            <Channel h2='Todas as categorias' Card={CardCategorie} RequestAPI=''/>
            <Channel Card={CardHighlight} RequestAPI=''/>
            <Channel h2='Nossos editores estão amando' Card={CardCube} RequestAPI='' />
            <Channel h2='Destaques' Card={CardHighlight} RequestAPI=''/>
            <Channel h2='Escolhas novas da semana' Card={CardCube} RequestAPI='' />
            <Channel h2='Podcasts por duração' Card={CardCategorie} RequestAPI=''/>
            <Channel h2='Deezer Originals' Card={CardCube} RequestAPI='' />
            <Channel h2='Podcasts por produtora' Card={CardCategorie} RequestAPI=''/>
        </div>
    )
}

export default Podcasts