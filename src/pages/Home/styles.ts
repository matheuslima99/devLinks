import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 170px;
  }

  h1 {
    font-size: 50px;
    color: #fff;
  }

  span {
    color: #fff;
    font-size: 16px;
    margin: 10px 0 16px 0;
  }

  @media (max-width: 650px) {
    img {
      width: 130px;
    }

    h1 {
      font-size: 40px;
    }

    span {
      font-size: 14px;
    }
  }

  @media (max-width: 450px) {
    img {
      width: 110px;
    }
  }
`;

const slideY = keyframes`
  from{
    transform: translateY(90px)
  } 
  to{
    transform: translateY(0px)
  }
`

export const InputArea = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 15px 0;
  animation: ${slideY} 2s;

  div {
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    border-radius: 6px;
    margin-bottom: 12px;
    padding: 4px 4px 4px 8px;
    background-color: rgba(255, 255, 255, 0.15);
  }

  input {
    flex: 1;
    height: 100%;
    font-size: 16px;
    color: #fff;
    border: none;
    outline: none;
    margin-left: 10px;
    background: transparent;

    ::placeholder {
      color: rgba(255, 255, 255, 0.35);
    }
  }

  button {
    width: 100%;
    height: 45px;
    font-size: 16px;
    font-weight: bold;
    color: #000;
    border: none;
    border-radius: 6px;
    outline: none;
    transition: transform 0.7s;

    :hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 650px) {
    width: 90%;
  }
`;

