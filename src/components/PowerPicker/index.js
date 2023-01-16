import React, {useContext} from 'react';
import {Flex, Text} from './../../components/ui';
import Context from './../../containers/context/context';
import {Label, Input, Checked} from './styled';



function PowerPicker({items}){
    const { power, setPower } = useContext(Context);
    const handleClick = (id) => () => setPower(id);

    return(
        <Flex direction="column" align="flex-start">
            <Text weight={500}>Мощность</Text>
           {items.map((item, index) => (
                <Label first={index === 0} key={item.id}>
                    <Checked checked = {power===item.id}/>
                    <Input
                        name='power'
                        type='radio'
                        value={power === item.id}
                        checked={power === item.id}
                        onChange={handleClick(item.id)}
                    />
                    {item.label}
                </Label>

           ))}
        </Flex>
    )
}
export default PowerPicker