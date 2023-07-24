import "../styles/style-infosBloc.css"

function InfosBloc(props){
    return (
        <div className="infosBloc_container">
            <div className="img_container">
                <img src={ props.img }/>
            </div>
            <div className="infos_container">
                <h2>{ props.value }{ props.unit }</h2>
                <div>{ props.type }</div>
            </div>
        </div>
    )
}

export default InfosBloc;