import styles from './Account.module.css'

import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsApple } from 'react-icons/bs'
import { Link } from 'react-router-dom';

import Input from '../../components/Form/Input/Input';
import PinkButton from '../../components/Buttons/PinkButton/PinkButton';
import WhiteButton from '../../components/Buttons/WhiteButton/WhiteButton';
import NavBottom from '../../components/Section/NavBottom/NavBottom';
import backgroundLogin from '../../assets/background-login.jpeg'
import deezer from '../../assets/deezerWhite.png'
import api from '../../services/api';

function ScreenLogin() {

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
					response.data.ok === true ? alert('Logado') : alert("Email ou senha incorretos")
				})
		} catch {
			console.log("Erro na API do login")
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

					<div className={styles.textClick}>
						<h1>Fazer login</h1>
						<span>Ainda não possui uma conta Deezer? <Link to='/register'> <strong>CADASTRE-SE</strong> </Link></span>
					</div>

					<div className={`${styles.socialMediaAccount} ${styles.threeLogos}`}>
						<WhiteButton icon={<BsFacebook size={20} color='royalblue'/>} text='FACEBOOK' />
						<WhiteButton icon={<FcGoogle size={20}/>} text='GOOGLE' />
						<WhiteButton icon={<BsApple size={20}/>} text='APPLE' />
					</div>

					<div className={styles.form}>
						<Input type='email' text='E-mail:' name='email' handleOnChange={(text) => setEmail(text.target.value)} value={email}/>
						<Input type='password' text='Senha:' name='senha' handleOnChange={(text) => setpassword(text.target.value)} value={password}/>
						
						<PinkButton text='FAZER LOGIN' onClick={Login}/>
					</div>

					<p id={styles.forget}>ESQUECEU SUA SENHA?</p>
					<div className={styles.textClick}>
						<span>Este site é protegido por reCAPTCHA. <strong> A POLÍTICA DE PRIVACIDADE
						</strong> e os <strong>TERMOS DE SERVIÇO</strong>do Google se aplicam.</span>
					</div>
				</section>
			</div>

			<NavBottom/>
		</div>
	)
}

export default ScreenLogin
