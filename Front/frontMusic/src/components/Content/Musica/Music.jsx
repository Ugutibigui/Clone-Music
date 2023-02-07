import CardArtist from '../../Cards/CardArtist/CardArtist'
import CardRectangle from '../../Cards/CardRectangle/CardRectangle'
import CardForYou from '../../Cards/CardForYou/CardForYou'
import CardFavorite from '../../Cards/CardFavorite/CardFavorite'
import CardCube from '../../Cards/CardCube/CardCube'
import Channel from '../../Section/Channel/Channel'
import './Music.css'

function Music() {
    return (
        <div className="info-content">
            <section className="channel">
                <div className="artist-add">
                    <p>Desbloqueie seu Flow, selecionando seus artistas favoritos para obter recomendações melhores.</p>

                    <div className="artists">
                        <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/f2fc4cbd7dce34871582901f7bf3759b/80x80-000000-80-0-0.jpg' id='img-left' />
                        <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/9e0f61326531faad987d27caf6715019/100x100-000000-80-0-0.jpg' id='img-almost-left' />
                        <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/e9e4d4e8bdd8af1d440aa1e3af5be10a/150x150-000000-80-0-0.jpg' id='img-center' />
                        <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/2497a48e0926004ac93d56c917eba04b/100x100-000000-80-0-0.jpg' id='img-almost-right' />
                        <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/df890144a57f2de468b1e4bd7fb1383a/80x80-000000-80-0-0.jpg' id='img-right' />
                    </div>

                    <button>ADICIONE ARTISTAS</button>
                </div>
            </section>

            <section className="channel">
                <div className="quizzes">
                    <h2>Quizzes musicais</h2>

                    <div className="container-rectangle">
                        <CardRectangle colorOne='rgb(60, 165, 100)' colorTwo='rgb(166, 206, 80)' title='Quizzes musicais' text='Teste seu conhecimento musical!' />
                        <CardRectangle colorOne='rgb(55, 105, 200)' colorTwo='rgb(17, 168, 204)' text='Teste suas habilidades de adivinhar músicas e desafie seus amigos!' />
                    </div>
                </div>
            </section>

            <Channel h2='Feito para você'  h3='' card={CardForYou} RequestAPI=''/>
            <Channel h2='Seus artistas favoritos' h3='' card={CardFavorite} RequestAPI=''/>
            <Channel h2='Playlist que você vai amar' h3='' card={CardCube} RequestAPI='' />
            <Channel h2='The Grammy Awards 2023' h3='E os vencedores são...' card={CardCube} RequestAPI='' />
            <Channel h2='Os sons do verão' h3='' card={CardCube} RequestAPI='' />
            
        </div>
    )
}

export default Music