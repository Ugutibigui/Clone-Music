import CardArtist from '../../Cards/CardArtist/CardArtist'
import CardRectangle from '../../Cards/CardRectangle/CardRectangle'
import CardForYou from '../../Cards/CardForYou/CardForYou'
import CardFavorite from '../../Cards/CardFavorite/CardFavorite'
import CardCube from '../../Cards/CardCube/CardCube'
import Channel from '../../Section/Channel/Channel'
import CardCategorie from '../../Cards/CardCategorie/CardCategorie'
import CardHighlight from '../../Cards/CardHighlight/CardHighlight'
import CardRadio from '../../Cards/CardRadio/CardRadio'

import styles from './Music.module.css'

function Music() {
    return (
        <div className={styles.infoContent}>
            <section className={styles.channel}>
                <div className={styles.artistAdd}>
                    <p>Desbloqueie seu Flow, selecionando seus artistas favoritos para obter recomendações melhores.</p>

                    <div className={styles.artists}>
                        <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/f2fc4cbd7dce34871582901f7bf3759b/80x80-000000-80-0-0.jpg' id={styles.imgLeft} />
                        <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/9e0f61326531faad987d27caf6715019/100x100-000000-80-0-0.jpg' id={styles.imgAlmostLeft} />
                        <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/e9e4d4e8bdd8af1d440aa1e3af5be10a/150x150-000000-80-0-0.jpg' id={styles.imgCenter} />
                        <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/2497a48e0926004ac93d56c917eba04b/100x100-000000-80-0-0.jpg' id={styles.imgAlmostRight}/>
                        <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/df890144a57f2de468b1e4bd7fb1383a/80x80-000000-80-0-0.jpg' id={styles.imgRight} />
                    </div>

                    <button>ADICIONE ARTISTAS</button>
                </div>
            </section>

            <section className={styles.channel}>
                <div className={styles.quizzes}>
                    <h2>Quizzes musicais</h2>

                    <div className={styles.containerRectangle}>
                        <CardRectangle colorOne='rgb(60, 165, 100)' colorTwo='rgb(166, 206, 80)' title='Quizzes musicais' text='Teste seu conhecimento musical!' />
                        <CardRectangle colorOne='rgb(55, 105, 200)' colorTwo='rgb(17, 168, 204)' text='Teste suas habilidades de adivinhar músicas e desafie seus amigos!' />
                    </div>
                </div>
            </section>

            <Channel h2='Feito para você' card={CardForYou} RequestAPI=''/>
            <Channel h2='Seus artistas favoritos' card={CardFavorite} RequestAPI=''/>
            <Channel h2='Playlist que você vai amar' card={CardCube} RequestAPI='' />
            <Channel h2='The Grammy Awards 2023' h3='E os vencedores são...' card={CardCube} RequestAPI='' />
            <Channel h2='Os sons do verão' card={CardCube} RequestAPI='' />
            <Channel h2='Categorias' card={CardCategorie} RequestAPI='' />
            <Channel h2='Lançamentos para você' card={CardCube} RequestAPI='' />
            <Channel h2='100% para você' card={CardCube} RequestAPI='' />
            <Channel h2='Já que você gostou de: ' card={CardFavorite} RequestAPI='' />
            <Channel h2='Gêneros: ' card={CardCategorie} RequestAPI='' />
            <Channel h2='Playlists populares' card={CardCube} RequestAPI='' />
            <Channel h2='Destaques' card={CardHighlight} RequestAPI='' />
            <Channel h2='Sextou' card={CardCube} RequestAPI='' />
            <Channel h2='Charts' card={CardCube} RequestAPI='' />
            <Channel h2='Álbuns mais ouvidos' card={CardCube} RequestAPI='' />
            <Channel h2='Só na Deezer' card={CardCube} RequestAPI='' />
            <Channel h2='No ritmo dos anos 2000' card={CardCube} RequestAPI='' />
            <Channel h2='Rádios para você' card={CardRadio} RequestAPI='' />
        </div>
    )
}

export default Music