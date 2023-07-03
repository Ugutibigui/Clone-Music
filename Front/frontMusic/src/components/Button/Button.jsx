import styles from './Button.module.css'

function Button({ icon, text, type, onClick, width, typeButton }) {
    return (
        <button id={styles.button} className={styles[type]} onClick={onClick && onClick} // Passar função dp onclick
        type={typeButton} style={{ width: `${width}` }}>
            {icon && icon}
            {text}
        </button>
    )
}

export default Button