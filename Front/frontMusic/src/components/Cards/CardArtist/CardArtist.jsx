import styles from './CardArtist.module.css'

function CardArtist({image, id}) {
	return (
		<div className={styles.figureImage}>
			<img src={image} id={`img${id}`} />
		</div>
	)
}

export default CardArtist
