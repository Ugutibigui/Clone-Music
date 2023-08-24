import { Modal, Box } from '@mui/material';
import { AiOutlineClose } from 'react-icons/ai'

import Button from '../../Button/Button';

import styles from './CreatePlaylist.module.css'

const CreatePlaylist = ({ open, setOpen }) => {

    const style = {
        position: 'absolute',
        bgcolor: 'background.paper',
        boxShadow: 24,
    }

    return (
        <Modal className={styles.modalContainer} open={open} onClose={() => setOpen(false)}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition>
            <Box className={styles.boxContainer} style={style}>
                <section className={styles.createPlaylist}>
                    <div id={styles.closeBtn}>
                        <button>
                            <AiOutlineClose size={20} color='gray' />
                        </button>
                    </div>

                    <h1>Criar uma playlist</h1>

                    <div className={styles.infos}>
                        <img src="https://www.netvasco.com.br/news/noticias16/arquivos/20181116-220706-2-.jpg" alt="" />

                        <div className={styles.inputBox}>
                            <label htmlFor="namePlay"> Nome </label>
                            <input type="text" name="namePlay" id="namePlay" placeholder='Nome da playlist' />
                        </div>
                    </div>

                    <label htmlFor="description"> Descrição </label>
                    <input type="text" name="description" id="description" placeholder='Descrição da playlist' />

                    <Button text='CRIAR' type='pink' typeButton='submit' />
                </section>
            </Box>
        </Modal>
    )
}

export default CreatePlaylist