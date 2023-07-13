import { useState, useEffect } from 'react';

import Container from '../../../components/layout/Container/Container'
import CustomNav from '../../../components/Nav/CustomNav/CustomNav';

import styles from './Search.module.css'

const Search = ({ content }) => {
    const navBar = [
        {name: 'Todos', to: '/search'},
        {name: 'Músicas', to: '/search/music'},
        {name: 'Álbuns', to: '/search/album'},
        {name: 'Artistas', to: '/search/artist'}
    ]

    const searchParams = new URLSearchParams(window.location.search);
    const [artistText, setArtistText] = useState(searchParams.get('text'))

    return (
        <Container>
            <CustomNav navigations={navBar} padding={20}/>

            <div className={styles.searchContainer}>
                {content}
            </div>
        </Container>
    )
}

export default Search