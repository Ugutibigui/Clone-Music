import styles from './Button.module.css'

function Button({ icon, text, type, onClick }) {
    return (
        <div className={styles.button}>
            <button className={styles[type]} onClick={onClick && onClick} >
                {icon && icon}
                {text}
            </button>
        </div>
    )
}

export default Button