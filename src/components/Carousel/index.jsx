import React, {useState} from "react";

import {Flex} from './../../components/ui';

import {Arrow, SlideBtn, SlideItm, Container, ContainerItem, CarouselTrack } from "./styled";


function Carousel({children, width="670px", height = "502px"}) {
    const [activeSlide, setActiveSlide]= useState(0);
    
    return(
    <div>
        <Container>
            <SlideBtn>
                <Arrow/>
            </SlideBtn>

            <CarouselTrack>

            </CarouselTrack>
            <SlideBtn rotate="true">
                <Arrow/>
            </SlideBtn>
        </Container>
        <Flex width="670px" gap="10px" margin="38px 0 0" wrap="wrap" >

        </Flex>
    </div>

    )
}
export default Carousel;