import React, { useState } from 'react'
import axios from 'axios';

import CardArtist from '../../../components/Cards/CardArtist/CardArtist'
import CardRectangle from '../../../components/Cards/CardRectangle/CardRectangle'
import CardForYou from '../../../components/Cards/CardForYou/CardForYou'
import CardFavorite from '../../../components/Cards/CardFavorite/CardFavorite'
import CardCube from '../../../components/Cards/CardCube/CardCube'
import Channel from '../../../components/Section/Channel/Channel'
import CardCategorie from '../../../components/Cards/CardCategorie/CardCategorie'
import CardHighlight from '../../../components/Cards/CardHighlight/CardHighlight'
import CardRadio from '../../../components/Cards/CardRadio/CardRadio'

import PinkButton from '../../../components/Buttons/PinkButton/PinkButton'

import styles from './Music.module.css'

function Music() {
    
    // Recebendo reposta do endpoint para puxar fotos de artistas
    //const [singers, setSingers] = useState([])

    //axios.get('https://localhost:8000/api/artist/27/top', {
    //    "method": "GET" ,
    //})
    //    .then((response) => console.log(response))
    //    .catch((error) => console.log(error))

    return (
        <div className={styles.infoContent}>
            <section className={styles.channel}>
                <div className={styles.artistAdd}>
                    <p>Desbloqueie seu Flow, selecionando seus artistas favoritos para obter recomendações melhores.</p>

                    <div className={styles.artists}>
                        <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/8c5f0b42bc8fa4c3650be56df412c1c2/264x264-000000-80-0-0.jpg' id={0}/>
                        <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/7260526934f80aab3f3c37221b9132ca/264x264-000000-80-0-0.jpg' id={1}/>
                        <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/6f797dbd305547a2b793858497ed0ecd/264x264-000000-80-0-0.jpg' id={2}/>
                        <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/3549481bbfd3415ba247b411eea2f8d0/264x264-000000-80-0-0.jpg' id={3}/>
                        <CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/3a6e09e739db1615be58b155a7331068/264x264-000000-80-0-0.jpg' id={4}/>
                    </div>

                    <PinkButton text='ADICIONE ARTISTAS'/>
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

            <Channel h2='Feito para você' Card={CardForYou} RequestAPI='' />
            <Channel h2='Seus artistas favoritos' Card={CardFavorite} RequestAPI='' />
            <Channel h2='Playlist que você vai amar' Card={CardCube} RequestAPI='' />
            <Channel h2='The Grammy Awards 2023' h3='E os vencedores são...' Card={CardCube} RequestAPI='' />
            <Channel h2='Os sons do verão' Card={CardCube} RequestAPI='' />
            <Channel h2='Categorias' Card={CardCategorie} RequestAPI='' />
            <Channel h2='Lançamentos para você' Card={CardCube} RequestAPI='' />
            <Channel h2='100% para você' Card={CardCube} RequestAPI='' />
            <Channel h2='Já que você gostou de: ' Card={CardFavorite} RequestAPI='' />
            <Channel h2='Gêneros: ' Card={CardCategorie} RequestAPI='' />
            <Channel h2='Playlists populares' Card={CardCube} RequestAPI='' />
            <Channel h2='Destaques' Card={CardHighlight} RequestAPI='' />
            <Channel h2='Sextou' Card={CardCube} RequestAPI='' />
            <Channel h2='Charts' Card={CardCube} RequestAPI='' />
            <Channel h2='Álbuns mais ouvidos' Card={CardCube} RequestAPI='' />
            <Channel h2='Só na Deezer' Card={CardCube} RequestAPI='' />
            <Channel h2='No ritmo dos anos 2000' Card={CardCube} RequestAPI='' />
            <Channel h2='Rádios para você' Card={CardRadio} RequestAPI='' />
        </div>
    )
}

export default Music