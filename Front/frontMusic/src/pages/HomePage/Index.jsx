import { useState } from 'react'
import './Index.css'

import Music from '../../components/Content/Musica/Music'
import Radio from '../../components/Content/Radios/Radio'
import Explore from '../../components/Content/Explorar/Explore'

import ModalProfile from '../../components/Modals/Profile/Profile'

import deezer from '../../assets/deezerWhite.png'
import { FaMusic, FaMicrophoneAlt } from 'react-icons/fa'
import { MdOutlineRadio, MdFavoriteBorder, MdNotifications, MdAccountCircle } from 'react-icons/md'
import { GiAbstract050 } from 'react-icons/gi'
import { FiSearch } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'

import CardOption from '../../components/Buttons/ButtonOption/ButtonOption'

function Index() {
	
	//valor armazenado, armazenado
	const [profileOpen, setprofileOpen] = useState(false)

	return (

		<div className="App">

			<ModalProfile open={profileOpen} setOpen={status => setprofileOpen(status)}/>

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
								<CardOption click={Music} icon={FaMusic} title="Música" />
								<CardOption click='Undefined' icon={FaMicrophoneAlt} title="Podcasts" />
								<CardOption click={Radio} icon={MdOutlineRadio} title="Rádios" />
								<CardOption click={Explore} icon={GiAbstract050} title="Explorar" />
								<CardOption click='Undefined' icon={MdFavoriteBorder} title="Favoritos" />
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
								<button  id='profile'> <MdAccountCircle size={30} onClick={() => setprofileOpen(true)}/> </button>
							</div>
						</div>
					</header>	
					
					<Music/>
				</div>
			</div>
			<div className='bottom'></div>
		</div>
	)
}

export default Index
