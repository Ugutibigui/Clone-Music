import { useState, useEffect } from 'react';

import Container from '../../../components/layout/Container/Container'
import CustomNav from '../../../components/Nav/CustomNav/CustomNav';

import styles from './Search.module.css'

const Search = ({content}) => {
    const navBar = [
        { name: 'Todos', to: '/search' },
        { name: 'Músicas', to: '/search/music' },
        { name: 'Álbuns', to: '/search/album' },
        { name: 'Artistas', to: '/search/artist' }
    ]

    const [artistInfo, setArtistInfo] = useState([])

    const searchParams = new URLSearchParams(window.location.search);
    const artistText = searchParams.get('text')

    useEffect(() => {
        fetch(`http://localhost:8000/artists?name=${artistText}`, {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setArtistInfo(data))
    })

    return (
        <Container>
            <CustomNav navigations={navBar} padding={20} />

            <div className={styles.searchContainer}>
                <content object={artistText} />
            </div>
        </Container>
    )
}

export default Search