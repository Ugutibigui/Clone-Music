import styles from './NavBottom.module.css'
import deezer from '../../../assets/deezerWhite.png'
import List from '../../List/List'

import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

function NavBottom() {

    // Arrays da lista de informações

    const Deezer = ['Planos', 'Dispositivos', 'Baixe o aplicativo para desktop', 'Vale presente', 'Ajuda', 'Community e feedback', 'Blog']
    const Resources = ['Flow', 'Identificar músicas', 'Transferir sua biblioteca', 'Letras', 'Escute offiline']
    const Explore = ['Mais ouvidas', 'Lançamento mais popular', 'Lançamentos', 'Rádios', 'Podcasts', 'Músicas para todos os momentos', 'Zen by deezer']
    const WhoWeAre = ['Investidores, Brand Partnerships', 'Músicos e podcasters', 'Desenvolvedores', 'Imprensa', 'Carreiras']
    const Cool = ['Termos e condições de uso', 'Política de privacidade', 'Cookies', 'open Source Software(EN)']

    return (
        <div className={styles.bottomAccount}>
            <div className={styles.apps}>
                <img src="https://e-cdns-assets.dzcdn.net/common/images/apple-store-badge/pt-br.svg" alt="App Store" />

                <img id={styles.googlePlay} src="https://e-cdns-assets.dzcdn.net/common/images/play-store-badge/pt-br.svg" alt="Google Play" />
            </div>

            <div className={styles.listasInfos}>
                <List array={Deezer} title='Deezer' />
                <List array={Resources} title='Recursos' />
                <List array={Explore} title='Explorar' />
                <List array={WhoWeAre} title='Quem somos?' />
                <List array={Cool} title='Legal' />
            </div>

            <div className={styles.bottomInfos}>

                <div className={styles.icons}>
                    <BsFacebook size={25} />
                    <AiFillInstagram size={25} />
                    <AiFillTwitterCircle size={25} />
                    <AiFillYoutube size={25} />
                </div>

                <img src={deezer} alt="Logo Deezer" />

                <div className={styles.languageAge}>
                    <span>@ 2023 Deezer</span>
                    <p>Português (br)</p>
                </div>
            </div>
        </div>
    )
}

export default NavBottom