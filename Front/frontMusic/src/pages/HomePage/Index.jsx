import { FaMicrophoneAlt } from 'react-icons/fa'
import { IoMusicalNotesOutline } from 'react-icons/io'
import { MdOutlineRadio, MdFavoriteBorder, MdNotifications, MdAccountCircle } from 'react-icons/md'
import { GiAbstract050 } from 'react-icons/gi'
import { FiSearch } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Menu from '../../components/Modals/Menu/Menu'
import Notification from '../../components/Modals/Notification/Notification'
import deezer from '../../assets/deezerWhite.png'

import styles from './Index.module.css'

function Index({ content }) {

	const navButton = [
		{ icon: IoMusicalNotesOutline, title: 'Música', to: '/' },
		{ icon: FaMicrophoneAlt, title: 'Podcasts', to: '/podcast' },
		{ icon: MdOutlineRadio, title: 'Rádios', to: '/radio' },
		{ icon: GiAbstract050, title: 'Explorar', to: '/explore' },
		{ icon: MdFavoriteBorder, title: 'Favoritos', to: '/favorite' }
	]

	const { pathname } = useLocation()

	const [menuOpen, setMenuOpen] = useState(false)
	const [noficationOpen, setNoficationOpen] = useState(false)
	const [search, setSearch] = useState('')

	const Search = () => {
		const buttonSearch = document.getElementById("button-search")
		buttonSearch.click()
	}

	return (
		<div className={styles.app}>
			<Menu open={menuOpen} setOpen={setMenuOpen} />
			<Notification open={noficationOpen} setOpen={setNoficationOpen} />

			<div className={styles.top}>
				<section className={styles.leftMenu}>
					<img src={deezer} />

					<div className={styles.subscribe}>
						<p>
							Você está na versão Deezer Free. Faça o upgrade e pule os anúncios, de graça, por 1 mês
						</p>

						<button>ASSINAR</button>
					</div>

					<div className={styles.optionsNavigations}>
						<ul className={styles.optionsOne}>
							{navButton.map((item, index) => (
									<li className={(item.to.includes('favorite') ? pathname.includes(item.to) : pathname === item.to) ? `${styles.activeButton}` : `${styles.button}`} key={index}>
										<Link to={item.to}>
											{item.icon({size: 35})}

											<h1> {item.title} </h1>
										</Link>
									</li>
								))}
						</ul>

						<nav className={styles.optionsTwo}>
							<Link to='/favorite/dearest'> <span>Mais queridas</span> </Link>
							<Link to='/favorite/playlist'> <span>Playlist</span> </Link>
							<Link to='/favorite/album'> <span>Álbuns</span> </Link>
							<Link to='/favorite/artist'> <span>Artistas</span> </Link>
							<Link to='/favorite/podcasts'> <span>Podcasts</span> </Link>
						</nav>
					</div>
				</section>
				<div className={styles.contentRight}>
					<header>
						<div className={styles.textBox}>
							<div className={styles.search}>
								<Link to='/search'>
									<button> <FiSearch size={20} /> </button>
								</Link>
								<input type="text" placeholder='Buscar' onChange={event => setSearch(event.target.value)}
									onKeyDown={event => event.key === 'Enter' ? Search() : null} value={search} />
							</div>
							<button className={search ? `${styles.active}` : `${styles.remove}`} onClick={() => setSearch('')}> <AiFillCloseCircle size={35} /> </button>
						</div>

						<div className={styles.profile}>
							<div className={styles.iconsProfile}>
								<button> <MdNotifications size={30} onClick={() => setNoficationOpen(true)} /> </button>
								<button> <MdAccountCircle size={30} onClick={() => setMenuOpen(true)} /> </button>
							</div>
						</div>
					</header>

					{content}
				</div>
			</div>

			<section className={styles.bottom}></section>
		</div>
	)
}

export default Index
