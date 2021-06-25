import loading from "../assets/loading.gif";
import styled from "styled-components";

export default function Loading() {
  return (
    <ContainerLoading>
      <img className="loading" src={loading} alt="loading"/>
    </ContainerLoading>
  );
}

const ContainerLoading = styled.div`
  position: relative;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  width:100%;
  height:100%;
  align-items: center;
  justify-content: center;
`;