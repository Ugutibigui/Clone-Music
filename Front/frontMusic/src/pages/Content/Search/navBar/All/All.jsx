import { Link } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { useEffect, useState } from 'react'

import TableMusic from '../../../../../components/Layout/TableMusic/TableMusic'
import MusicInfos from '../../../../../components/Layout/MusicInfos/MusicInfos'
import ArtistCard from '../../../../../components/Cards/Artist Card/ArtistCard'

import styles from './All.module.css'

const All = ({ artistData }) => {
	const [artist, setArtist] = useState([])
	const [fans, setFans] = useState([])
	const [musics, setMusics] = useState([])

	useEffect(() => {
		setArtist(artistData[0])
	}, [artistData])

	useEffect(() => {
		if (artist && artist.userId) {
			fetch(`http://localhost:8000/fans?user=${artist.userId}`, {
				'method': 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(response => response.json())
				.then(data => setFans(data[0]))
		}
	}, [artist])

	useEffect(() => {
		if (artist && artist.userId) {
			fetch(`http://localhost:8000/musics?user=${artist.userId}`, {
				'method': 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(response => response.json())
				.then(data => setMusics(data))
		}
	}, [artist])

	return (
		<>
			<section className={styles.mainResult}>
				<h1> Principal Resultado </h1>

				<div className={styles.profile}>
					<img src={artist.photo} alt={artist.name} />

					<div className={styles.infos}>
						<h2> {artist.name} </h2>
						<span> {fans.fansCount} fãs</span>
						<div> Artista </div>
					</div>
				</div>
			</section>

			<section className={styles.musics}>
				<Link to={`/search/music?text=${artist.name}`}>
					<h1> Músicas </h1>
					<SlArrowRight size={20} />
				</Link>

				<div>
					<TableMusic>
						<span>MÚSICA</span>
						<span>ARTISTA</span>
						<span id='views'>VIEWS</span>
						<span> <AiOutlineClockCircle /> </span>
						<span id='pop'>POP.</span>
						<div id='cubeTable'></div>
					</TableMusic>

					<div className={styles.musicInfos}>
						{musics.length > 0 ?
							musics.map((music, index) => (
								<MusicInfos key={index} infos={music} moreInfos={true} />
							)) : (
								<h1> Nenhuma música encontrada!</h1>
							)}
					</div>
				</div>
			</section>

			<section className={styles.artists}>
				<Link to={`/search/artist?text=${artist.name}`}>
					<h1> Artistas </h1>
					<SlArrowRight size={20} />
				</Link>

				<ul className={styles.artistList}>
					{artistData.length > 0 ? (
						<>
							{artistData.slice(0, 4).map((artist, index) => (
								<li key={index}>
									<ArtistCard object={artist} />
								</li>
							))}

						</>
					) : (
						<h1> Aritsta não encontrado! </h1>
					)}
				</ul>
			</section>
		</>
	)
}

export default All
