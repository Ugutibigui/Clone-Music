import './CardFavorite.css'

function CardFavorite(props) {
    return (
        <div className="image-round"> 
            <img src='https://e-cdns-images.dzcdn.net/images/artist/a9cb605a0b64f652ec004187aba94ad8/264x264-000000-80-0-0.jpg' alt="Artista" /> 

            <span>Gusttavo Lima</span>

            <p>7.137.751 fãs</p>
        </div>
    )
}

export default CardFavorite
