import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

import Container from '../../../components/layout/Container/Container'
import CustomNav from '../../../components/Nav/CustomNav/CustomNav'

import styles from './Search.module.css'

const Search = ({ content }) => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const artistText = searchParams.get('text')

    const [artist, setArtist] = useState(null)

    const navBar = [
        { name: 'Todos', to: `/search?text=${artistText}` },
        { name: 'Músicas', to: `/search/music?text=${artistText}` },
        { name: 'Artistas', to: `/search/artist?text=${artistText}` }
    ]

    useEffect(() => {
		fetch(`http://localhost:8000/artists?name=${artistText}`, {
			'method': 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(data => setArtist(data))
	}, [artistText])

    if (!artist) {
		return <Container>
			<h1> Nenhum resultado para "{artistText}" </h1>
			<h2> Por que não explorar outras opções? </h2>
		</Container>
	}

    return (
        <Container>
            <CustomNav navigations={navBar} padding={20} />

            <div className={styles.searchContainer}>
                {React.cloneElement(content, { artistData: artist })}
            </div>
        </Container>
    )
}

export default Search