import './Channel.css'

const h3 = (props) => {
    if (props.h3) {
        return <h3>{props.h3}</h3>
    }
}

function CardFavorite(props) {
    return (
        <section className='channel'>
            <div className="container">
                <h2>{props.h2}</h2>
                
                {h3(props)}

                <div className="organize">
                    <div className="gallery">
                        <props.card image='' title='' fans='' date='' author='' tracks=''/>
                        <props.card image='' title='' fans='' date='' author='' tracks=''/>
                        <props.card image='' title='' fans='' date='' author='' tracks=''/>
                        <props.card image='' title='' fans='' date='' author='' tracks=''/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardFavorite
