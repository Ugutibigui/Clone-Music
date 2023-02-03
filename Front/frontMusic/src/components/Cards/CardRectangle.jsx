import '../Content/Musica/Music'

function CardRectangle(props) {
	return (
		<div className="rectangle" style={{background}}>
            <img src="https://e-cdns-images.dzcdn.net/images/misc/ed75a34e8f911b6bd636144096678a9c/142x142-none-80-0-0.png" alt="??" />

            {props.title ? <p>{props.title}</p> : <p></p> }

            <p>{props.text}</p>
        </div>
	)
}

export default CardRectangle
