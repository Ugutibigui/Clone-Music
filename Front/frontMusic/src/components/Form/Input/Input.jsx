import { Field } from 'formik'

import styles from './Input.module.css'

function Input({ type, text, name, placeholder, value }) {
    return (
        <div className={styles.formInput}>
            <label htmlFor={name}> {text} </label>
            <Field type={type} id={name} name={name} value={value}
            placeholder={placeholder} className={styles.input}/>
        </div>
    )
}

export default Input