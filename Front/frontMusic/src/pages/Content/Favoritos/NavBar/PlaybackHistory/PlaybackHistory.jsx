import { AiOutlineClockCircle } from 'react-icons/ai'
import { BiSquareRounded } from 'react-icons/bi'

import Button from '../../../../../components/Button/Button'

import styles from './PlaybackHistory.module.css'

function PlaybackHistory() {
    return (
        <>
            <h1> Histórico de reprodução </h1>

            <div className={styles.history}>

                <span id={styles.music}> MÚSICA </span>

                <div className={styles.infos}>
                    <span> ARTISTA </span>
                    <span> ÁLBUM </span>
                    <span> DATA </span>
                </div>

                <div className={styles.icons}>
                    <span> <AiOutlineClockCircle /> </span>

                    <span> <BiSquareRounded /> </span>
                </div>
            </div>

            <div className={styles.explore}>
                <h2> Esta playlist parece vazia... Encontre algumas faixas para adicionar à sua playlist </h2>

                <Button text='EXPLORAR MÚSICAS' type='black' />
            </div>
        </>
    )
}

export default PlaybackHistory