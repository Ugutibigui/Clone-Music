import CardArtist from '../../Cards/CardArtist'
import './Music.css'

function Music() {
    return (
        <section className="add-artist">
            <div className="container">
                <p>Desbloqueie seu Flow, selecionando seus artistas favoritos para obter recomendações melhores.</p>

                <div className="artists">
                    <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/f2fc4cbd7dce34871582901f7bf3759b/80x80-000000-80-0-0.jpg' />
                    <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/9e0f61326531faad987d27caf6715019/100x100-000000-80-0-0.jpg' />
                    <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/e9e4d4e8bdd8af1d440aa1e3af5be10a/150x150-000000-80-0-0.jpg' />
                    <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/2497a48e0926004ac93d56c917eba04b/100x100-000000-80-0-0.jpg' />
                    <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/df890144a57f2de468b1e4bd7fb1383a/80x80-000000-80-0-0.jpg' />
                </div>

                <button>ADICIONE ARTISTAS</button>
            </div>
        </section>

    )
}

export default Music