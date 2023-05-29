import { Field } from 'formik'

import styles from './InputField.module.css'

function InputField({ type, text, name, placeholder, value }) {
    return (
        <div className={styles.formInput}>
            <label htmlFor={name}> {text} </label>
            <Field type={type} id={name} name={name} value={value}
            placeholder={placeholder} className={styles.input}/>
        </div>
    )
}

export default InputField