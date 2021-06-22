import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function NewOutgoing() {
    const history = useHistory();
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    function sendOutgoing(e){
        e.preventDefault();
        setIsDisabled(true);
        const body = {
            value,
            description
        }
        console.log(body);
        //history.push("/homepage");
        //setIsDisabled(false);
    }


    return (
        <Container>
            <ContentHolder>
                <PageTitle>
                    <h1>Nova saída</h1>
                </PageTitle>
                <form onSubmit = {sendOutgoing}>
                <Input
                        placeholder="Valor"
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
                        /> : "Entrar"}
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
