import styles from './Input.module.css'

function Input({ type, text, name, placeholder, value, handleOnChange }) {
    return (
        <div className={styles.formInput}>
            <label htmlFor={name}> {text} </label>
            <input type={type} id={name} name={name} value={value}
            placeholder={placeholder} onChange={handleOnChange}/>
        </div>
    )
}

export default Input