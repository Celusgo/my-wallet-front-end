import styled from 'styled-components';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Register() {
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    function completeRegistry(e) {
        e.preventDefault();
        setIsDisabled(true);
        if(name.trim().length === 0 || email.length === 0 || password.length < 4){
            alert("Por favor, preencha os campos corretamente.");
            setIsDisabled(false);
            return;
        }
        else if(password !== confirmPassword){
            alert("As senhas não são iguais.");
            setIsDisabled(false);
            return;
        }
        const body = {
            name,
            email,
            password
        }
        const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/register`, body);
        request.then(() => {
            setIsDisabled(false);
            history.push("/");
        });
        request.catch((error)=>{
            alert(error.response.data)
            setIsDisabled(false);
        });       
    }

    return (
        <Container>
            <ContentHolder>
                <h1>MyWallet</h1>
                <form onSubmit={completeRegistry}>
                    <Input
                        placeholder="Nome"
                        disabled={isDisabled}
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        placeholder="E-mail"
                        disabled={isDisabled}
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        placeholder="Senha (mínimo de 4 caracteres)"
                        disabled={isDisabled}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input
                        placeholder="Confirme a senha"
                        disabled={isDisabled}
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button
                        disabled={isDisabled}
                        type="submit"
                    >
                        {isDisabled ? <Loader
                            type="Watch"
                            color="#FFFFFF"
                            height={45}
                            width={100}
                        /> : "Cadastrar"}
                    </Button>
                </form>
                <ToLogin>
                    {isDisabled ? <p className = "opacity">Já tem uma conta? Entre agora!</p> : <Link to="/"><p>Já tem uma conta? Entre agora!</p></Link> }
                </ToLogin>
            </ContentHolder>
        </Container>
    )

}

const Container = styled.div`
    width:100%;
    margin-top:25%;
    box-sizing: border-box;
    display:flex;
    background-color: #8C11BE;
`;

const ContentHolder = styled.div`
    margin:0 auto;
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;

    h1{
        font-family: 'Saira Stencil One';
        font-size:32px;
        color:#FFFFFF;
    }

    form{
        display:flex;
        flex-direction:column;
        width:90%;
        margin-top:28px;
    }
`;

const Input = styled.input`
    box-sizing: border-box;
    margin-top:13px;
    height:58px;
    border-radius: 5px;
    border:none;
    outline:none;
    padding: 19px 0 17px 15px;
    font-family: 'Raleway';
    color: #000000;
    font-size:20px;

    ::-webkit-input-placeholder  { 
        font-family: 'Raleway';
        color: #000000;
        font-size:20px;
    }
    :disabled{
        opacity:0.7;
    }
`;

const Button = styled.button`
    box-sizing:border-box;
    background-color: #A328D6;
    border-radius: 5px;
    margin-top:13px;
    border:none;
    outline:none;
    height:46px;
    font-family:'Raleway';
    color:#FFFFFF;
    font-size:20px;
    font-weight:700;
    :disabled{
        opacity:0.7;
    }
`;

const ToLogin = styled.div`
    margin-top:32px;
    font-family: 'Raleway';
    color:#FFFFFF;
    font-size:15px;
    font-weight: bold;
    p{
        &.opacity{
        color:lightgrey;
    }
}
`;