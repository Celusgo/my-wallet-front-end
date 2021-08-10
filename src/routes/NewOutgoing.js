import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';
import UserContext from '../contexts/UserContext';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import dayjs from 'dayjs';

export default function NewOutgoing() {
    const {user} = useContext(UserContext);
    const history = useHistory();
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    function sendOutgoing(e){
        e.preventDefault();
        setIsDisabled(true);
        if(!user){
            alert("Você não tem permissão para realizar esta ação!");
            setIsDisabled(false);
            history.push("/");
            return;
        }
        if(description.trim().length === 0 || value.length === 0){
            alert("Por favor, preencha os campos corretamente.");
            setIsDisabled(false);
            return;
        }
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        const body = {
            idUser: user.id,
            description,
            value,
            data: dayjs().format('DD-MM')
        }
        const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/newoutgoing`, body, config);
        request.then(() => {
            setIsDisabled(false);
            history.push("/homepage");
        });
        request.catch((error)=>{
            alert(error.response.data);
            setIsDisabled(false);
            history.push("/");
        });
    };


    return (
        <Container>
            <ContentHolder>
                <PageTitle>
                    <h1>Nova saída</h1>
                </PageTitle>
                <form onSubmit = {sendOutgoing}>
                <Input
                        placeholder="Valor (em centavos)"
                        disabled={isDisabled}
                        type="text"
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <Input
                        placeholder="Descrição"
                        disabled={isDisabled}
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
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
                        /> : "Salvar saída"}
                    </Button>
                </form>
            </ContentHolder>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    min-height:100vh;
    box-sizing: border-box;
    display:flex;
    background-color: #8C11BE;
`;

const PageTitle = styled.div`
    width:90%;
    display:flex;
    justify-content: space-between;
    h1{
    font-family: 'Raleway';
    font-weight: bold;
    font-size: 26px;
    color:#FFFFFF;
    }
`;

const ContentHolder = styled.div`
    margin:20px auto;
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;

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
