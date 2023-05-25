import { BsFacebook, BsGoogle } from 'react-icons/bs'
import { AiFillCamera } from 'react-icons/ai'
import { useState } from 'react'

import Button from '../../../../../components/Buttons/Button/Button'
import api from '../../../../../services/api'

import styles from './Settings.module.css'

const Settings = () => {

    const [camera, setCamera] = useState('off')
    const [profileImage, setProfileImage] = useState('https://e-cdns-images.dzcdn.net/images/user/d41d8cd98f00b204e9800998ecf8427e/264x264-000000-80-0-0.jpg');

    function handleFileChange(event) {
        const file = event.target.files[0]
        const imageUrl = URL.createObjectURL(file)
        setProfileImage(imageUrl)
    }

    const toggleImage = async () => {
        try {
            await api.patch('')
        } catch (error) {
            console.log("Erro para upar dados na API")
        }
    }

    return (
        <div className={styles.content}>
            <h1> Meu Plano </h1>

            <div className={styles.box}>
                <label htmlFor="profileImage" className={styles.customFileUpload}
                onMouseEnter={() => setCamera('on')}
                onMouseLeave={() => setCamera('off')}>
                    <img src={profileImage} alt="Profile" />
                    <input type="file" id="profileImage"  onChange={handleFileChange} accept="image/*" />

                    <div className={`${styles.camera} ${styles[camera]}`}>
                        <AiFillCamera size={30}/>
                    </div>
                </label>

                <div className={styles.texts}>
                    <h2> Ubbe Lothbrok </h2>
                    <span> Você está desfrutando da versão Deezer Free. </span>
                </div>

                <Button text='GERENCIAR MINHA ASSINATURA' type='gray' />
            </div>

            <h2> Login </h2>

            <div className={`${styles.box} ${styles.column}`}>
                <div className={styles.boxContent}>
                    <label htmlFor="emailConfig"> Seu email: </label>

                    <div className={styles.input}>
                        <input type="email" id="emailConfig" value='Exemplo123@gmail.com' readOnly />
                        <Button text='ALTERAR' type='gray' />
                    </div>
                </div>

                <div className={styles.boxContent}>
                    <label htmlFor="passowordConfig"> Sua senha: </label>

                    <div className={styles.input}>
                        <input type="password" id="passowordConfig" value='Exemplo123@gmail.com' readOnly />
                        <Button text='ALTERAR' type='gray' />
                    </div>
                </div>
            </div>

            <div className={styles.box}>
                <div className={styles.buttons}>
                    <Button text='CONECTE-SE COM FACEBOOK' icon={<BsFacebook size={20} />} type='blue' />
                    <Button text='CONECTE-SE COM GOOGLE' icon={<BsGoogle size={20} />} type='white' />
                </div>
            </div>

            <h2> Informações Deezer visíveis para outros usuários </h2>

            <div className={styles.box}>
                <span> Eu me identifico como </span>

                <ul>
                    <li>
                        <label htmlFor="mascRadio"> Masculino </label>
                        <input type="radio" id="mascRadio" />
                    </li>

                    <li>
                        <label htmlFor="mascFem"> Feminino </label>
                        <input type="radio" id="mascFem" />
                    </li>

                    <li>
                        <label htmlFor="mascNo"> Não-Binário </label>
                        <input type="radio" id="mascNo" />
                    </li>
                </ul>

                <label htmlFor="userName"> Nome de usuário </label>
                <input type="text" id="userName" value='Ubbe Lothbrok' readOnly/>
            </div>

            <div className={styles.box}>
                <Button text='Salvar' type='pink' onClick={toggleImage} />
            </div>
        </div>
    )
}

export default Settings