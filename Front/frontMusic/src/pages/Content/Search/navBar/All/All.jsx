import { Link } from 'react-router-dom'
import { SlArrowRight } from 'react-icons/sl'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { useEffect, useState } from 'react'

import TableMusic from '../../../../../components/Layout/TableMusic/TableMusic'
import MusicInfos from '../../../../../components/Layout/MusicInfos/MusicInfos'

import styles from './All.module.css'

const All = ({ artistData }) => {
	const [fans, setFans] = useState([])
	const [musics, setMusics] = useState([])

	useEffect(() => {
		if (artistData && artistData.userId) {
			fetch(`http://localhost:8000/fans?user=${artistData.userId}`, {
				'method': 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(response => response.json())
				.then(data => setFans(data[0]))
		}
	}, [artistData])

	useEffect(() => {
		if (artistData && artistData.userId) {
			fetch(`http://localhost:8000/musics?user=${artistData.userId}`, {
				'method': 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then(response => response.json())
				.then(data => setMusics(data))
		}
	}, [artistData])

	return (
		<>
			<section className={styles.mainResult}>
				<h1> Principal Resultado </h1>

				<div className={styles.profile}>
					<img src={artistData.photo} alt={artistData.name} />

					<div className={styles.infos}>
						<h2> {artistData.name} </h2>
						<span> {fans.fansCount} fãs</span>
						<div> Artista </div>
					</div>
				</div>
			</section>

			<section className={styles.musics}>
				<Link to={`/search/music?text=${artistData.name}`}>
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
		</>
	)
}

export default All
