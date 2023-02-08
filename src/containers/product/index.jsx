import React from 'react';
import {Wrapper, Flex, Text, Hr, Button, Title} from "./../../components/ui"
import Carousel from "./../../components/Carousel";
import ColorPicker from "./../../components/ColorPicker";
import PowerPicker from "./../../components/PowerPicker";
import CountPicker from "./../../components/CountPicker";

import Image1 from '../../assets/Post-1.jpg';
import Image2 from '../../assets/Post-2.jpg';
import Image3 from '../../assets/Post-3.jpg';
import Image4 from '../../assets/Post-4.jpg';
import Image5 from '../../assets/Post-5.jpg';
import Image6 from '../../assets/Post-6.jpg';
import Image7 from '../../assets/Post-7.jpg';
import Image8 from '../../assets/Post-8.jpg';

const colors = [
    {
        id: 1,
        color: "#E6110C",
    },
    {
        id:2,
        color: "#FFA500"
    },
    {
        id: 3,
        color: "#282828"
    },
];

const powers = [
    {
        id: 1,
        label: "Base (2kW)"
    },
    {
        id: 2,
        label: "Optimal (4.5kW)"
    }
];
const images = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8
    ]
    function scrollWin(){ 
    window.scrollTo({
        top: 3000,
        left: 0,
        behavior: 'smooth'
      })}
function Product(){
    
    return(
        <section>
            <Wrapper>
                <Title withBorder margin= "70px 0 30px">
                    ОБНОВЛЕННАЯ МОДЕЛЬ
                </Title>
                <Text>
                Генератор мощностью 7 кВт, которой хватит для освещения большого частного дома,
                 а также одновременного подключения: до 12 бытовых электроприборов в зависимости от
                  пусковой мощности, или же 6 единиц электроинструмента. 
                Оборудование совместимо со сварочным аппаратом, подходит для коммерческих предприятий.
                </Text>
                <Flex gap = "30px">
                    <Flex flex={1}>
                        <Carousel>
                            {images.map((image) => (<img src={image} width="670px" key={image} alt={image} />))}
                        </Carousel>
                    </Flex>
                    <Flex 
                    width="470px"
                    direction="column"
                    align="flex-start"
                    justify="space-between"
                    >
                        <Title withBorder> AllFuel EX 7.0 </Title>
                        <Flex justify="space-between" width="100%" margin="30px 0 20px">
                            <Text weight={500}>2022
                            </Text>
                            <Text weight={500} color= "#858383">model 7288
                            </Text>
                        </Flex>
                        <Text color="#020106" weight={700} size="26px"> $999-$1399
                        </Text>
                        <Hr/>
                        <Text margin="5px 0">
                        Бензиновый генератор (двухрежимный) выдает одинаково высокую мощность в двух режимах: 380 В и 220 В.
                         Это его отличительная черта среди других генераторов. На панели управления расположен селектор, с помощью которого меняется режим работы. 
                         Используя трехфазный генератор, следует учитывать, что мощность равномерно распределяется на все 3 фазы. При этом запрещено допускать 
                         разницу между нагрузками на фазах более 30%.
                        </Text>
                        <Hr/>
                        <Flex width="100%" align="flex-start">
                            <Flex flex={1} justify="flex-start">
                                <ColorPicker items={colors}/>
                            </Flex>
                        
                        <Flex flex={1}>
                            <PowerPicker items={powers}/>
                        </Flex>
                    </Flex>
                    <CountPicker/>
                    <Button onClick={scrollWin}>Оформить заказ</Button>

                    </Flex>
                </Flex>

            </Wrapper>
            </section>
    )
};

export default Product;