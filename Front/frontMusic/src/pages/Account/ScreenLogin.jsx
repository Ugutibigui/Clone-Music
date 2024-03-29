import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsApple } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Formik, Form, ErrorMessage } from 'formik'
import { useContext, useEffect } from 'react'
import { Context } from '../../context/context'

import InputField from '../../components/Form/InputField/InputField'
import Button from '../../components/Button/Button'
import NavBottom from '../../components/Nav/NavBottom/NavBottom'
import backgroundLogin from '../../assets/background-login.jpeg'
import deezer from '../../assets/deezerWhite.png'
import api from '../../services/api'
import * as yup from 'yup'

import styles from './Account.module.css'

function ScreenLogin() {
	const validationLogin = yup.object().shape({
		email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
		password: yup.string().min(8, 'Mínimo de 8 caracteres').required('Campo obrigatório')
	})

	const [userState, dispatch] = useContext(Context)

	const Login = async (values) => {
		const body = {
			email: values.email,
			password: values.password
		}

		try {
			await api.post('user/login', body)
				.then(response => {
					if (response.data.ok === true) {
						dispatch({ type: 'LOGIN', payload: response.data.userInfo });
						alert("Logado")
					} else {
						alert('Email ou senha incorretos')
					}
				})
		} catch (error) {
			console.log('Erro na API do login')
		}
	}

	return (
		<div className={styles.bodyAccount}>
			<div className={styles.topAccount}>
				<img id={styles.backgroundAccount} src={backgroundLogin} alt="Background" />

				<section>
					<Link to="/">
						<img src={deezer} alt="Logo Deezer" />
					</Link>
					<div className={styles.textClick}>
						<h1>Fazer login</h1>
						<p>
							Ainda não possui uma conta Deezer?
							<Link to="/register">
								<strong>CADASTRE-SE</strong>
							</Link>
						</p>
					</div>
					<div className={styles.socialMediaAccount}>
						<button><BsFacebook size={35} color="royalblue" /></button>
						<button><FcGoogle size={35} /></button>
						<button><BsApple size={35} color='black'/></button>
					</div>
					<Formik initialValues={{}} validationSchema={validationLogin} onSubmit={Login} >
						{({ errors, touched }) => (
							<Form className={styles.form}>
								<div>
									<InputField type="email" text="E-mail:" name="email" />
									{errors.email && touched.email && (
										<ErrorMessage name="email" component="span" />
									)}
								</div>

								<div>
									<InputField type="password" text="Senha:" name="password" />
									{errors.password && touched.password && (
										<ErrorMessage name="password" component="span" />
									)}
								</div>

								<Button text="FAZER LOGIN" type="pink" typeButton="submit" />
							</Form>
						)}
					</Formik>
					<p id={styles.forget}>ESQUECEU SUA SENHA?</p>
					<div className={styles.textClick}>
						<span>
							Este site é protegido por reCAPTCHA. <strong>A POLÍTICA DE PRIVACIDADE</strong> e os{' '}
							<strong>TERMOS DE SERVIÇO</strong> do Google se aplicam.
						</span>
					</div>
				</section>
			</div>
			
			<NavBottom />
		</div>
	);
}

export default ScreenLogin;
