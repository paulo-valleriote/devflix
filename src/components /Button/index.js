import styled from 'styled-components';

// Caso seja necessário usar o Link como padrão é só trocar para styled(Link)`content`
const Button = styled.button`
        
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    background-color: transparent;

    &:hover,
    &:focus {
        opacity: .5;
    };
`;

export const ConfirmButton = styled(Button).attrs({ type: 'submit' })`
  border: none;
  margin-right: 30px;
  margin-bottom: 30px;
  background-color: var(--primary);
`;

export const ResetButton = styled(Button).attrs({ type: 'reset' })`
  color: var(--black);
  background-color: var(--grayDarker);
  border: none;
`;

export default Button;
