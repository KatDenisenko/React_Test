import React from 'react';
import {Header,Form} from 'semantic-ui-react'
import style from './IpComponent.module.css'


const IpComponent = ({ipValid, ipValue, handlerChangeIp}) => {
    
    return (
        <div className = {style.ipWrapper}>
        <Form>
            {/* onSubmit={ipValidation} */}
        <Header  as='h3' color='grey' textAlign='left'>IP</Header>
        <Form.Input
        // type='number'
        name='ip'
        validName='ipValid'
        value={ipValue}
        onChange = {handlerChangeIp}
        pattern='\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}'
        required
         fluid placeholder='Enter IP in format 1.2.3.4.' />
         {ipValue && ipValid && <p className={style.ipValid}>IP valid</p>}
        {ipValue && !ipValid &&<p className={style.ipNotValid}>Please check your IP, it doesn't valid</p>}
        
         
         </Form>
        </div>
    );
};

export default IpComponent;