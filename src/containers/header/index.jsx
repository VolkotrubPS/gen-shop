import React from 'react'
import { Wrapper, Flex, Button,Text} from './../../components/ui'
import { HeaderSC, Absolute, HeaderText } from './styled';
import { ReactComponent as Logo } from './../../assets/logo1.svg';

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
                    <Button>оформить заказ</Button>   
                </Absolute>
            </Wrapper>
        </HeaderSC>
    )
};

export default Header;