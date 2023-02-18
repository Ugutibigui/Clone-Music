import './ScreenLogin.css'

import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsApple } from 'react-icons/bs'
import { Link } from 'react-router-dom';

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
			console.log("Erro")
		}
	}

	return (
		<div className="body-login">
			<div className="top-login">

				<img id='backgroundLogin' src={backgroundLogin} alt="" />

				<section>
					<Link to='/'>
						<img src={deezer} alt="Logo Deezer" />
					</Link>

					<div className="text-click">
						<h1>Fazer login</h1>
						<span>Ainda não possui uma conta Deezer? <Link to='/register'> <strong>CADASTRE-SE</strong> </Link></span>
					</div>

					<div className="social-media">
						<button>
							<BsFacebook size={20} />
							<span>FACEBOOK</span>
						</button>

						<button>
							<FcGoogle size={20} />
							<span>GOOGLE</span>
						</button>

						<button>
							<BsApple size={20} />
							<span>APPLE</span>
						</button>
					</div>

					<div className='form'>
						<label htmlFor="email">Email:</label>
						<input value={email} onChange={(text) => setEmail(text.target.value)} type="email" id='email' />

						<label htmlFor="password">Senha:</label>
						<input value={password} onChange={(text) => setpassword(text.target.value)} type="password" id='password' />

						<button onClick={() => Login()}>FAZER LOGIN</button>
					</div>

					<p id='forget'>ESQUECEU SUA SENHA?</p>
					<div className="text-click">
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
