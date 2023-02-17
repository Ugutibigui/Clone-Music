import './Login.css'

import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { BsFacebook, BsApple } from 'react-icons/bs'

import List from '../../List/List';
import deezer from '../../../assets/deezerWhite.png'
import api from '../../../services/api';

function Login(props) {

    // Arrays da lista de informações

    const Deezer = ['Planos', 'Dispositivos', 'Baixe o aplicativo para desktop', 'Vale presente', 'Ajuda', 'Community e feedback', 'Blog']
    const Resources = ['Flow', 'Identificar músicas', 'Transferir sua biblioteca', 'Letras', 'Escute offiline']
    const Explore = ['Mais ouvidas', 'Lançamento mais popular', 'Lançamentos', 'Rádios', 'Podcasts', 'Músicas para todos os momentos', 'Zen by deezer'] 
    const WhoWeAre = ['Investidores, Brand Partnerships', 'Músicos e podcasters', 'Desenvolvedores', 'Imprensa', 'Carreiras']
    const Cool = ['Termos e condições de uso', 'Política de privacidade', 'Cookies', 'open Source Software(EN)']

    // Funcionamento do Login

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const Login = async () => {
        const body = {
            email: email,
            password: password
        }

        try {
            await api.post('user/login', body)
                .then((response) => {
                    response.data.ok === true ? props.setOpen(false) : alert("Email ou senha incorretos")
                })
        } catch {
            console.log("Erro")
        }
    }

    return (
        <div className="body-login">
            <div className="top-login">
                <section>

                    <img src={deezer} alt="Logo Deezer" />

                    <div className="text-click">
                        <span>Fazer login</span>
                        <p>Ainda não possui uma conta Deezer? <strong>CADASTRE-SE</strong></p>
                    </div>

                    <div className="social-media">
                        <button>
                            <BsFacebook />
                            <span>FACEBOOK</span>
                        </button>

                        <button>
                            <FcGoogle />
                            <span>GOOGLE</span>
                        </button>

                        <button>
                            <BsApple />
                            <span>APPLE</span>
                        </button>
                    </div>

                    <div className='form'>
                        <label htmlFor="email">Email:</label>
                        <input value={email} onChange={(text) => setEmail(text.target.value)} type="email" id='email' />

                        <label htmlFor="password">Senha:</label>
                        <input value={password} onChan

                            ge={(text) => setpassword(text.target.value)} type="password" id='password' />

                        <button onClick={() => Login()}>FAZER LOGIN</button>
                    </div>

                    <div className="text-click">
                        <p id='forget'>ESQUECEU SUA SENHA?</p>

                        <span>Este site é protegido por reCAPTCHA. <strong> A POLÍTICA DE PRIVACIDADE </strong>
                            e os <strong>TERMOS DE SERVIÇO</strong>do Google se aplicam.</span>
                    </div>
                </section>
            </div>

            <div className="bottom-login">
                <div className="apps">
                    <img src="https://e-cdns-assets.dzcdn.net/common/images/apple-store-badge/pt-br.svg" alt="App Store" />

                    <img src="https://e-cdns-assets.dzcdn.net/common/images/play-store-badge/pt-br.svg" alt="Google Play" />
                </div>

                <div className="listas-infos">
                    <List array={Deezer} title='Deezer'/>
                    <List array={Resources} title='Recursos'/>
                    <List array={Explore} title='Explorar'/>
                    <List array={WhoWeAre} title='Quem somos?'/>
                    <List array={Cool} title='Legal'/>
                </div>

                <div className="bottom-infos">
                    <img src={deezer} alt="Logo Deezer" /><img src={deezer} alt="Logo Deezer" />

                    <div className="icons">
                        <BsFacebook/>
                        <AiFillInstagram/>
                        <AiFillTwitterCircle/>
                        <AiFillYoutube/>
                    </div>

                    <div className="language-age">
                        <span>@ 2023 Deezer</span>
                        <span>Português (br)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login