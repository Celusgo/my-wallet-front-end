import styled from 'styled-components';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Login() {
    const {setUser} = useContext(UserContext);
    const history = useHistory();
    
    if (localStorage.length !== 0){
        const user = JSON.parse(localStorage.user);
        setUser(user);
        history.push("/homepage");
    }

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    function completeLogin(e) {
        e.preventDefault();
        setIsDisabled(true);
        if(email.length === 0 || password.length < 4){
            alert("Por favor, preencha os campos corretamente.");
            setIsDisabled(false);
            return;
        }
        const body = {
            email,
            password
        }
        const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/login`, body);
        request.then(response => {
            localStorage.setItem('user', JSON.stringify(response.data));
            setIsDisabled(false);
            history.push("/homepage");
        });
        request.catch((error)=>{
            alert(error.response.data);
            setIsDisabled(false);
        });
            
    }

    return (
        <Container>
            <ContentHolder>
                <h1>MyWallet</h1>
                <form onSubmit={completeLogin}>
                    <Input
                        placeholder="E-mail"
                        disabled={isDisabled}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        placeholder="Senha"
                        disabled={isDisabled}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
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
                        /> : "Entrar"}
                    </Button>
                </form>
                <ToRegister>
                    {isDisabled ? <p className = "opacity">Primeira vez? Cadastre-se!</p> : <Link to="/register"><p>Primeira vez? Cadastre-se!</p></Link> }
                </ToRegister>
            </ContentHolder>
        </Container>
    )

}

const Container = styled.div`
    width:100%;
    height:100vh;
    box-sizing: border-box;
    display:flex;
    align-items: center;
    justify-content: center;
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

const ToRegister = styled.div`
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