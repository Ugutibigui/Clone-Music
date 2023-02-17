import './ButtonOption.css'

function ButtonOption(props) {

	const content = document.querySelector('.choice-content')

	return (
		<li className='buttonOption'>
			<props.icon size={22} />
			<h3>
				{props.title}
			</h3>
		</li>
	)
}

export default ButtonOption
