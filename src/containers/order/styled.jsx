import styled from 'styled-components';

export const Label = styled.label`
   font-family: Roboto;
    font-size:${({ size }) => (size ? size : '18px') };
    font-weight:${({ weight }) => (weight ? weight : 400) };
    color:${({ color }) => (color ? color : '#282828') };
    padding: ${({ padding }) => (padding ? padding : null) };
    margin: ${({ margin }) => (margin ? margin : '0') };
   ::after{
  content:"*";
  color:red;
} 
`;



export const Input = styled.input`
    width: 380px;
    height: 30px;
    border: 1px solid LightGrey;
    padding: 5px 5px;
    margin: 20px 8px;
    
    
   
    
`;
