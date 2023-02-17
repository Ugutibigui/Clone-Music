import './List.css'

function List(props) {

    const CreateLi = (array) => {
        const ListInfo = []

        for (let i = 0; i < array.length; i++) {
            ListInfo.push( <li>{array[i]}</li> )
        }
        return ListInfo
    }

    return (
        <div className="infos-list">
            <span>{props.title}</span>

            <ul>
                {CreateLi(props.array)}
            </ul>
        </div>
    )
}

export default List
