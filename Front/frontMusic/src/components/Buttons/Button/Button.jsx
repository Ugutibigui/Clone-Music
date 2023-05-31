import styles from './Button.module.css'

function Button({ icon, text, type, onClick, width, typeButton }) {
    
    return (
        <div className={styles.button}>
            <button className={styles[type]} onClick={onClick && onClick} type={typeButton} style={{width: `${width}`}}>
                {icon && icon}
                {text}
            </button>
        </div>
    )
}

export default Button