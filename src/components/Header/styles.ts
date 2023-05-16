import styled from "styled-components";

export const HeaderComponent = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  heigth: 50vh;
  width: 100%;
  background-color: ${(props) => props.theme["gray-700"]};

  button {
    border: 0;
    background: none;
    color: white;
    cursor: pointer;
  }

  button::hover{
    color: ${(props) => props.theme['green-100']}
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 1rem;
`;
