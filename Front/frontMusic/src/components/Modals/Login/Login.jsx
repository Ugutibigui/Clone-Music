import './Login.css'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import api from '../../../services/api';

function ModalLogin(props) {

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const Login = async () => {
        const body = {
            email: email,
            password: password
        }

        try{
            await api.post('user/login', body)
            .then((response) => {
                response.data.ok === true ? props.setOpen(false) :  alert("Email ou senha incorretos")
            })
        }catch{
            console.log("Erro")
        }
    }
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
    }
    
    return (
        <Modal open={props.open}
            onClose={() => props.setOpen(false)}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition>
            <Box className="opacity-login" style={style}>
                <section>
                    <div className="text-click">
                        <span>Fazer login</span>
                        <p>Ainda não possui uma conta Deezer? <strong>CADASTRE-SE</strong></p>
                    </div>

                    <div className='form'>
                        <label htmlFor="email">Email:</label>
                        <input value={email} onChange={(text) => setEmail(text.target.value)} type="email" id='email' />

                        <label htmlFor="password">Senha:</label>
                        <input value={password} onChange={(text) => setpassword(text.target.value)} type="password" id='password' />

                        <button onClick={() => Login()}>FAZER LOGIN</button>
                    </div>

                    <div className="text-click">
                        <p id='forget'>ESQUECEU SUA SENHA?</p>
                    </div>
                </section>
            </Box>
        </Modal>
    )
}
export default ModalLogin