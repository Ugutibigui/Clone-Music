import styles from './QuizzeCard.module.css'

function QuizzeCard({colorOne, colorTwo, title, text}) {
    return (
        <div className={styles.rectangle} style={{ backgroundImage: `linear-gradient(to right, ${colorOne} , ${colorTwo})` }}>
            <img src="https://e-cdns-images.dzcdn.net/images/misc/ed75a34e8f911b6bd636144096678a9c/142x142-none-80-0-0.png" alt="??" />

            <div className={styles.rectangleText}>
                {title ? (<h1>{title}</h1>) : null}

                <h2 id={styles.subtitle} >{text}</h2>
            </div>
        </div>
    )
}

export default QuizzeCard
