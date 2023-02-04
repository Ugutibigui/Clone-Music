import '../Content/Musica/Music'

const Title = (props) => {
    if (props.title) {
        return <span id='title'>{props.title}</span>
    }
} 

function CardRectangle(props) {
    return (
        <div className="rectangle" style={{ backgroundImage: `linear-gradient(to right, ${props.colorOne} , ${props.colorTwo})` }}>
            <img src="https://e-cdns-images.dzcdn.net/images/misc/ed75a34e8f911b6bd636144096678a9c/142x142-none-80-0-0.png" alt="??" />

            <div className="rectangle-text">
                
                {Title(props)}

                <span>{props.text}</span>
            </div>
        </div>
    )
}

export default CardRectangle
