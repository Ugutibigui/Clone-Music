import styles from './Account.module.css'

import backgroundLogin from '../../assets/background-login.jpeg'
import NavBottom from '../../components/Section/NavBottom/NavBottom'
import deezer from '../../assets/deezerWhite.png'

import GloboPlay from '../../assets/partnerships/globoPlayLogo.png'
import Itau from '../../assets/partnerships/itauLogo.png'
import Marketplace from '../../assets/partnerships/mercadoLogo.png'
import Tim from '../../assets/partnerships/timLogo.png'
import TimUltra from '../../assets/partnerships/timUltraLogo.png'

import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { SlArrowRight } from 'react-icons/sl'
import { Link } from 'react-router-dom';

function ScreenRegister() {

    return (
        <div className={styles.bodyAccount}>
            <div className={styles.topAccount}>
                <img id={styles.backgroundAccount} src={backgroundLogin} alt="" />

                <section>
                    <Link to='/'>
                        <img src={deezer} alt="Logo Deezer" />
                    </Link>

                    <h1>Cadastra-se gratuitamente</h1>

                    <div className={styles.offer}>
                        <span>Ativar minha oferta de parceiro <SlArrowRight /> </span>

                        <div className={styles.partnerships}>
                            <img src={GloboPlay} alt="Company" />
                            <img src={Itau} alt="Company" />
                            <img src={Marketplace} alt="Company" />
                            <img src={Tim} alt="Company" />
                            <img src={TimUltra} alt="Company" />
                        </div>
                    </div>

                    <h2>Você já está cadastrado na Deezer? <Link to='/login'> <strong>LOGIN</strong> </Link> </h2>

                    <div className={styles.socialMediaAccount}>
                        <button>
                            <BsFacebook size={25} color='royalblue'/>
                            FACEBOOK
                        </button>

                        <button>
                            <FcGoogle size={25}/>
                            GOOGLE
                        </button>
                    </div>

                    <div className={styles.form}>
                        <label htmlFor="email-register">E-mail</label>
                        <input type="email" id="email-register" />

                        <label htmlFor="name-register">Nome de usuário</label>
                        <input type="text" id="name-register" />

                        <label htmlFor="password-register">Senha</label>
                        <input type="password" id="password-register" />

                        <label htmlFor="age-register">Idade</label>
                        <input type="number" id='age-register' />

                        <label htmlFor="identity-register">Identidade</label>
                        <select id={styles.identityRegister}>
                            <option value="0">Identidade</option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                        </select>

                        <h2>Ao clicar em "Cadastrar-se", você aceita os <strong> TERMOS E CONDIÇÕES DE USO </strong> e a <strong> POLÍTICA DE PRIVACIDADE </strong></h2>

                        <button>Cadastrar-se</button>
                    </div>

                    <span id={styles.reCAPTCHA}>Este site é protegido por reCAPTCHA. <strong> A POLÍTICA DE PRIVACIDADE </strong> e os <strong> TERMOS DE SERVIÇO </strong> do Google se aplicam.</span>

                </section>
            </div>

            <NavBottom />
        </div>
    )
}

export default ScreenRegister
