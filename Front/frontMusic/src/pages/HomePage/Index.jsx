import { FaMusic, FaMicrophoneAlt } from 'react-icons/fa'
import { MdOutlineRadio, MdFavoriteBorder, MdNotifications, MdAccountCircle } from 'react-icons/md'
import { GiAbstract050 } from 'react-icons/gi'
import { FiSearch } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Menu from '../../components/Modals/Menu/Menu'
import Notification from '../../components/Modals/Notification/Notification'
import deezer from '../../assets/deezerWhite.png'
import ButtonOption from '../../components/Buttons/ButtonOption/ButtonOption'

import './Index.css'

function Index({ content }) {

	const [menuOpen, setMenuOpen] = useState(false)
	const [noficationOpen, setNoficationOpen] = useState(false)

	return (
		<div className="App">
			<Menu open={menuOpen} setOpen={setMenuOpen} />
			<Notification open={noficationOpen} setOpen={setNoficationOpen} />

			<div className="top">
				<div className='left-menu'>
					<div className="logo-top">
						<img src={deezer} />
					</div>
					<div className="subscribe">
						<p>
							Você está na versão Deezer Free. Faça o upgrade e pule os anúncios, de graça, por 1 mês
						</p>

						<button>ASSINAR</button>
					</div>

					<section>
						<ul className='icon-options'>
							<ButtonOption icon={FaMusic} title="Música" to='/' />
							<ButtonOption icon={FaMicrophoneAlt} title="Podcasts" to='/podcast' />
							<ButtonOption icon={MdOutlineRadio} title="Rádios" to='/radio' />
							<ButtonOption icon={GiAbstract050} title="Explorar" to='/explore' />
							<ButtonOption icon={MdFavoriteBorder} title="Favoritos" to='/favorite' />
						</ul>

						<div className="more-options">
							<Link to='/favorite/dearest'> <span>Mais queridas</span> </Link>
							<Link to='/favorite/playlist'> <span>Playlist</span> </Link>
							<Link to='/favorite/album'> <span>Álbuns</span> </Link>
							<Link to='/favorite/artist'> <span>Artistas</span> </Link>
							<Link to='/favorite/podcasts'> <span>Podcasts</span> </Link>						
						</div>
					</section>
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
								<button> <MdNotifications size={30} onClick={() => setNoficationOpen(true)}/> </button>
								<button> <MdAccountCircle size={30} onClick={() => setMenuOpen(true)} /> </button>
							</div>
						</div>
					</header>

					{content} 
				</div>
			</div>

			<div className='bottom'></div>
		</div>
	)
}

export default Index
