import styles from './Profile.module.css'

import ButtonProfile from '../../Buttons/ButtonProfile/ButtonProfile'

import { IoIosArrowForward } from 'react-icons/io'
import { Modal, Box } from '@mui/material';

function Profile({ open, setOpen}) {

    const style = {
        position: 'absolute',
        bgcolor: 'background.paper',
        boxShadow: 24,
    }

    return (
        <Modal className={styles.modalProfile}
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition>
            <Box className={styles.opacityProfile} style={style}>
                <section>
                    <div className={styles.profile}>
                        <div className={styles.buttonProfile}>
                            <div className={styles.imageProfile}>
                                <img src="https://e-cdns-images.dzcdn.net/images/user/d41d8cd98f00b204e9800998ecf8427e/40x40-000000-80-0-0.jpg" alt="Profile" />

                                <span>Visitante</span>
                            </div>

                            <span> <IoIosArrowForward /> </span>
                        </div>

                        <div className={styles.buttonProfile}>
                            <div className={styles.getDeezer}>
                                <span id={styles.getDeezer}>Obtenha até 6 contas com Deezer Family.</span>
                                <span>R$ 13,30 por mês durante 3 meses. A partir daí, R$ 39,90 por mês. Experimente agora </span>
                            </div>

                            <span> <IoIosArrowForward /> </span>
                        </div>
                    </div>

                    <div className={styles.profile}>
                        <ButtonProfile color='#fff' text='Configurações da Conta' />
                        <ButtonProfile color='#fff' text='Gerenciar minha assinatura' />
                        <ButtonProfile color='#fff' text='Gerenciar minhas exclusões' />
                        <ButtonProfile color='#fff' text='Comprar um vale presente' />
                        <ButtonProfile color='#fff' text='Ativar um código' />
                        <ButtonProfile route='/login' color='#fff' text='Login' />
                    </div>

                    <div className={styles.profile}>
                        <ButtonProfile color='#fff' text='Modo noturno' checkbox='true' />
                        <ButtonProfile color='#a2a2ad' text='Suporte' />
                        <ButtonProfile color='#a2a2ad' text='Community e feedback' />
                        <ButtonProfile color='#a2a2ad' text='Planos' />
                        <ButtonProfile color='#a2a2ad' text='Recursos' />
                        <ButtonProfile color='#a2a2ad' text='Sobre nós' />
                        <ButtonProfile color='#a2a2ad' text='jobs' />
                        <ButtonProfile color='#a2a2ad' text='Legal' />
                    </div>
                </section>
            </Box>
        </Modal>
    )
}

export default Profile
