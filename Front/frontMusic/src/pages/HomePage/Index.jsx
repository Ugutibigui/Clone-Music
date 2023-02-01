import { useState } from 'react'
import './Index.css'
import deezer from '../../assets/deezerWhite.png'


function Index() {

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
						
					</div>
				</div>
				<div className='content'>
					<header>

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
