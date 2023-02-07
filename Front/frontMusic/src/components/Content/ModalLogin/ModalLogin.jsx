import './ModalLogin.css'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function ModalLogin(props) {
    console.log(props.open)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
      };
    return (
        <Modal open={props.open} 
        onClose={() => props.setOpen(false)}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        closeAfterTransition>
            <Box className="opacity-body" style={style}>
                <section>
                    <div className="text-click">
                        <span>Fazer login</span>
                        <p>Ainda não possui uma conta Deezer? <strong>CADASTRE-SE</strong></p>
                    </div>

                    <form>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id='email' />

                        <label htmlFor="password">Senha:</label>
                        <input type="password" id='password' />

                        <button>FAZER LOGIN</button>
                    </form>

                    <div className="text-click">
                        <p id='forget'>ESQUECEU SUA SENHA?</p>
                    </div>
                </section>
            </Box>
        </Modal>
    )
}
export default ModalLogin