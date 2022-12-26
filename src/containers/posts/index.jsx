import React from 'react';
import { Wrapper, Title, Flex } from '../../components/ui';
import PostCard from '../../components/PostCard';
import Post1 from '../../assets/Post-1.jpg';
import Post2 from '../../assets/Post-2.jpg';
import Post3 from '../../assets/Post-3.jpg';
import Post4 from '../../assets/Post-4.jpg';

const postData=[
    {
        id: 1,
        image: Post1,
        title: "Стабильность и комфорт",
        text: "Функция AVR обеспечивает стабильный уровень напряжения при динамических нагрузках, что дает возможность подключать к нему чувствительные приборы, такие как холодильник, бойлер, насос."

    },
    {
        id: 2,
        image: Post2,
        title: "Время работы и защитные функции",
        text: "Непрерывная работа до 7 часов благодаря воздушному охлаждению двигателя и потреблению топлива 372 г/кВт*ч. Функции:от перегрева генератора;от короткого замыкания;от низкого уровня масла в картере."
    },
    {
        id: 3,
        image: Post3,
        title: "Запуск и обмотка",
        text: "В генераторе используется медная обмотка двигателя, которая позволяет использовать генератор на максимум. Для первого запуска генератора ван нужно менее 5 минут, включая первое обслуживание. Следующий запуск — не более 1 минуты. Он оснащен ручным и электростартером."
    },
    {
        id: 4,
        image: Post4,
        title: "Контроль",
        text: "Он оснащен дополнительным окном для отслеживания уровня топлива в баке. Оснащен цифровым дисплеем, который отображает следующие показатели:напряжение (V);частота переменного тока (Hz);наработанные моточасы «суточные» (Н);наработанные моточасы общие (Н)." 
    }

]

function Posts(){
    return(
        <section>
            <Wrapper relative height = "100%">
                <Title withBorder margin="70px 0 30px">
                    ФУНКЦИИ
                </Title>
                <Flex align="baseline" gap="30px">
                    {postData.map((item) => <PostCard key={item.id} {...item}/>)}
                </Flex>
            </Wrapper>
        </section>
        
    );
}

export default Posts;
