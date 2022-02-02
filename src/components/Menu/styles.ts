import styled from "styled-components";


export const Container = styled.div`
    width: 90%;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    div{
        display: flex;
        align-items: center;
        margin-right: 10px;

        a{
            margin: 0px 6px;
        }
    }

    .menu-links{
        color: #000;
        font-weight: bold;
        border-radius: 6px;
        padding: 6px 24px;
        text-decoration: none;
        margin-left: 5px;
        background-color: #fff;
    }

`;

