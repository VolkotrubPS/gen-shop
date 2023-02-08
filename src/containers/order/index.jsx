import React, {useContext,useState,useEffect} from 'react';

import Modal from 'react-bootstrap/Modal';

import Context from './../../containers/context/context';

import { Wrapper, Title, Flex, Button, Text,Hr } from '../../components/ui';
import {Input, Label} from './styled';





function Order() {
      const [fio, setFio] = useState('');
     const [email, setEmail] = useState('');
     const [tel, setTel] = useState('');
     const [fioDirty, setFioDirty] = useState(false);
     const [emailDirty, setEmailDirty] = useState(false);
     const [telDirty, setTelDirty] = useState(false);
     const [fioError, setFioError] = useState('"ФИО" не может быть пустым');
     const [emailError, setEmailError] = useState('"Email" не может быть пустым');
     const [telError, setTelError] = useState('"Телефон" не может быть пустым');
     const [formValid, setFormValid]=useState(false)
     const [submitError,setSubmitError]= useState('')
     const { power } = useContext(Context);
     const { count} = useContext(Context);
     const { color} = useContext(Context);
     const [show, setShow] = useState(false);


     useEffect(() => {
        if(fioError || emailError || telError){
            setFormValid(false)
        }else{
            setFormValid(true)
        }
        
     }, [fioError,emailError,telError]);


     const emailHandler = (e) =>{
        setEmail(e.target.value)
        const re = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Некоректный E-mail')
           
        }else {
            setEmailError('')
        }
    } 
    
     const isNumber = (e)=>{
        setTel(e.target.value)
        const regV = /^([+]?[0-9\s-\\(\\)]{5,25})*$/i
        if (!regV.test(String(e.target.value).toLowerCase())){
            setTelError('Некоректный Телефон')
           
        }else {
            setTelError('')
        }
     }


     const isFio = (e)=>{
        setFio(e.target.value)
        const regV =/^[a-zA-Zа-яёА-ЯЁ]+$/u
        if (!regV.test(String(e.target.value).toLowerCase())){
            setFioError('Некоректное ФИО')
           
        }else {
            setFioError('')
        }
     }
     
     const blurHandler=(e)=>{
        switch (e.target.name){       
            case 'email':
                setEmailDirty(true)
                break
            case 'fio':
                setFioDirty(true)
                break
            case 'tel':
                setTelDirty(true)
                break
            default:
        }
        }

        
          
          
        const handleClose = () => setShow(false);
        const submitClick = (e) =>{
            if(!formValid){
                setSubmitError('Заполните необходимые данные')
            }else{
                setSubmitError('');
                setShow(true);
              
            }
        }

    

    return(
    <section>
        <Wrapper>
            <Title withBorder="70px 0 30px">
                УСПЕЙ СДЕЛАТЬ ЗАКАЗ
            </Title>
            <Text>
                Успей быть в списке первых, сумевших сделать свой бизнес энергонезависимым 
            </Text>
           
            <Flex direction="column" align="flex-start"  margin = "20px 0 30px">
            <Label><span> ФИО: </span></Label>
            {(fioError && fioDirty) &&<Text size="12px" color="red">
                {fioError }
            </Text>}
            <Input onBlur={e=>blurHandler(e)} onChange={e=>isFio(e)} type="text" name="fio" value={fio} /> 
            <Label><span> E-mail: </span></Label>
            {(emailError && emailDirty) &&<Text size="12px" color="red">
                {emailError }
            </Text>}
                <Input onBlur={e=>blurHandler(e)} onChange={e=>emailHandler(e)} name="email" type="email" value={email} />
                
            <Label><span> Телефон:</span></Label>
            {(telError && telDirty) &&<Text size="12px" color="red">
                {telError}
            </Text>}
                <Input onBlur={e=>blurHandler(e)} onChange={e=>isNumber(e)} name="tel" type="tel" value={tel} />
               
            <Button onClick={e=>submitClick(e)}  type="submit"  width="300px">Оформить заказ </Button>
            {submitError  &&<Text size="12px" color="red">
                {submitError}
            </Text>}
            </Flex>
        </Wrapper>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Проверьте данные заказа</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Text><span>Вы отправляете запрос на модель ALLFUEL EX 7.0 </span></Text>
            <Hr/> 
            <Text><span> ФИО: {fio}</span></Text>
            <Text><span> E-mail: {email}</span></Text>
            <Text><span> Телефон: {tel}</span></Text>
            <Text><span> Цвет: {color}</span></Text>
            <Text><span> Мощность:{power}</span></Text>
            <Text><span> Количество:{count}</span></Text>
            
        </Modal.Body>

        <Modal.Footer>
          <Button  onClick={handleClose}>
            Отправить
          </Button>
          <Button  onClick={handleClose}>
            Отмена
          </Button>
        </Modal.Footer>
      </Modal>
      

    
    </section>
)};

export default Order;