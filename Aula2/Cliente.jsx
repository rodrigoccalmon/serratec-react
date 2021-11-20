import Botao from '../Aula2/Botao';

const Cliente = (props) => {

    return(
        
        <div className="cliente">

        <h1>Dados do cliente:</h1>
        <p>Nome: {props.nome}</p>
        <p>Idade: {props.idade}</p>

        <Botao>Cadastrar</Botao>
        <Botao>Editar</Botao>
        <Botao>Deletar</Botao>

        </div>
    )
}

export default Cliente;