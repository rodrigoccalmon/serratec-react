import styled from "styled-components";

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    
`;
export const BotaoEstilo = styled.button`
    background-color: white;
    color: black;
    width: auto;
    height: auto;    
    border-radius: 50px;
    
`;
export const Form = styled.form`
    background-color: gray;
    color: black;
    width: auto;
    height: auto;
    border-radius: 10px;
    text-align: center;
`;
export const Input = styled.input`
    width: 250px;
    height: 50px;
    margin: 5px;
    border-radius: 10px;
    padding: 10px 5px 5px 5px;

    ${(props) =>
        props.isActive &&`            
            border: 3px solid green;
        `}
`;
export const Button = styled.button`
    width: auto;
    height: auto;
    border-radius: 10px;
`;

