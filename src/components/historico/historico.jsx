import './style.css'

export function List(props){
    return(

        <div className="list">
            <strong className="prop-name">{props.name1}</strong>
            <strong className="prop-name">{props.percent}</strong>
            <strong className="prop-name">{props.name2}</strong>
        </div>

    )
}