import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Area = styled.div`
  width: 100%;
  max-width: 1120px;
  padding: 32px 10px;
  margin: 0 auto;
`;

export const HeaderLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  svg {
    margin-right: 10px;
  }

  h1 {
    color: #fff;
  }

  @media (max-width: 650px) {
    h1 {
      font-size: 28px;
    }
  }

  @media (max-width: 390px) {
    h1 {
      font-size: 25px;
    }
  }
`;

export const LinksArea = styled.div`
  width: 100%;
`;

const slideL = keyframes`
  from{
    transform: translateY(40px);
  }
  to{
    transform: translatey(0px);
  }
`;


export const NoLinksContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 150px;
  animation: ${slideL} 1s;

  h3 {
    color: #fff;
  }
`;
