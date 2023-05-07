import { AiOutlineClockCircle } from 'react-icons/ai'
import { BiSquareRounded } from 'react-icons/bi'

import Search from '../../../../../components/Search/Search'
import Button from '../../../../../components/Buttons/Button/Button'

import styles_dearest from '../Dearest/Dearest.module.css'
import styles_playback from '../PlaybackHistory/PlaybackHistory.module.css'

function NavMP3() {
    return (
        <>
            <h1> 0 mp3 </h1>

            <section className={styles_dearest.shareSection}>
                <Button text='EXPLORAR MÚSICAS' type='black' />

                <Search size='600px' placeholder='Buscar nas faixas' />
            </section>

            <div className={styles_playback.history}>

                <span id={styles_playback.music}> MÚSICA </span>

                <div className={styles_playback.infos}>
                    <span> ARTISTA </span>
                    <span> ÁLBUM </span>
                </div>

                <div className={styles_playback.icons}>
                    <span> <AiOutlineClockCircle /> </span>

                    <span> <BiSquareRounded /> </span>
                </div>
            </div>

            <div className={styles_playback.explore}>
                <h2> Esta playlist parece vazia... Encontre algumas faixas para adicionar à sua playlist </h2>

                <Button text='EXPLORAR MÚSICAS' type='black' />
            </div>
        </>
    )
}

export default NavMP3