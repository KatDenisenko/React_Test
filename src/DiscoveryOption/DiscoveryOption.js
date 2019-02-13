import React from 'react';
import {Form,} from 'semantic-ui-react';
import style from './DiscoveryOption.module.css';

const DiscoveryOption = ({showSelectedOptions}) => {
    return (
           <div className={style.checkboxesWrapper}> 
                {/* className={style.checkboxesWrapper} */}
                <Form.Group grouped>
     
      <Form.Field label='SNMP' control='input' type='checkbox'  onClick = {showSelectedOptions} />
      <Form.Field label='Link' control='input' type='checkbox' />
      <Form.Field label='VLAN' control='input' type='checkbox' />
      <Form.Field label='PORTS' control='input' type='checkbox' />
    </Form.Group>
            {/* <Checkbox className={style.checkBox} label='SNMP' onClick = {showSelectedOptions} />
            <Checkbox label='Link' />
            <Checkbox label='VLAN' />
            <Checkbox label='PORTS' /> */}
          </div> 
    );
};

export default DiscoveryOption;