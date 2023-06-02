import { IoAdd } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import styles from './AddContent.module.css'

const AddContent = ({text, circle, link}) => {

  return (
    <div className={`${styles.addContent} ${circle && styles.circle}`}>
        <Link className={styles.image} to={link !== undefined ? link : '/favorite'}>
            <IoAdd size={40} color='#72727d'/>
        </Link>
        <p> {text} </p>
    </div>
  )
}

export default AddContent