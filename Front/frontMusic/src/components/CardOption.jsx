function CardOption(props) {
  return (
    <li className='cardOption'>
        <props.icon/>
        <h4>
          {props.title}
        </h4>
    </li>
  )
}

export default CardOption
