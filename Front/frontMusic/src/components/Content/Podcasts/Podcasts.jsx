import styles from './Podcasts.module.css'

import Channel from '../../Section/Channel/Channel'
import CardCube from '../../Cards/CardCube/CardCube'
import CardCategorie from '../../Cards/CardCategorie/CardCategorie'
import CardHighlight from '../../Cards/CardHighlight/CardHighlight'

function Podcasts() {
    return(
        <div className={styles.infoContent}>
            <Channel h2='Podcasts populares' card={CardCube} RequestAPI='' />
            <Channel h2='Todas as categorias' card={CardCategorie} RequestAPI=''/>
            <Channel card={CardHighlight} RequestAPI=''/>
            <Channel h2='Nossos editores estão amando' card={CardCube} RequestAPI='' />
            <Channel h2='Destaques' card={CardHighlight} RequestAPI=''/>
            <Channel h2='Escolhas novas da semana' card={CardCube} RequestAPI='' />
            <Channel h2='Podcasts por duração' card={CardCategorie} RequestAPI=''/>
            <Channel h2='Deezer Originals' card={CardCube} RequestAPI='' />
            <Channel h2='Podcasts por produtora' card={CardCategorie} RequestAPI=''/>
        </div>
    )
}

export default Podcasts