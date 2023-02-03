import { useState } from 'react'
import './Index.css'
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

import CardOption from '../../components/CardOption'
import CardArtist from '../../components/CardArtist'


function Index() {

	return (
		<div className="App">
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
								<button> <MdAccountCircle size={30} /> </button>
							</div>
						</div>
					</header>
					<div className='info-content'>
						 <div className="channel">
							<section className="add-artist">
								<div className="container">
									<p>Desbloqueie seu Flow, selecionando seus artistas favoritos para obter recomendações melhores.</p>

									<div className="artists">
										<CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/f2fc4cbd7dce34871582901f7bf3759b/80x80-000000-80-0-0.jpg'/>
										<CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/9e0f61326531faad987d27caf6715019/100x100-000000-80-0-0.jpg'/>
										<CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/e9e4d4e8bdd8af1d440aa1e3af5be10a/150x150-000000-80-0-0.jpg'/>
										<CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/2497a48e0926004ac93d56c917eba04b/100x100-000000-80-0-0.jpg'/>
										<CardArtist image='https://e-cdns-images.dzcdn.net/images/artist/df890144a57f2de468b1e4bd7fb1383a/80x80-000000-80-0-0.jpg'/>
									</div>

									<button>ADICIONE ARTISTAS</button>
								</div>
							</section>
						 </div>
					</div>
				</div>
			</div>
			<div className='bottom'></div>
		</div>
	)
}

export default Index
