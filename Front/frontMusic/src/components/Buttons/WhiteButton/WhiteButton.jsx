import styles from './WhiteButton.module.css'

function WhiteButton({ icon, text}) {
    return (
        <button className={styles.button}>
            {icon}
            {text}
        </button>
    )
}

export default WhiteButton