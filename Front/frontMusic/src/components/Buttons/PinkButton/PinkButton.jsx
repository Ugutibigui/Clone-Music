import styles from './PinkButton.module.css'

function PinkButton({text, icon, onClick}) {
    return(
        <div className={styles.button}>
            <button onClick={ onClick && onClick }> 
                {icon && icon} 
                {text} 
            </button>
        </div>
    )
}

export default PinkButton