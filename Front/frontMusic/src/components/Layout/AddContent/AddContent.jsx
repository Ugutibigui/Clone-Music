import { IoAdd } from 'react-icons/io5'

import styles from './AddContent.module.css'

const AddContent = ({text, circle}) => {
  return (
    <div className={`${styles.addContent} ${circle && styles.circle}`}>
        <div className={styles.image}>
            <IoAdd size={40} color='#72727d'/>
        </div>
        <p> {text} </p>
    </div>
  )
}

export default AddContent