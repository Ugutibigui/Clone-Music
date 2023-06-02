import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'

import Button from '../../../components/Buttons/Button/Button'
import AddArtist from '../../../components/Cards/AddArtist Card/AddArtist'

import deezer from '../../../assets/deezerWhite.png'
import styles from './Recommendation.module.css'

function Artists() {

    const [artist, setArtist] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/artists?limit=200', {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json()) // randomizando os artistas
            .then(data => setArtist(data.sort(() => Math.random() - 0.5)))
    }, [])

    return (
        <section className={styles.artistContainer}>
            <div className={styles.topContent}>
                <img src={deezer} alt="Deezer" />

                <Link to='/'>
                    <button> <AiOutlineClose size={40} color='white' /> </button>
                </Link>
            </div>

            <div className={styles.navContainer}>
                <h1>Bem-vindo</h1>

                <p>Escolha seus artistas para recomendações mais personalizadas!</p>

                <div className={styles.search}>
                    <FiSearch size={20} />
                    <input type="text" placeholder='Buscar' />
                </div>
            </div>

            <div className={styles.gridScreen}>
                <section>
                    {artist.map((item, index) => (
                        <AddArtist key={index} image={item.photo} name={item.name} />
                    ))}
                </section>
            </div>

            <div className={styles.finish}>
                <Link to='/'>
                    <Button text='TERMINAR' type='pink' />
                </Link>
            </div>
        </section>
    )
}

export default Artists