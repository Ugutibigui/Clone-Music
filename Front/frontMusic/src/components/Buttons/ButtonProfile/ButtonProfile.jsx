import './ButtonProfile.css'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io'

function ButtonProfile(props) {

    return (
        <Link to={props.route !== 'none' ? props.route :''} id='link-button'>
            <div className='button-profile'>
                <span style={{ color: props.color }} >{props.text}</span>

                {props.checkbox === 'false' ? <span> <IoIosArrowForward /> </span> : <input type="checkbox" />}
            </div>
        </Link>
    )
}

export default ButtonProfile
