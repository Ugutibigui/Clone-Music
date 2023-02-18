import './ScreenLogin.css'

import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { BsFacebook, BsApple } from 'react-icons/bs'
import { Link } from 'react-router-dom';

import List from '../../components/List/List'
import backgroundLogin from '../../assets/background-login.jpeg'
import deezer from '../../assets/deezerWhite.png'
import api from '../../services/api';

function ScreenLogin() {

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
						<span>Ainda não possui uma conta Deezer? <strong>CADASTRE-SE</strong></span>
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

			<div className="bottom-login">
				<div className="apps">
					<img id='app-store' src="https://e-cdns-assets.dzcdn.net/common/images/apple-store-badge/pt-br.svg" alt="App Store" />

					<img id='google-play' src="https://e-cdns-assets.dzcdn.net/common/images/play-store-badge/pt-br.svg" alt="Google Play" />
				</div>

				<div className="listas-infos">
					<List array={Deezer} title='Deezer' />
					<List array={Resources} title='Recursos' />
					<List array={Explore} title='Explorar' />
					<List array={WhoWeAre} title='Quem somos?' />
					<List array={Cool} title='Legal' />
				</div>

				<div className="bottom-infos">

					<div className="icons">
						<BsFacebook size={25} />
						<AiFillInstagram size={25} />
						<AiFillTwitterCircle size={25} />
						<AiFillYoutube size={25} />
					</div>

					<img src={deezer} alt="Logo Deezer" />

					<div className="language-age">
						<span>@ 2023 Deezer</span>
						<p>Português (br)</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ScreenLogin
