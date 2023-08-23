import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../../../context/context'
import { getComponentByName } from '../../../Musica/Music'

import Search from '../../../../../components/Search/Search'
import CustomSelect from '../../../../../components/Nav/CustomSelect/CustomSelect'
import Channel from '../../../../../components/Layout/Channel/Channel'
import PlaylistCard from '../../../../../components/Cards/Playlist Card/PlaylistCard'

import styles from './NavPlaylist.module.css'

function NavPlaylist() {

    const [playlist, setPlaylist] = useState([])
    const [channel, setChannel] = useState([])
    const [userState, dispatch] = useContext(Context)

    useEffect(() => {
        fetch("http://localhost:8000/channels?local=Favorite", {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => setChannel(data))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8000/playlist?user=${userState.id}`, {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json()) 
            .then(data => setPlaylist(data))
    }, [userState.id])

    return (
        <>
            <div className={styles.topContent}>
                <h1>{playlist.length} playlist</h1>

                <div className={styles.searchOption}>

                    <Search size='400px' placeholder='Buscar' />

                    <CustomSelect array={['Todas', 'Pessoais', 'Adicionadas', 'Colaborativas']} />
                    <CustomSelect array={['Adicionadas recentemente', 'Atualizadas recentemente', 'A-Z']} />
                </div>
            </div>

            {channel.map(channel => {
                const Component = getComponentByName(channel.card)

                return Component ? (
                    <Channel key={channel.idChannel} h2={channel.title} h3={channel.subtitle} Card={Component} request={`playlist?user=${userState.id}`}/>
                ) : null
            })}
        </>
    )
}

export default NavPlaylist