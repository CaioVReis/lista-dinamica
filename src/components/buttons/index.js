import Icon from "../icons"


const AddButton = ({onClick}) =>{
    return(
    <button className=" w-15 h-15" onClick={onClick}>
        <Icon icon="Adicionar" />
    </button>
    )
}

const RemoveButtons = ({onClick}) =>{
    return(
    <button className=" w-15 h-15 mt-2 -ml-4" onClick={onClick}>
<Icon  icon="Remover"/>
    </button>
    )
}

const ChekedButton = ({onClick}) =>{
    return(
        <button className="-mt-2"onClick={onClick} >          
            <Icon icon="Feito"/>
        </button>
    )
}


const TrashButton = ({onClick}) =>{
    return(
        <button className="-mt-2" onClick={onClick}>
            <Icon icon="Lixo"/>
        </button>

    )
}


export default AddButton
export{
    RemoveButtons,
    ChekedButton,
    TrashButton
}