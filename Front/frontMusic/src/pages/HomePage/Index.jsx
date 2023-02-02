import { useState } from 'react'
import './Index.css'

import deezer from '../../assets/deezerWhite.png'
import iconMusic from '../../assets/icons/music.svg'
import iconMic from '../../assets/icons/mic.svg'
import iconRadio from '../../assets/icons/radio.svg'
import iconExplore from '../../assets/icons/explore.svg'
import iconFavorite from '../../assets/icons/favorite.svg'
import iconSearch from '../../assets/icons/search.svg'
import iconClose from '../../assets/icons/close.svg'

import CardOption from '../../components/CardOption'


function Index() {

	const icons = [iconMusic, iconMic, iconRadio, iconExplore, iconFavorite]

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
								<button>{iconSearch}</button>
								<input type="text" placeholder='Buscar'/>
								<button>{iconClose}</button>
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
