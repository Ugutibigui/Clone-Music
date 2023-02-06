import './CardOption.css'

function CardOption(props) {
	return (
		<li className='cardOption'>
			<props.icon size={22} />
			<h3>
				{props.title}
			</h3>
		</li>
	)
}

export default CardOption
