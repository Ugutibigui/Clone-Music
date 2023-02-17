import './ButtonProfile.css'
import { IoIosArrowForward } from 'react-icons/io'

function ButtonProfile(props) { 
    return (
        <div className='button-profile'>
            <span style={{color: props.color}} >{props.text}</span>

            {props.checkbox === 'false' ? <span> <IoIosArrowForward/> </span> : <input type="checkbox" />}
        </div>
    )
}

export default ButtonProfile
