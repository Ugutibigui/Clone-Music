import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Channel from '../../../components/Layout/Channel/Channel'
import Button from '../../../components/Button/Button';
import QuizzeCard from '../../../components/Cards/Quizze Card/QuizzeCard'
import ForYouCard from '../../../components/Cards/ForYou Card/ForYouCard'
import ArtistCard from '../../../components/Cards/Artist Card/ArtistCard'
import SuggestionCard from '../../../components/Cards/Suggestion Card/SuggestionCard'
import CategorieCard from '../../../components/Cards/Categorie Card/CategorieCard'
import HighlightCard from '../../../components/Cards/Highlight Card/HighlightCard'
import RadioCard from '../../../components/Cards/Radio Card/RadioCard'
import FlowCard from '../../../components/Cards/Flow Card/FlowCard'
import Container from '../../../components/Layout/Container/Container'

import styles from './Music.module.css'

function Music() {

    const [artist, setArtist] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/artists?limit=100', {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json()) // Randomizando e mostrando somente 5 artistas
            .then(data => setArtist(data.sort(() => Math.random() - 0.5).slice(0, 5)))
    }, [])

    return (
        <Container>
            <section className={styles.channel}>
                <p>Desbloqueie seu Flow, selecionando seus artistas favoritos para obter recomendações melhores.</p>

                <div className={styles.artists}>
                    {artist.map((item, index) => (
                        <img src={item.photo} alt="Artist" id={styles[`img${index}`]} key={index} />
                    ))}
                </div>

                <Link to='/recommendation'>
                    <Button text='ADICIONE ARTISTAS' type='pink' typeButton='button'/>
                </Link>
            </section>

            <section className={styles.channel}>
                <h2>Quizzes musicais</h2>

                <div className={styles.containerRectangle}>
                    <QuizzeCard colorOne='rgb(60, 165, 100)' colorTwo='rgb(166, 206, 80)' title='Quizzes musicais' text='Teste seu conhecimento musical!' />
                    <QuizzeCard colorOne='rgb(55, 105, 200)' colorTwo='rgb(17, 168, 204)' text='Teste suas habilidades de adivinhar músicas e desafie seus amigos!' />
                </div>
            </section>

            <Channel h2='Flow: toque o que você sente' h3='Um mix infinito e personalizado das músicas que você ama e também de novas descobertas.' Card={FlowCard} requestAPI='' />
            <Channel h2='Feito para você' Card={ForYouCard} RequestAPI='' />
            <Channel h2='Seus artistas favoritos' Card={ArtistCard} RequestAPI='' />
            <Channel h2='Playlist que você vai amar' Card={SuggestionCard} RequestAPI='' />
            <Channel h2='The Grammy Awards 2023' h3='E os vencedores são...' Card={SuggestionCard} RequestAPI='' />
            <Channel h2='Os sons do verão' Card={SuggestionCard} RequestAPI='' />
            <Channel h2='Categorias' Card={CategorieCard} RequestAPI='' />
            <Channel h2='Lançamentos para você' Card={SuggestionCard} RequestAPI='' />
            <Channel h2='100% para você' Card={SuggestionCard} RequestAPI='' />
            <Channel h2='Já que você gostou de: ' Card={ArtistCard} RequestAPI='' />
            <Channel h2='Gêneros: ' Card={CategorieCard} RequestAPI='' />
            <Channel h2='Playlists populares' Card={SuggestionCard} RequestAPI='' />
            <Channel h2='Destaques' Card={HighlightCard} RequestAPI='' />
            <Channel h2='Sextou' Card={SuggestionCard} RequestAPI='' />
            <Channel h2='Charts' Card={SuggestionCard} RequestAPI='' />
            <Channel h2='Álbuns mais ouvidos' Card={SuggestionCard} RequestAPI='' />
            <Channel h2='Só na Deezer' Card={SuggestionCard} RequestAPI='' />
            <Channel h2='No ritmo dos anos 2000' Card={SuggestionCard} RequestAPI='' />
            <Channel h2='Rádios para você' Card={RadioCard} RequestAPI='' />
        </Container>
    )
}

export default Music