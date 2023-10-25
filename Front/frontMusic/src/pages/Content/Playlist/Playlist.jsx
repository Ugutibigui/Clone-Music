import { BsPencil } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../../components/Layout/Container/Container';
import TableMusic from '../../../components/Layout/TableMusic/TableMusic';
import Search from '../../../components/Search/Search';

import styles from './Playlist.module.css';

const Playlist = () => {
    const [searchText, setSearchText] = useState('');
    const [playlist, setPlaylist] = useState([]);
    const [listMusic, setListMusic] = useState([]);
    const [user, setUser] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8000/playlist?playid=${id}`)
            .then(response => response.json())
            .then(data => setPlaylist(data[0]))
            .catch(error => console.log(`Erro na procura de playlist pelo ID: ${error}`));
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:8000/user?id=${playlist.userId}`)
            .then(response => response.json())
            .then(data => setUser(data[0]))
            .catch(error => console.log(`Erro na procura de usuario pelo ID: ${error}`));
    }, [playlist]);

    useEffect(() => {
        fetch(`http://localhost:8000/list?playid=${id}`)
            .then(response => response.json())
            .then(data => {
                const musicPromises = []

                data.map(music => {
                    return fetch(`http://localhost:8000/musics?id=${music.idMusic}`)
                    .then(response => response.json())
                    .then(data => musicPromises.push(data[0]))
                })

                setListMusic(musicPromises)
            })
            .catch((error) =>
                console.log(`Erro ao filtrar músicas pelo ID da playlist: ${error}`)
            );
    }, [id]);

    return (
        <Container>
            <section className={styles.playlist}>
                <img src={playlist.photo} id={styles.imagePlay} alt={playlist.name} />

                <div className={styles.infoPlay}>
                    <h1> {playlist.name} </h1>

                    <div className={styles.profile}>
                        <img src={user.photo} alt={user.username} />

                        <h3> {user.name} </h3>
                    </div>

                    <p> {playlist.description} </p>

                    <button>
                        <BsPencil size={15} color="#fff" />
                    </button>
                </div>
            </section>

            <Search size="40%" placeholder="Buscar nas faixas" onChange={(text) => setSearchText(text.target.value)} />

            <TableMusic>
                <span>MÚSICA</span>
                <span>ARTISTA</span>
                <span id="views">VIEWS</span>
                <span> <AiOutlineClockCircle /> </span>
                <span id="pop">POP.</span>
                <div id="cubeTable" />
            </TableMusic>

            <ul className={styles.listMusics}>
                {listMusic.map((music, index) => (
                    <li key={index}>
                        {music.name} - {music.artist}
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default Playlist;
