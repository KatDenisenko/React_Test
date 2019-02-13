
import {Form, Dropdown, Header, Segment,Checkbox} from 'semantic-ui-react'
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setSnmpConfig} from '../redux/actions/snmpConfigActions';
import style from './Authentication.module.css'

class Authentication extends Component {
    state={
        contextName:'',//
        engineId:'',
        checkboxAuthenticationValue:'',
        authenticationPassword:'',
        securityOptions:'',
        readCommunity:this.props.readCommunity,
        version:this.props.version,
    }
    handleChange =async(e)=> {
        
        let key = e.target.name;
        let value = e.target.value;
        await this.setState({
            [key]:value
        })
       
        const {contextName, engineId, checkboxAuthenticationValue, authenticationPassword, securityOptions} = this.state;
       if (contextName&&engineId&&checkboxAuthenticationValue&&authenticationPassword&&this.props.readCommunity) {
           
            let snmpConfig = {
                version: 3,
                snmpv1: null,
                snmpv2: null,
                snmpv3: {
                    readCommunity:this.props.readCommunity,
                    securityOptions: securityOptions,
                    contextName: contextName,
                    contextEngineID: engineId,
                    authenticationAlgorithm: {
                        password: authenticationPassword,
                        code: checkboxAuthenticationValue,
                        },
                    encryptionAlgorithm: {
                        code: "",
                        }
                }
            }
            
            this.props.setSnmpConfig(snmpConfig)
          
        }
    }
    handleChangeCheckBox = (e, { value }) => this.setState({ checkboxAuthenticationValue:value })
    handleChangeDropdown = (e)=>{
        let value = e.target.textContent;
        this.setState({
            securityOptions:value,
        })
    }
    clearFunc=()=>{
        if (this.props.clear) {
            this.setState({
                contextName:'',//
                engineId:'',
                checkboxAuthenticationValue:'',
                authenticationPassword:'',
                securityOptions:'',
            })
        }

    }

    
    componentDidUpdate(prevProps){
        if (prevProps.clear !== this.props.clear) {
            console.log('prevProps', prevProps)
            console.log('thisProps',this.props)
             this.clearFunc()
        }
    }
 
    render() {
        const securityOptions = [
            {
              text: 'Authentication and No Privacy',
              value:'Authentication and No Privacy'
            }]
        return (
        <Segment inverted className={style.borderWrapperSegment}>
            <Form inverted className={style.borderWrapper}>
                <Form.Field>
                <Dropdown 
                onChange={this.handleChangeDropdown}
                value = {this.state.securityOptions}
                fluid selection options={securityOptions} />
                    <Form.Input 
                    required
                    fluid label='Context Name' 
                    placeholder='sample context'
                    name = 'contextName'
                    value ={this.state.contextName}
                    onChange={this.handleChange}/>

                    <Form.Input 
                    required
                    fluid label='Context Engine ID' 
                    placeholder='sample engine'
                    name = 'engineId'
                    value ={this.state.engineId}
                    onChange={this.handleChange}/>
                </Form.Field>
        
                <Header as='h3' textAlign='left'>Authentication algoritm</Header>
        
                <Form.Group inline widths='equal' className={style.borderWrapper}>
                        <Form.Field>
                            <Checkbox
                                radio
                                label='MD5'
                                name='checkboxAuthentication'
                                value='MD5'
                                checked={this.state.checkboxAuthenticationValue === 'MD5'}
                                onChange={this.handleChangeCheckBox}
                                />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox
                                radio
                                label='SHA'
                                name='checkboxAuthentication'
                                value='SHA'
                                checked={this.state.checkboxAuthenticationValue === 'SHA'}
                                onChange={this.handleChangeCheckBox}
                                />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox
                                radio
                                label='HMAC128'
                                name='checkboxAuthentication'
                                value='HMAC128'
                                checked={this.state.checkboxAuthenticationValue === 'HMAC128'}
                                onChange={this.handleChangeCheckBox}
                                />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox
                                radio
                                label='HMAC192'
                                name='checkboxAuthentication'
                                value='HMAC192'
                                checked={this.state.checkboxAuthenticationValue === 'HMAC192'}
                                onChange={this.handleChangeCheckBox}
                                />
                        </Form.Field> 
                        <Form.Field>
                            <Checkbox
                                radio
                                label='HMAC256'
                                name='checkboxAuthentication'
                                value='HMAC256'
                                checked={this.state.checkboxAuthenticationValue === 'HMAC256'}
                                onChange={this.handleChangeCheckBox}
                                />
                        </Form.Field> 
                        <Form.Field>
                            <Checkbox
                                radio
                                label='HMAC384'
                                name='checkboxAuthentication'
                                value='HMAC384'
                                checked={this.state.checkboxAuthenticationValue === 'HMAC384'}
                                onChange={this.handleChangeCheckBox}
                                />
                            </Form.Field>               
                    </Form.Group>
                    <Form.Input 
                        required
                        fluid label='Authentication Password' 
                        placeholder='random password'
                        name = 'authenticationPassword'
                        value ={this.state.authenticationPassword}
                        onChange={this.handleChange}/>
            </Form>
            
      </Segment>
        );
    }
}


function MDTP (dispatch) {
    return {
        setSnmpConfig: function (data){
            dispatch(setSnmpConfig(data))
        }
    }
  }

export default connect(null,MDTP) (Authentication);
