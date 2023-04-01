import { AiOutlineClose } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'

import Button from '../../../components/Buttons/Button/Button'
import AddArtist from '../../../components/Cards/AddArtist Card/AddArtist'

import deezer from '../../../assets/deezerWhite.png'
import styles from './Recommendation.module.css'

function Artists() {
    return (
        <div className={styles.artistContainer}>
            <div className={styles.topContent}>
                <img src={deezer} alt="Deezer" />

                <button> <AiOutlineClose size={40} color='white' /> </button>
            </div>

            <div className={styles.navContainer}>
                <h1>Bem-vindo</h1>

                <p>Escolha seus artistas para recomendações mais personalizadas!</p>

                <div className={styles.search}>
                    <FiSearch size={20} />
                    <input type="text" placeholder='Buscar' />
                </div>
            </div>

            <section>
                <AddArtist />
                <AddArtist />
                <AddArtist />
                <AddArtist />
                <AddArtist />
                <AddArtist />
                <AddArtist />
                <AddArtist />
                <AddArtist />
                <AddArtist />
                <AddArtist />
                <AddArtist />
                <AddArtist />
            </section>

            <div className={styles.finish}>
                <Button text='TERMINAR' type='pink' />
            </div>
        </div>
    )
}

export default Artists