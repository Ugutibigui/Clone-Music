import './Profile.css'

import ButtonProfile from '../../Buttons/ButtonProfile/ButtonProfile'

import { useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Modal, Box } from '@mui/material';

function Profile(props) {

    const style = {
        position: 'absolute',
        bgcolor: 'background.paper',
        boxShadow: 24,
    }

    return (
        <Modal className='modal-profile'
            open={props.open}
            onClose={() => props.setOpen(false)}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition>
            <Box className='opacity-profile' style={style}>
                <section>
                    <div className="profile">
                        <div className="button-profile" id='top-profile'>
                            <div className="image-profile">
                                <img src="https://e-cdns-images.dzcdn.net/images/user/d41d8cd98f00b204e9800998ecf8427e/40x40-000000-80-0-0.jpg" alt="Profile" />

                                <span>Visitante</span>
                            </div>

                            <span> <IoIosArrowForward /> </span>
                        </div>

                        <div className="button-profile">
                            <div className="get-deezer">
                                <span id='get-deezer'>Obtenha até 6 contas com Deezer Family.</span>
                                <span>R$ 13,30 por mês durante 3 meses. A partir daí, R$ 39,90 por mês. Experimente agora </span>
                            </div>

                            <span> <IoIosArrowForward /> </span>
                        </div>
                    </div>

                    <div className="profile">
                        <ButtonProfile route='none' color='#fff' text='Configurações da Conta' checkbox='false' />
                        <ButtonProfile route='none' color='#fff' text='Gerenciar minha assinatura' checkbox='false' />
                        <ButtonProfile route='none' color='#fff' text='Gerenciar minhas exclusões' checkbox='false' />
                        <ButtonProfile route='none' color='#fff' text='Comprar um vale presente' checkbox='false' />
                        <ButtonProfile route='none' color='#fff' text='Ativar um código' checkbox='false' />
                        <ButtonProfile route='/login' color='#fff' text='Login' checkbox='false' />
                    </div>

                    <div className="profile">
                        <ButtonProfile route='none' color='#fff' text='Modo noturno' checkbox='true' />
                        <ButtonProfile route='none' color='#a2a2ad' text='Suporte' checkbox='false' />
                        <ButtonProfile route='none' color='#a2a2ad' text='Community e feedback' checkbox='false' />
                        <ButtonProfile route='none' color='#a2a2ad' text='Planos' checkbox='false' />
                        <ButtonProfile route='none' color='#a2a2ad' text='Recursos' checkbox='false' />
                        <ButtonProfile route='none' color='#a2a2ad' text='Sobre nós' checkbox='false' />
                        <ButtonProfile route='none' color='#a2a2ad' text='jobs' checkbox='false' />
                        <ButtonProfile route='none' color='#a2a2ad' text='Legal' checkbox='false' />
                    </div>
                </section>
            </Box>
        </Modal>
    )
}

export default Profile
