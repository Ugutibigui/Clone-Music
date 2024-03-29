import { Modal, Box } from '@mui/material';
import { Link } from 'react-router-dom'

import Button from '../../Button/Button';

import stylesModal from '../Menu/Menu.module.css'
import styles from './Notification.module.css'

function Notification({ open, setOpen }) {

    const style = {
        position: 'absolute',
        bgcolor: 'background.paper',
        boxShadow: 24,
    }

    return (
        <Modal className={stylesModal.modalContainer}
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition>
            <Box className={stylesModal.boxContainer} style={style}>
                <section className={styles.section}>
                    <p id={styles.notification}>Notificações</p>

                    <div className={styles.addArtist}>
                        <img src="https://e-cdn-files.dzcdn.net/cache/slash/images/common/placeholders/friends.2cbd42c94c8b0a4b6d443e792c70a3ba.png" alt="Artists" />

                        <p>Não fique sozinho.</p>

                        <Link to='/recommendation'>
                            <Button text='ADICIONE ARTISTAS' type='pink' />
                        </Link>
                    </div>
                </section>
            </Box>
        </Modal>
    )
}

export default Notification