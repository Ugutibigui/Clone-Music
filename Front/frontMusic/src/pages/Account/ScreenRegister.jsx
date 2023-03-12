import styles from './Account.module.css'

import backgroundLogin from '../../assets/background-login.jpeg'
import NavBottom from '../../components/Section/NavBottom/NavBottom'
import deezer from '../../assets/deezerWhite.png'

import Select from '../../components/Form/Select/Select'
import Input from '../../components/Form/Input/Input'
import WhiteButton from '../../components/Buttons/WhiteButton/WhiteButton'
import PinkButton from '../../components/Buttons/PinkButton/PinkButton'
import GloboPlay from '../../assets/partnerships/globoPlayLogo.png'
import Itau from '../../assets/partnerships/itauLogo.png'
import Marketplace from '../../assets/partnerships/mercadoLogo.png'
import Tim from '../../assets/partnerships/timLogo.png'
import TimUltra from '../../assets/partnerships/timUltraLogo.png'

import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { SlArrowRight } from 'react-icons/sl'
import { Link } from 'react-router-dom';
import { useState } from 'react'

function ScreenRegister() {

    const identities = ['Feminino', 'Masculino', 'Não-Binário']

    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [age, setAge] = useState()

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
                        <WhiteButton icon={<BsFacebook size={25} color='royalblue'/>} text='FACEBOOK'/>
                        <WhiteButton icon={<FcGoogle size={25}/>} text='GOOGLE'/>
                    </div>

                    <div className={styles.form}>
                        <Input type='email' text='E-mail:' name='email' handleOnChange={(text) => setEmail(text.target.value)} value={email}/>
                        <Input type='text' text='Nome de usuário:' name='name' handleOnChange={(text) => setName(text.target.value)} value={name}/>
                        <Input type='password' text='Senha:' name='password' handleOnChange={(text) => setPassword(text.target.value)} value={password}/>
                        <Input type='number' text='Idade:' name='age' handleOnChange={(text) => setAge(text.target.value)} value={age}/>

                        <Select text='Identidade'name='identifyRegister' options={identities} />

                        <h2>Ao clicar em "Cadastrar-se", você aceita os <strong> TERMOS E CONDIÇÕES DE USO </strong> e a <strong> POLÍTICA DE PRIVACIDADE </strong></h2>

                        <PinkButton text='CADASTRAR-SE'/>
                    </div>

                    <span id={styles.reCAPTCHA}>Este site é protegido por reCAPTCHA. <strong> A POLÍTICA DE PRIVACIDADE </strong> e os <strong> TERMOS DE SERVIÇO </strong> do Google se aplicam.</span>

                </section>
            </div>

            <NavBottom />
        </div>
    )
}

export default ScreenRegister
