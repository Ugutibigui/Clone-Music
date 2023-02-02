import { useState } from 'react'
import './Index.css'
import deezer from '../../assets/deezerWhite.png'

import {FaMusic} from 'react-icons/fa'
import {FaMicrophoneAlt} from 'react-icons/fa'
import {MdOutlineRadio} from 'react-icons/md'
import {GrAppsRounded} from 'react-icons/gr'
import {MdFavoriteBorder} from 'react-icons/md'
import {FiSearch} from 'react-icons/fi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {MdNotifications} from 'react-icons/md'
import {MdAccountCircle} from 'react-icons/md'

import CardOption from '../../components/CardOption'


function Index() {

	const icons = [<FaMusic/>, <FaMicrophoneAlt/>, <MdOutlineRadio/>, <GrAppsRounded/>, <MdFavoriteBorder/>]

	return (
		<div className="App">
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

					<div className="options">
						<div className="options-ref">
							<ul>
								<CardOption/>
							</ul>
						</div>
					</div>
				</div>
				<div className='content'>
					<header>
						<div className="text-box">
							<div className="search">
								<button> <FiSearch size={20}/> </button>
								<input type="text" placeholder='Buscar'/>
							</div>
							<button> <AiFillCloseCircle size={35}/> </button>
						</div>

						<div className="profile">
							<div className="icons-profile">
								<button> <MdNotifications size={30}/> </button>
								<button> <MdAccountCircle size={30}/> </button>
							</div>
						</div>
					</header>
					<div className='info-content'>

					</div>
				</div>
			</div>
			<div className='bottom'></div>
		</div>
	)
}

export default Index
