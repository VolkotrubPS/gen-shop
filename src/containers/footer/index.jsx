import React from 'react'
import { FooterSC, LinkContainer} from './styled'
import { Wrapper, Flex } from '../../components/ui';

import { ReactComponent as Logo } from './../../assets/logo1.svg';
import { ReactComponent as Twitter } from './../../assets/twitter-50.svg';
import { ReactComponent as Facebook } from './../../assets/facebook-50.svg';
import { ReactComponent as Telegram } from './../../assets/telegram-50.svg';


function Footer (){
    return (
        <FooterSC>
            <Wrapper height="100%">
                <Flex height="100%" justify= "space-between">
                    <Logo height = "100px" width= "300"/>
                    <LinkContainer>
                        <a href="http://twitter.com/" rel="noreferrer" target="_blank"><Twitter/></a>
                        <a href="http://www.facebook.com/" rel="noreferrer" target="_blank"><Facebook/></a>
                        <a href="http://web.telegram.org/" rel="noreferrer" target="_blank"><Telegram/></a>
                    </LinkContainer>
                </Flex>
            </Wrapper>

        </FooterSC>
    )
}
export default Footer;