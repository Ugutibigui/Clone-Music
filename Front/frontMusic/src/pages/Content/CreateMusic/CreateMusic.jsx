import { useState } from 'react';

import Container from '../../../components/Layout/Container/Container';
import Button from '../../../components/Button/Button';
import api from '../../../services/api';

import styles from './CreateMusic.module.css';

function CreateMusic() {
    const [name, setName] = useState('')
    const [date, setdate] = useState('')
    const [audio, setAudio] = useState('')

    const CreateSong = async () => {
        const body = {
            name: name,
            photo: '',
            date: date,
            audio: audio
        }

        try {
            await api.post('music/createMusic', body)
                .then(response => {
                    if (response.data.ok) {
                        alert('Música Criada com sucesso')
                        window.location.reload()
                    } else {
                        alert('Erro na Criação de Música')
                    }
                })
        } catch (error) {
            console.log('Erro na API de Criação de Música')
        }
    }

    return (
        <Container>
            <h1> Crie sua Música! </h1>

            <form className={styles.formMusic}>
                <label htmlFor="music">Nome da Música:</label>
                <input type="text" id="music" name="music" onChange={event => setName(event.target.value)} autocomplete="off"/>

                <label htmlFor="date">Lançamento:</label>
                <input type="date" id="date" name="date"onChange={event => setdate(event.target.value)} />

                <label htmlFor="audio">Audio:</label>
                <input type="file" name="audio" onChange={event => setAudio(event.target.value)} />

                criar select depois

                <Button text="CRIAR MÚSICA" type="pink" onClick={CreateSong}/>
            </form>
        </Container>
    )
}

export default CreateMusic;
