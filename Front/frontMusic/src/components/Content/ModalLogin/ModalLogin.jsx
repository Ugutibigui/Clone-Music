import './ModalLogin.css'
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function ModalLogin(props) {

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const Login = async () => {
        fetch('http://localhost:8000/user/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then((response) => response.json())
        .then(async(data) => {
            if (data.ok === true) {
                props.setOpen(false)
            }
        })
    }
    
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