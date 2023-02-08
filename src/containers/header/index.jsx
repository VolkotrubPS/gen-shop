import React from 'react'
import { Wrapper, Flex, Button} from './../../components/ui'
import { HeaderSC, Absolute, HeaderText } from './styled';
import { ReactComponent as Logo } from './../../assets/logo1.svg';
function scrollWin(){ 
    window.scrollTo({
        top: 3000,
        left: 0,
        behavior: 'smooth'
      })}
function Header(){
    return(
        <HeaderSC>
            <Wrapper relative height = "100%" >
                <Flex padding = "24px 0 0">
                    <Logo height = "150px"/>
                </Flex>
            
                <Absolute>
                    <HeaderText red weight={700}>НОВЫЙ</HeaderText>
                    <HeaderText>экономичный</HeaderText>
                    <HeaderText size ="71px" weight={900} space="30px">GX 6000 ElGen</HeaderText> 
                    <Button onClick={scrollWin}>оформить заказ</Button>   
                </Absolute>
            </Wrapper>
        </HeaderSC>
    )
};

export default Header;