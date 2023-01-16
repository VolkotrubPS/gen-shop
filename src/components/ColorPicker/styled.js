import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background: ${({color}) => (color ? color : "#282828")};
    border: 2px white solid;
    box-shadow: 0px 0px 8px 2px ${({active}) => active ? "black": "grey"}

`;