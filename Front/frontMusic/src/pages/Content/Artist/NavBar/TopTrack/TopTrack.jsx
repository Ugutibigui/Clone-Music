import { AiOutlineClockCircle } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Search from '../../../../../components/Search/Search'
import TableMusic from '../../../../../components/Layout/TableMusic/TableMusic'
import MusicInfos from '../../../../../components/Layout/MusicInfos/MusicInfos'

import styles from './TopTrack.module.css'

function TopTrack({ musicData }) {

    const [musics, setMusics] = useState([])
    const [searchText, setSearchText] = useState('')

    const { id } = useParams()

    useEffect(() => {
        setMusics(musicData)
    }, [musicData])

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:8000/musics?user=${id}&name=${searchText}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => setMusics(data))
                .catch(error => console.log(`Erro na procura de musica do artista pelo ID e nome: ${error}`))
        }, 1000);
    }, [searchText, id])

    if (musics.length === 0) {
        return (
            <h1> Músicas não encontradas! </h1>
        )
    }

    return (
        <>
            <h1> Top Músicas </h1>

            <Search size='40%' placeholder='Buscar nas faixas' onChange={text => setSearchText(text.target.value)} />¨

            <TableMusic>
                <span>MÚSICA</span>
                <span>ARTISTA</span>
                <span id='views'>VIEWS</span>
                <span> <AiOutlineClockCircle /> </span>
                <span id='pop'>POP.</span>
                <div id='cubeTable'></div>
            </TableMusic>

            <ul className={styles.listMusic}>
                {musics.map((music, index) => (
                    <li key={index}>
                        <MusicInfos infos={music} moreInfos={true} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TopTrack