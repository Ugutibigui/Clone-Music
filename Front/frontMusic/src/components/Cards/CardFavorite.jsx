import '../Content/Musica/Music'

function CardFavorite(props) {
	return (
		<div className="image-round">
            <img src={props.image} alt="Artista" />

            <span>{props.name}</span>

            <p>{props.fans}</p>
        </div>
	)
}

export default CardFavorite
