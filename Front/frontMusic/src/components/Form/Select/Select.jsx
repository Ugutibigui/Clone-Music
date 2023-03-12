import styles from './Select.module.css'

function Select({ text, name, options, handleOnChange, value}) {
    return (
        <div className={styles.selectForm}>
            <label htmlFor={name}> {text} </label>
            <select name={name} id={name}>
                <option>Identidade</option>
                {options.map((option, index) => (
                    <option value={index} key={index}> {option} </option>
                ))}
            </select>
        </div>
    )
}

export default Select