import { AiOutlineClockCircle } from 'react-icons/ai'
import { useState, useEffect } from 'react'

import TableMusic from '../../../../../components/Layout/TableMusic/TableMusic'
import MusicInfos from '../../../../../components/Layout/MusicInfos/MusicInfos'

import styles from './MusicSearch.module.css'

const MusicSearch = ({ name }) => {

    const [musics, setMusics] = useState([])
    const [artist, seArtist] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/artists?name=${name}`, {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => seArtist(data[0]))
    }, [name])

    useEffect(() => {
        fetch(`http://localhost:8000/musics?user=${artist.userId}`, {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setMusics(data))
    }, [artist])

    return (
        <section className={styles.allMusics}>
            <h1> {musics.length} Faixas </h1>

            <div>
                <TableMusic>
                    <span>MÚSICA</span>
                    <span>ARTISTA</span>
                    <span>ÁLBUM</span>
                    <span> <AiOutlineClockCircle /> </span>
                    <span>POP.</span>
                    <div id='cubeTable'></div>
                </TableMusic>

                <div className={styles.musicInfos}>
                    {musics.map((music, index) => (
                        <MusicInfos key={index} infos={music} moreInfos={true} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MusicSearch