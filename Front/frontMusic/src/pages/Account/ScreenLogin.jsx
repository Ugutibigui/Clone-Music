import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsApple } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Formik, Form, ErrorMessage } from 'formik'

import InputField from '../../components/Form/InputField/InputField'
import Button from '../../components/Buttons/Button/Button'
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

	const Login = async (values) => {
		const body = {
			email: values.email,
			password: values.password
		}

		try {
			await api.post('user/login', body)
				.then(response => {
					response.data.ok === true ? alert('Logado') : alert('Email ou senha incorretos')
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
						<span>
							Ainda não possui uma conta Deezer?{' '}
							<Link to="/register">
								<strong>CADASTRE-SE</strong>
							</Link>
						</span>
					</div>
					<div className={`${styles.socialMediaAccount} ${styles.threeLogos}`}>
						<Button icon={<BsFacebook size={20} color="royalblue" />} text="FACEBOOK" type="white" />
						<Button icon={<FcGoogle size={20} />} text="GOOGLE" type="white" />
						<Button icon={<BsApple size={20} />} text="APPLE" type="white" />
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
