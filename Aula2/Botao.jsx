import { BotaoEstilo } from "./Styles";

const Botao = (props) => {
    
    const showMessage = () => {
        alert('Clicou em: cadastrar, editar, ou deletar');
    }

    return(
        <BotaoEstilo
        onClick={showMessage}
        >
        {props.children}
        </BotaoEstilo>
    )
}

export default Botao;