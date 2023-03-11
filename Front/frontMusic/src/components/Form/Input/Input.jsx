import styles from './Input.module.css'

function Input({ type, text, name, placeholder, handleOnChange, value }) {
    return (
        <div className={styles.formInput}>
            <label htmlFor={name}> {text} </label>
            <input type={type} name={name} id={name} value={value}
            placeholder={placeholder} onChange={handleOnChange}/>
        </div>
    )
}

export default Input