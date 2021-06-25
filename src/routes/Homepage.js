import styled from 'styled-components';
import axios from 'axios';
import { useState, useContext, useEffect } from 'react';
import UserContext from '../contexts/UserContext';
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { useHistory } from 'react-router-dom';
import Loading from '../assets/Loading';

export default function Homepage() {
    const { user } = useContext(UserContext);
    const history = useHistory();
    const [transactions, setTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        const request = axios.get("http://localhost:4000/homepage", config);
        request.then(response => {
            setTransactions(response.data);
            setIsLoading(false);
        });
        request.catch((error) => {
            alert(error.response.data);
            history.push("/");
        });
    }, [user.token, user.id, history]);

    function completeLogout() {
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        const request = axios.post("http://localhost:4000/logout", {}, config);
        request.then(() => {
            localStorage.clear();
            history.push("/");
        });
        request.catch((error) => {
            alert(error.response.data);
            history.push("/");
        });
    }

    return (
        <Container>
            <ContentHolder>
                <PageTitle>
                    <h1>Olá, {user.nome}</h1>
                    <IoExitOutline
                        fontSize="25"
                        color="#FFFFFF"
                        onClick={completeLogout}
                    />
                </PageTitle>
                <TransactionsHolder>
                    {isLoading
                        ? <Loading />
                        : transactions.length === 0
                            ? <NoTransactions>
                                Não há registros de entrada ou saída
                            </NoTransactions>
                            : <>
                                <div className="scroller">
                                    {transactions[0].map((each) =>
                                        <EachTransaction>
                                            <div className="leftside">
                                                <DateHolder>
                                                    {each.data}
                                                </DateHolder>
                                                <NameHolder>
                                                    {each.nomeTransacao}
                                                </NameHolder>
                                            </div>
                                            {each.saida === 0
                                                ? <GreenSpan>{(each.entrada / 100).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</GreenSpan>
                                                : <RedSpan>{(each.saida / 100).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</RedSpan>}
                                        </EachTransaction>
                                    ).reverse()}
                                </div>
                                <AccountBalance>
                                    <p>Saldo</p> {transactions[1] < 0
                                        ? <RedSpan>{(transactions[1] / 100).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</RedSpan>
                                        : <GreenSpan>{(transactions[1] / 100).toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</GreenSpan>}
                                </AccountBalance>
                            </>
                    }
                </TransactionsHolder>
                <ButtonsHolder>
                    <TransactionButton onClick={() => history.push("/newincome")}>
                        <IoIosAddCircleOutline
                            fontSize="22"
                            color="#FFFFFF"
                        />
                        <p>Nova entrada</p>
                    </TransactionButton>
                    <TransactionButton onClick={() => history.push("/newoutgoing")}>
                        <IoIosRemoveCircleOutline
                            fontSize="22"
                            color="#FFFFFF"
                        />
                        <p>Nova saída</p>
                    </TransactionButton>
                </ButtonsHolder>
            </ContentHolder>
        </Container >
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
    display:flex;
    flex-direction: column;
    margin-top:22px;
    height:446px;
    width:90%;
    background-color:#FFFFFF;
    padding:10px 12px 10px 12px;
    justify-content: space-between;
    border-radius: 5px;
    .scroller{
        overflow-y: scroll;
        margin-bottom:25px;
    }
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

const EachTransaction = styled.div`
    box-sizing:border-box;
    display:flex;
    width:100%;
    justify-content: space-between;
    align-items: center;
    margin-top:20px;
    .leftside{
        display: flex;
        width:100%;
    }
`;

const DateHolder = styled.div`
    font-family: 'Raleway';
    font-size: 16px;
    color: #C6C6C6;
    font-weight: 400;
`;

const NameHolder = styled.div`
    font-family: 'Raleway';
    font-size: 16px;
    color:#000000;
    margin-left:10px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-hyphens: auto;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    hyphens: auto;
    text-overflow: ellipsis;
    width:70%;
`;

const GreenSpan = styled.span`
    font-family: 'Raleway';
    font-size: 16px;
    text-align: right;
    color: #03AC00;
`;

const RedSpan = styled.span`
    font-family: 'Raleway';
    font-size: 16px;
    text-align: right;
    color: #C70000;
`;

const AccountBalance = styled.div`
    display:flex;
    justify-content: space-between;
    font-family: 'Raleway';
    font-size: 17px;
    color: #000000;
    p{
        font-weight: bold;
    }
`;