import { Modal, Box } from '@mui/material';
import { AiOutlineClose, AiOutlineCamera } from 'react-icons/ai'
import { BsFillPeopleFill } from 'react-icons/bs'
import { GiPadlock } from 'react-icons/gi'
import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../../../context/context'

import ChoiceImage from '../ChoiceImage/ChoiceImage';
import Button from '../../Button/Button'

import styles from './CreatePlaylist.module.css'
import api from '../../../services/api'

const CreatePlaylist = ({ open, setOpen }) => {

    const style = {
        position: 'absolute',
        bgcolor: 'background.paper',
        boxShadow: 24,
    }

    const [userState, dispatch] = useContext(Context)

    const [choiceImage, setChoiceImage] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('https://e-cdns-images.dzcdn.net/images/playlist/d41d8cd98f00b204e9800998ecf8427e/200x200-000000-80-0-0.jpg')

    const CreatePlaylist = async () => {
        const body = {
            name,
            description,
            image,
            userId: userState.id
        }

        try {
            await api.post('playlist/createPlaylist', body)
                .then(response => {
                    if (response.data.ok) {
                        alert('Playlist Criada com sucesso')
                        window.location.reload()
                    } else {
                        alert('Erro na criação de Playlist')
                    }
                })
        } catch (error) {
            console.log(`Erro na Criação de Playlist\nErro:${error}`)
        }
    }

    return (
        <>
            <ChoiceImage open={choiceImage} setOpen={setChoiceImage} setImagePlay={setImage}/>

            <Modal className={styles.modalContainer} open={open} onClose={() => setOpen(false)}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                closeAfterTransition>
                <Box className={styles.boxContainer} style={style}>
                    <form className={styles.createPlaylist} onSubmit={CreatePlaylist}>
                        <div id={styles.closeBtn}>
                            <button onClick={() => setOpen(false)}>
                                <AiOutlineClose size={20} color='gray' />
                            </button>
                        </div>

                        <h1>Criar uma playlist</h1>

                        <div className={styles.infos}>
                            <div className={styles.sendImage}>
                                <img src={image} alt="Music" />

                                <label onClick={() => setChoiceImage(true)}>
                                    <AiOutlineCamera size={25} color='#000' />
                                </label>
                            </div>

                            <div className={styles.inputsBox}>
                                <div>
                                    <label htmlFor="namePlay"> Nome </label>
                                    <input type="text" name="namePlay" id="namePlay" placeholder='Nome da playlist'
                                        onChange={event => setName(event.target.value)} autoComplete='off' />
                                </div>

                                <div className={styles.typePlaylist}>
                                    <button>
                                        <BsFillPeopleFill color='gray' size={20} />
                                    </button>

                                    <div className={styles.text}>
                                        <h2>Colaborativa</h2>

                                        <h3>Convidar outros para adicionar faixa</h3>
                                    </div>
                                </div>

                                <div className={styles.typePlaylist}>
                                    <button>
                                        <GiPadlock color='gray' size={20} />
                                    </button>

                                    <div className={styles.text}>
                                        <h2>Privada</h2>

                                        <h3>Só você pode ver esta playlist</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <label htmlFor="description"> Descrição </label>
                        <textarea type="text" name="description" id="description" placeholder='Descrição da playlist' maxLength={250} rows={4}
                            onChange={event => setDescription(event.target.value)}></textarea>

                        <div className={styles.sendBtn}>
                            <Button text='CRIAR' type='pink' typeButton='submit' width='150px' />
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default CreatePlaylist