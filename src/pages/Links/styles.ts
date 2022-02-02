import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`;

export const Area = styled.div`
    max-width: 1120px;
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 32px 10px;
`;

export const HeaderLinks = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 15px;

    svg{
        margin-right: 10px;
    }

    h1{
        color: #fff;
    }
`;

export const ListItem = styled.div`
    width: 100%;
    margin-bottom: 12px;

    button{
       width: 100%;
       display: flex;
       align-items: center;
       border: none;
       border-radius: 6px;
       color: #fff;
       text-align: left;
       padding: 12px;
       font-size: 18px;
       background-color: rgba(255, 255, 255, 0.15);
       transition: transform 0.7s;

       svg{
           margin-right: 12px;
       }

       :hover {
           transform: scale(1.02);
       }
    }

`;