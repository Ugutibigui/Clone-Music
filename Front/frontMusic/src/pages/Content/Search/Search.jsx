import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import Container from '../../../components/layout/Container/Container'
import CustomNav from '../../../components/Nav/CustomNav/CustomNav'

import styles from './Search.module.css'

const Search = ({ content }) => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const artistText = searchParams.get('text')

    const navBar = [
        { name: 'Todos', to: `/search?text=${artistText}` },
        { name: 'Músicas', to: `/search/music?text=${artistText}` },
        { name: 'Artistas', to: `/search/artist?text=${artistText}` }
    ]

    return (
        <Container>
            <CustomNav navigations={navBar} padding={20} />

            <div className={styles.searchContainer}>
                {React.cloneElement(content, { name: artistText })}
            </div>

        </Container>
    )
}

export default Search