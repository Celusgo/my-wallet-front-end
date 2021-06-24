import styled from 'styled-components';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { useHistory } from 'react-router-dom';

export default function Homepage() {
    const history = useHistory();
    const {user} = useContext(UserContext);
    const [transactions, setTransactions] = useState([]);
    console.log(user);
    return (
        <Container>
            <ContentHolder>
                <PageTitle>
                    <h1>Olá, {user.nome}</h1>
                    <IoExitOutline
                        fontSize="25"
                        color="#FFFFFF"
                    />
                </PageTitle>
                <TransactionsHolder>
                    {transactions.length === 0
                        ? <NoTransactions>
                            Não há registros de entrada ou saída
                        </NoTransactions>
                        : <NoTransactions>
                            Há transações aqui
                        </NoTransactions>}
                </TransactionsHolder>
                <ButtonsHolder>
                    <TransactionButton onClick = {()=>history.push("/newincome")}>
                        <IoIosAddCircleOutline
                            fontSize="22"
                            color="#FFFFFF"
                        />
                        <p>Nova entrada</p>
                    </TransactionButton>
                    <TransactionButton onClick = {()=>history.push("/newoutgoing")}>
                        <IoIosRemoveCircleOutline
                            fontSize="22"
                            color="#FFFFFF"
                        />
                        <p>Nova saída</p>
                    </TransactionButton>
                </ButtonsHolder>
            </ContentHolder>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    min-height:100vh;
    box-sizing: border-box;
    display:flex;
    flex-direction: column;
    align-items: center;
    background-color: #8C11BE;
`;

const ContentHolder = styled.div`
    margin:20px auto 12px auto;
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;
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

const TransactionsHolder = styled.div`
    box-sizing:border-box;
    margin-top:22px;
    height:446px;
    width:90%;
    background-color:#FFFFFF;
    padding:23px 12px 10px 12px;
`;

const NoTransactions = styled.div`
    height:100%;
    display:flex;
    justify-content: center;
    font-family: 'Raleway';
    font-size: 20px;
    align-items: center;
    color: #868686;
    text-align: center;
`;

const ButtonsHolder = styled.div`
    width:90%;
    display:flex;
    margin-top:13px;
    align-items: center;
    justify-content: space-between;
`;

const TransactionButton = styled.button`
    box-sizing:border-box;
    padding:10px 40% 10px 10px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width: 48%;
    height: 114px;
    background-color: #A328D6;
    border-radius: 5px;
    border:none;
    outline:none;
p{
    font-family: 'Raleway';
    font-weight: bold;
    font-size: 17px;
    color: #FFFFFF;
    text-align: start;
}
`;