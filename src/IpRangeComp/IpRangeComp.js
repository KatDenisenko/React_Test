import React from 'react';
import {Input, Header} from 'semantic-ui-react';
import style from './IpRangeComp.module.css'

const IpRangeComp = ({ipStartValid, ipEndValid,ipStart, ipEnd, handlerChangeIp}) => {
    return (
        <div className={style.IpRangeCompWrapper}>
            
            <Header color='grey' as='h3' textAlign='left'>Starting IP Address</Header>
            <Input 
            fluid placeholder='Enter IP in format 1.2.3.4.' 
            name = 'ipStart'
            value={ipStart}
            onChange={handlerChangeIp}
            />
            {ipStart && ipStartValid && <p className={style.ipValid}>Starting IP is valid</p>}
            {ipStart && !ipStartValid &&<p className={style.ipNotValid}>Please check your Starting IP Address, it doesn't valid</p>}

            <Header color='grey' as='h3' textAlign='left'>Ending IP Address</Header>
            <Input 
            fluid placeholder='Enter IP in format 1.2.3.4.' 
            name = 'ipEnd'
            value={ipEnd}
            onChange={handlerChangeIp}/>
            {ipEnd && ipEndValid && <p className={style.ipValid}>Ending IP is valid</p>}
            {ipEnd && !ipEndValid &&<p className={style.ipNotValid}>Please check your Ending IP, it doesn't valid</p>}
        </div>
    );
};

export default IpRangeComp;