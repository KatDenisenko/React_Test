import React from 'react';
import {Dropdown} from 'semantic-ui-react'
import IpComponent from '../IpComp/IpComponent';
import IpRangeComp from '../IpRangeComp/IpRangeComp';
import CSV from '../CSV/CSV';
import style from './DiscoverySource.module.css';

const discoverySourceInfo=[
    {
      text: 'IP',
     value: 'IP',
    },
    {
      text: 'IP Range',
     value: 'IP Range',
    },
    {
      text: 'CSV',
     value: 'CSV',
    },

]
const DiscoverySource = ({handlerChange,dropdown,ipValid,ipValidation, handlerChangeIp, ip, ipStart, ipEnd, ipStartValid, ipEndValid, path, tooggleModal, downLoadFile, showModal,closeModal,recordConnectToStore}) => {
    return (
        <div className={style.DiscoverySourceWrapper}>
           <Dropdown 
           placeholder='Select Source'
           onChange={handlerChange}
           value = {dropdown}
           fluid selection options={discoverySourceInfo}/>

            {dropdown==='IP'?
            <IpComponent ipValid={ipValid} ipValidation ={ipValidation} handlerChangeIp={handlerChangeIp} ipValue={ip}/>:
            dropdown==='IP Range'?
            <IpRangeComp handlerChangeIp={handlerChangeIp} ipStart={ipStart}
            ipEnd = {ipEnd} ipStartValid = {ipStartValid} ipEndValid={ipEndValid}/>:
            dropdown==='CSV'?
            <div className={style.Csv}>
            <CSV  path={path} tooggleModal={tooggleModal} recordConnectToStore ={recordConnectToStore} downLoadFile = {downLoadFile} showModal={showModal}  closeModal={closeModal}/>
            </div>
            :
            <div className = {style.emptyDiv} ></div>}
            {/*  */}

        </div>
    );
};

export default DiscoverySource;