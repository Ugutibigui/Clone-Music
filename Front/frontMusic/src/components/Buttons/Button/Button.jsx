import styles from './Button.module.css'

function Button({ icon, text, type, onClick, width }) {
    
    return (
        <div className={styles.button} style={{width: `${width}`}}>
            <button className={styles[type]} onClick={onClick && onClick} >
                {icon && icon}
                {text}
            </button>
        </div>
    )
}

export default Button