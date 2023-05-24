import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { SlArrowRight } from 'react-icons/sl'
import { Link } from 'react-router-dom';
import { useState } from 'react'

import backgroundLogin from '../../assets/background-login.jpeg'
import NavBottom from '../../components/Nav/NavBottom/NavBottom'
import deezer from '../../assets/deezerWhite.png'
import Button from '../../components/Buttons/Button/Button'
import Select from '../../components/Form/Select/Select'
import Input from '../../components/Form/Input/Input'
import GloboPlay from '../../assets/partnerships/globoPlayLogo.png'
import Itau from '../../assets/partnerships/itauLogo.png'
import Marketplace from '../../assets/partnerships/mercadoLogo.png'
import Tim from '../../assets/partnerships/timLogo.png'
import TimUltra from '../../assets/partnerships/timUltraLogo.png'
import api from '../../services/api';

import styles from './Account.module.css'

function ScreenRegister() {

    const identities = ['Feminino', 'Masculino', 'Não-Binário']

    // Funcionamento da criação de Usúario

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const [sex, setSex] = useState('')
    const [checkbox, setCheckBox] = useState('')

    const Register = async () => {
        const body = {
            email: email,
            password: password,
            username: name,
            age: age,
            sex: sex,
            artist: checkbox,
            image: ''
        }

        console.log(body)

        try {
            await api.post('user/createUser', body)
            .then(response => {
                response.data.ok === true ? alert('Conta Criada com sucesso') : alert('Erro na Criação de Conta')
            })
        } catch (error) {
            console.log('Erro na API')
        }
    }

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
                        <Button icon={<BsFacebook size={25} color='royalblue' />} text='FACEBOOK' type='white'/>
                        <Button icon={<FcGoogle size={25} />} text='GOOGLE' type='white'/>
                    </div>

                    <div className={styles.form}>
                        <Input type='email' text='E-mail:' name='email' handleOnChange={(text) => setEmail(text.target.value)} value={email} />
                        <Input type='password' text='Senha:' name='password' handleOnChange={(text) => setPassword(text.target.value)} value={password} />
                        <Input type='text' text='Nome de usuário:' name='name' handleOnChange={(text) => setName(text.target.value)} value={name} />
                        <Input type='number' text='Idade:' name='age' handleOnChange={(text) => setAge(text.target.value)} value={age} />

                        <Select text='Identidade' name='identifyRegister' options={identities} handleOnChange={(option) => setSex(option.target.value)}/>

                        <Input type='checkbox' text='Artista?' name='artistCheck' handleOnChange={(bool) => setCheckBox(bool.target.checked ? 1 : 0)}/> 

                        <h2>Ao clicar em "Cadastrar-se", você aceita os <strong> TERMOS E CONDIÇÕES DE USO </strong> e a <strong> POLÍTICA DE PRIVACIDADE </strong></h2>

                        <Button text='CADASTRAR-SE' type='pink'  onClick={Register}/> 
                    </div>

                    <span id={styles.reCAPTCHA}>Este site é protegido por reCAPTCHA. <strong> A POLÍTICA DE PRIVACIDADE </strong> e os <strong> TERMOS DE SERVIÇO </strong> do Google se aplicam.</span>

                </section>
            </div>

            <NavBottom />
        </div>
    )
}

export default ScreenRegister
