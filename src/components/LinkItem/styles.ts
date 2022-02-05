import styled, { keyframes } from "styled-components";

const slideL = keyframes`
  from{
    transform: translateY(10px);
  }
  to{
    transform: translatey(0px);
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  transition: transform 0.7s;
  animation: ${slideL} 1s;

  .copy-button {
    flex: 1;
    display: flex;
    align-items: center;
    text-align: left;
    border: none;
    border-radius: 6px;
    padding: 10px;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.15);

    svg {
      margin-right: 5px;
    }
  }

  .delete-button{
      background-color: transparent;
      border: none;
      margin-left: 6px;
  }

  &:hover{
    transform: scale(1.01);
  }
`;
