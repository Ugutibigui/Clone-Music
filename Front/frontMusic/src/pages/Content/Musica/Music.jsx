import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import Channel from '../../../components/Layout/Channel/Channel'
import Button from '../../../components/Button/Button';
import QuizzeCard from '../../../components/Cards/Quizze Card/QuizzeCard'
import Container from '../../../components/Layout/Container/Container'

const LazyArtistCard = React.lazy(() => import('../../../components/Cards/Artist Card/ArtistCard'))
const LazyMusicCard = React.lazy(() => import('../../../components/Cards/Music Card/MusicCard'))
const LazyCategorieCard = React.lazy(() => import('../../../components/Cards/Categorie Card/CategorieCard'))
const LazyHighlightCard = React.lazy(() => import('../../../components/Cards/Highlight Card/HighlightCard'))
const LazyRadioCard = React.lazy(() => import('../../../components/Cards/Radio Card/RadioCard'))
const LazyFlowCard = React.lazy(() => import('../../../components/Cards/Flow Card/FlowCard'))

import styles from './Music.module.css'

function Music() {

    const [artist, setArtist] = useState([])
    const [channels, setChannels] = useState([])

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

    useEffect(() => {
        fetch("http://localhost:8000/channels?local=Music", {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => setChannels(data))
    }, [])

    const getComponentByName = (componentName) => {
        switch (componentName) {
            case 'CategorieCard':
                return LazyCategorieCard
            case 'MusicCard':
                return LazyMusicCard
            case 'ArtistCard':
                return LazyArtistCard
            case 'HighlightCard':
                return LazyHighlightCard
            case 'RadioCard':
                return LazyRadioCard
            case 'FlowCard':
                return LazyFlowCard
            default:
                return null
        }
    };

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
                    <Button text='ADICIONE ARTISTAS' type='pink' typeButton='button' />
                </Link>
            </section>

            <section className={styles.channel}>
                <h2>Quizzes musicais</h2>

                <div className={styles.containerRectangle}>
                    <QuizzeCard colorOne='rgb(60, 165, 100)' colorTwo='rgb(166, 206, 80)' title='Quizzes musicais' text='Teste seu conhecimento musical!' />
                    <QuizzeCard colorOne='rgb(55, 105, 200)' colorTwo='rgb(17, 168, 204)' text='Teste suas habilidades de adivinhar músicas e desafie seus amigos!' />
                </div>
            </section>

            {channels.map(channel => {
                const Component = getComponentByName(channel.card)

                return Component ? (
                    <Channel key={channel.idChannel} h2={channel.title} h3={channel.subtitle} Card={Component} request={channel.requestApi}/>
                ) : null
            })}
        </Container>
    )
}

export default Music