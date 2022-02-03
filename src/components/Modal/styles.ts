import styled, { keyframes } from "styled-components";

const showModal = keyframes`
  from{
    transform: translateY(30px);
  }
  to{
    transform: translateY(0px);
  }

`;

export const Container = styled.div`
  width: 700px;
  background-color: #fff;
  padding: 20px;
  border-radius: 6px;
  overflow: hidden;
  animation: ${showModal} 1s;

  div {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    color: #a7a7a7;
  }

  @media (max-width: 750px) {
    width: 90%;
  }
`;

export const HeaderModal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0px;

  button {
    border: none;
    outline: none;
    background-color: transparent;
  }
`;

export const ModalLink = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  border-radius: 6px;
  padding 10px;
  color: #fff;
  background-color:#172742;
  margin-top: 10px;
`;
