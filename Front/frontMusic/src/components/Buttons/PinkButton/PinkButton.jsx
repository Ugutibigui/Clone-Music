import styles from './PinkButton.module.css'

function PinkButton({text, icon}) {
    return(
        <div className={styles.button}>
            <button> 
                {icon ? icon: null} 
                {text} 
            </button>
        </div>
    )
}

export default PinkButton