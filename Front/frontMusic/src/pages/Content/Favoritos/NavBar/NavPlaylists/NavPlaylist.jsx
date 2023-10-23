import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../../../context/context'
import { getComponentByName } from '../../../Musica/Music'

import Search from '../../../../../components/Search/Search'
import CustomSelect from '../../../../../components/Nav/CustomSelect/CustomSelect'
import Channel from '../../../../../components/Layout/Channel/Channel'
import AddContent from '../../../../../components/Cards/AddContent Card/AddContent'
import CreatePlaylist from '../../../../../components/Modals/CreatePlaylist/CreatePlaylist'

import styles from './NavPlaylist.module.css'

function NavPlaylist() {

    const [createPlaylist, setCreatePlaylist] = useState(false)
    const [playlist, setPlaylist] = useState([])
    const [listMusic, setListMusic] = useState([])
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
            <CreatePlaylist open={createPlaylist} setOpen={setCreatePlaylist}/>

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
                    <Channel addContent={<AddContent text='Criar uma Playlist' onclick={() => setCreatePlaylist(true)}/>} 
                    key={channel.idChannel} h2={channel.title} h3={channel.subtitle} Card={Component} request={`playlist?user=${userState.id}`}/>
                ) : null
            })}
        </>
    )
}

export default NavPlaylist