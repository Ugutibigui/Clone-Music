import styles from './Select.module.css'

function Select({ text, name, options, handleOnChange}) {
    return (
        <div className={styles.selectForm}>
            <label htmlFor={name}> {text} </label>
            <select name={name} id={name} onChange={handleOnChange}>
                {options.map((option, index) => (
                    <option value={option} key={index}> {option} </option>
                ))}
            </select>
        </div>
    )
}

export default Select