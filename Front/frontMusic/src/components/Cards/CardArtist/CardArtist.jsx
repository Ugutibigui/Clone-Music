import './CardArtist.css'

function CardArtist(props) {
	return (
		<div className="figure-image">
            <img src={props.image} id={props.id}/>
        </div>
	)
}

export default CardArtist
