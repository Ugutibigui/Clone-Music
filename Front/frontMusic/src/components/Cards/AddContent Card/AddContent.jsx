import { AiOutlinePlus } from 'react-icons/ai'

import styles from './AddContent.module.css'

const AddContent = ({ text, onclick }) => {
    return (
        <figure className={styles.figure}>
            <div className={styles.plus} onClick={onclick}>
                <AiOutlinePlus color='#fff' size={30} />
            </div>

            <span>{text}</span>
        </figure>
    )
}

export default AddContent