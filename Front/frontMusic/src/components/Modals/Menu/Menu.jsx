import styles from './Menu.module.css'

import ButtonProfile from '../../Buttons/ButtonProfile/ButtonProfile'

import { IoIosArrowForward } from 'react-icons/io'
import { Modal, Box } from '@mui/material';
import { useState } from 'react';

function Menu({ open, setOpen}) {

    const [classnameImg, setClassNameImg] = useState('')
    const [classnameDeezer, setClassNameDeezer] = useState('')

    const style = {
        position: 'absolute',
        bgcolor: 'background.paper',
        boxShadow: 24,
    }

    return (
        <Modal className={styles.modalContainer}
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition>
            <Box className={styles.boxContainer} style={style}>
                <section>
                    <div className={styles.menu}>
                        <div className={styles.menuButton} onMouseEnter={() => setClassNameImg('add')}
                        onMouseLeave={() => setClassNameImg('')}>
                            <div className={styles.imageProfile}>
                                <img src="https://e-cdns-images.dzcdn.net/images/user/d41d8cd98f00b204e9800998ecf8427e/40x40-000000-80-0-0.jpg" alt="Profile" />

                                <span>Visitante</span>
                            </div>

                            <span className={styles[classnameImg]}> <IoIosArrowForward /> </span>
                        </div>

                        <div className={styles.menuButton} onMouseEnter={() => setClassNameDeezer('add')}
                        onMouseLeave={() => setClassNameDeezer('')}>
                            <div className={styles.getDeezer}>
                                <span id={styles.textDeezer}>Obtenha até 6 contas com Deezer Family.</span>
                                <span>R$ 13,30 por mês durante 3 meses. A partir daí, R$ 39,90 por mês. Experimente agora </span>
                            </div>

                            <span className={styles[classnameDeezer]}> <IoIosArrowForward /> </span>
                        </div>
                    </div>

                    <div className={styles.menu}>
                        <ButtonProfile color='#fff' text='Configurações da Conta' />
                        <ButtonProfile color='#fff' text='Gerenciar minha assinatura' />
                        <ButtonProfile color='#fff' text='Gerenciar minhas exclusões' />
                        <ButtonProfile color='#fff' text='Comprar um vale presente' />
                        <ButtonProfile color='#fff' text='Ativar um código' />
                        <ButtonProfile route='/login' color='#fff' text='Login' />
                    </div>

                    <div className={styles.menu}>
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

export default Menu
