import { useState } from 'react'
import './Index.css'

import Music from '../../components/Content/Musica/Music'
import Radio from '../../components/Content/Radios/Radio'
import Explore from '../../components/Content/Explorar/Explore'
import ModalLogin from '../../components/Content/ModalLogin/ModalLogin'

import deezer from '../../assets/deezerWhite.png'
import { FaMusic } from 'react-icons/fa'
import { FaMicrophoneAlt } from 'react-icons/fa'
import { MdOutlineRadio } from 'react-icons/md'
import { GiAbstract050 } from 'react-icons/gi'
import { MdFavoriteBorder } from 'react-icons/md'
import { FiSearch } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdNotifications } from 'react-icons/md'
import { MdAccountCircle } from 'react-icons/md'

import CardOption from '../../components/Cards/CardOption/CardOption'

function Index() {
	const [modalOpen, setModalOpen] = useState(false)
	//valor armazenado, armazenado

	return (

		<div className="App">
			<ModalLogin open={modalOpen} setOpen={status => setModalOpen(status)}/>	
			<div className="top">
				<div className='left-menu'>
					<div className="top-menu">
						<div className="logo-top">
							<img src={deezer} />
						</div>
						<div className="subscribe">
							<p>
								Você está na versão Deezer Free. Faça o upgrade e pule os anúncios, de graça, por 1 mês
							</p>

							<button>ASSINAR</button>
						</div>

					</div>

					<figure>
						<div className="options">
							<ul className='icon-options'>
								<CardOption icon={FaMusic} title="Música" />
								<CardOption icon={FaMicrophoneAlt} title="Podcasts" />
								<CardOption icon={MdOutlineRadio} title="Rádios" />
								<CardOption icon={GiAbstract050} title="Explorar" />
								<CardOption icon={MdFavoriteBorder} title="Favoritos" />
							</ul>

							<div className="more-options">
								<div className="spans">
									<span>Mais queridas</span>
									<span>Playlist</span>
									<span>Álbuns</span>
									<span>Artistas</span>
									<span>Podcasts</span>
								</div>
							</div>
						</div>
					</figure>
				</div>
				<div className='content'>
					<header>
						<div className="text-box">
							<div className="search">
								<button> <FiSearch size={20} /> </button>
								<input type="text" placeholder='Buscar' />
							</div>
							<button> <AiFillCloseCircle size={35} /> </button>
						</div>

						<div className="profile">
							<div className="icons-profile">
								<button> <MdNotifications size={30} /> </button>
								<button id='profile'> <MdAccountCircle size={30} onClick={() => setModalOpen(true)}/> </button>
							</div>
						</div>
					</header>	
					
					<Explore/>		
				</div>
			</div>
			<div className='bottom'></div>
		</div>
	)
}

export default Index
