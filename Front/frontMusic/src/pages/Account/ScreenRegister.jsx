import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { SlArrowRight } from 'react-icons/sl'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { Formik, Form, ErrorMessage } from 'formik'

import backgroundLogin from '../../assets/background-login.jpeg'
import NavBottom from '../../components/Nav/NavBottom/NavBottom'
import deezer from '../../assets/deezerWhite.png'
import Button from '../../components/Button/Button'
import Select from '../../components/Form/Select/Select'
import InputField from '../../components/Form/InputField/InputField'
import Input from '../../components/Form/Input/Input'
import GloboPlay from '../../assets/partnerships/globoPlayLogo.png'
import Itau from '../../assets/partnerships/itauLogo.png'
import Marketplace from '../../assets/partnerships/mercadoLogo.png'
import Tim from '../../assets/partnerships/timLogo.png'
import TimUltra from '../../assets/partnerships/timUltraLogo.png'
import api from '../../services/api';
import * as yup from 'yup'

import styles from './Account.module.css'

function ScreenRegister() {

    const identities = ['Identidade', 'Feminino', 'Masculino', 'Não-Binário']

    // Funcionamento da criação de Usúario

    const [sex, setSex] = useState('')
    const [checkbox, setCheckBox] = useState('')
    const [accountExists, setAccountExists] = useState(false);

    const Register = async (values) => {
        const body = {
            name: values.name,
            username: values.username,
            email: values.email,
            password: values.password,
            age: values.age,
            sex: sex,
            artist: checkbox,
            image: ''
        }

        try {
            await api.post('user/checkExistingUser', { email: values.email })
                .then(response => {
                    if (response.data.exists) {
                        setAccountExists(true);
                        return;
                    } else {
                        setAccountExists(false)
                    }
                })

            await api.post('user/createUser', body)
                .then(response => {
                    if (response.data.ok) {
                        alert('Conta Criada com sucesso')
                        window.location.reload()
                    } else {
                        alert('Erro na Criação de Conta')
                    }
                })
        } catch (error) {
            console.log('Erro na API de Cadastro')
        }
    }

    const validationRegister = yup.object().shape({
        name: yup.string().required('Campo obrigatório'),
        username: yup.string().required('Campo obrigatório'),
        email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
        password: yup.string().min(8, 'Mínimo de 8 caracteres').required('Campo obrigatório'),
        age: yup.number().required('Campo obrigatório')
    })

    return (
        <div className={styles.bodyAccount}>
            <div className={styles.topAccount}>
                <img id={styles.backgroundAccount} src={backgroundLogin} alt="Logo image" />

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

                    <h3 id={styles.subtitle}>Você já está cadastrado na Deezer? <Link to='/login'> <strong>LOGIN</strong> </Link> </h3>

                    <div className={styles.socialMediaAccount}>
                        <Button icon={<BsFacebook size={25} color='royalblue' />} text='FACEBOOK' type='solid_white' width='180px'/>
                        <Button icon={<FcGoogle size={25} />} text='GOOGLE' type='solid_white' width='180px'/>
                    </div>

                    <Formik initialValues={{}} validationSchema={validationRegister} onSubmit={Register}>
                        {({ errors, touched }) => (
                            <Form className={styles.form}>
                                <div>
                                    <InputField type='text' text='Nome:' name='name' />
                                    {errors.name && touched.name && (
                                        <ErrorMessage name="name" component="span" />
                                    )}
                                </div>

                                <div>
                                    <InputField type='text' text='Nome de usuário:' name='username' />
                                    {errors.username && touched.username && (
                                        <ErrorMessage name="username" component="span" />
                                    )}
                                </div>

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

                                <div>
                                    <InputField type='number' text='Idade:' name='age' />
                                    {errors.age && touched.age && (
                                        <ErrorMessage name="age" component="span" />
                                    )}
                                </div>

                                <Select text='Identidade' name='identifyRegister' options={identities} handleOnChange={(option) => setSex(option.target.value)} />

                                <Input type='checkbox' text='Artista?' name='artistCheck' handleOnChange={(bool) => setCheckBox(bool.target.checked ? 1 : 0)} />

                                <h2 id={styles.terms}>Ao clicar em "Cadastrar-se", você aceita os <strong> TERMOS E CONDIÇÕES DE USO </strong> e a <strong> POLÍTICA DE PRIVACIDADE </strong></h2>

                                <Button text='CADASTRAR-SE' type='pink' typeButton='submit' />

                                {accountExists && <span>A conta já existe. Por favor, escolha outro e-mail.</span>}
                            </Form>
                        )}
                    </Formik>

                    <span id={styles.reCAPTCHA}>Este site é protegido por reCAPTCHA. <strong> A POLÍTICA DE PRIVACIDADE </strong> e os <strong> TERMOS DE SERVIÇO </strong> do Google se aplicam.</span>
                </section>
            </div>

            <NavBottom />
        </div>
    )
}

export default ScreenRegister
