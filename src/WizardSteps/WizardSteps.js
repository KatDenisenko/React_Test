import React, { Component } from 'react'
import {Accordion, Step, Button, Icon, Segment} from 'semantic-ui-react';

import style from './WizardSteps.module.css'
import SelectedOptions from '../SelectedOptions/SelectedOptions';
import DiscoverySource from '../DiscoverySource/DiscoverySource';
import DiscoveryOption from '../DiscoveryOption/DiscoveryOption';
import {connect} from 'react-redux';
import {setContent,removeContent} from '../redux/actions/contentActions';
import {removeSnmpConfig} from '../redux/actions/snmpConfigActions'
import DiscoverModal from '../DiscoverModal/DiscoverModal';

 class WizardSteps extends Component {
 
    state = { 
      activeIndex: 0,
      // sourceCompleted:false,
      showSelectedOptions:false,
      // optionCompleted:false,
      dropdown:'',
      showModal:false,
      ip:'',
      ipValid:'',
      ipStart:'',
      ipStartValid:'',
      ipEnd:'',
      ipEndValid:'',
      clear:false,
      
      }
    
    handlerChange = (e)=>{
        let value = e.target.textContent;
        this.setState({
                dropdown:value,
        })
    }
    handlerChangeIp =async (e)=>{
        // e.preventDefault();
        let value = e.target.value;
        let key = e.target.name; 
       await this.setState({
                [key]:value,
        })
        this.ipValidation(key)
    }

    recordConnectToStore=(inputeType, data)=>{
      let content={};
      if (inputeType==='IP') {
        content.inputType=inputeType;
        content.ipAddress=data;
        return  this.props.setContent(content);
      }
      else if (inputeType==='IP Range') {
        
        const{ipStartValid,ipEndValid}=data;
        content.inputType=inputeType;
        content.startIPAddress=ipStartValid;
        content.endIPAddress=ipEndValid;
        return  this.props.setContent(content);
      }
      else if (inputeType==='CSV') {
        content.inputType=inputeType;
        content.path=data;
        return this.props.setContent(content);
      }
    }

    handleClick = (e, titleProps) => {
    //   const { index } = titleProps;
    //   const { activeIndex } = this.state
          const newIndex = this.state.activeIndex === titleProps.index ? -1 : titleProps.index
        this.setState({ 
        activeIndex: newIndex,
      })
    }

    clearFunc=()=>{
        this.setState(prev=>({
            dropdown:'',
            ip:'',
            ipValid:'',
            ipStart:'',
            ipStartValid:'',
            ipEnd:'',
            ipEndValid:'',
            path:'',
            clear:!prev.clear,
            showSelectedOptions:false,
            // sourceCompleted:false,
        }))
        //remove store here
        this.props.removeContent();
        this.props.removeSnmpConfig();
    }
    tooggleModal=()=>{
        this.setState(prev=>({
            showModal:!prev.showModal,
        }))
    }
    closeModal=()=>{
      this.setState(prev=>({
        showModal:!prev.showModal,
        path:'',
        sourceCompleted:false,
    }))
    }
   
    ipValidation= (key)=> {
      
      let regEx = /^(((1?[1-9]?|10|2[0-4])\d|25[0-5])($|\.(?!$))){4}$/gm;
      let ipValid=this.state[key];
      let data={};
      // console.log(ipValid);
      if (this.state[key]) {
          if (ipValid.match(regEx)) {
              if (key==='ip') {
                this.setState({
                  ipValid:ipValid,
                  sourceCompleted:true,
                  ipStart:'',
                  ipEnd:'',
                  clear:false,
                })
                this.recordConnectToStore('IP',ipValid)

                // console.log('Ip valid')
              }
              else if (key==='ipStart') {
                let copy = ipValid;
                let arr = copy.split('.');
                let poped = arr.pop();
                let string = arr.join('.');
              //  console.log(string);
               
                this.setState({
                  ipStartValid:ipValid,
                  ipEnd:string,
                  ipEndValid:'',
                  ip:'',
                  ipValid:'',
                  path:''
                })
                // data.ipStartValid=ipValid;
                console.log(data);
                if(data.ipStartValid && data.ipEndValid){
                  this.recordConnectToStore('IP Range',data)
                }
                
                // console.log('ipStart valid')
              } 
              else if (key==='ipEnd') {
                let arrStart = this.state.ipStartValid.split('.')
                // console.log(arrStart);
                let arrEnd =ipValid.split('.')
                // console.log(arrEnd);
                if (+arrStart[0]===+arrEnd[0]&&+arrStart[1]===+arrEnd[1]&&
                    +arrStart[2]===+arrEnd[2]&&+arrStart[3]<+arrEnd[3]) {
                      // console.log('ipEnd valid');
                      data.ipEndValid=ipValid;
                      data.ipStartValid=this.state.ipStartValid;
                      console.log(data);
                      if(data.ipStartValid && data.ipEndValid){
                        this.recordConnectToStore('IP Range',data)
                      }
                      this.setState({
                        ipEndValid:ipValid,
                        clear:false,
                        
                        // sourceCompleted:true,
                }) 
                    }
                    else {
                      this.setState({
                        ipEndValid:'',
                        // sourceCompleted:false,
                })
                      // console.log('ipEnd not valid');
                    }
              }
            }
          else {
            if (key==='ip') {
              this.setState({
                ipValid:'',
                // sourceCompleted:false,
              })
              // console.log(`Ip doesn't valid`)
            }
            else if (key==='ipStart') {
              this.setState({
                ipStartValid:'',
                ipEnd:'',
                // sourceCompleted:false,
              })
              // console.log(`ipStart doesn't valid`)
            } 
            else if (key==='ipEnd') {
              this.setState({
                ipEndValid:'',
                // sourceCompleted:false,
              })
           }
        }
      }
   

}
   


 showSelectedOptions =()=>{
   this.setState(prev=>({
    showSelectedOptions:!prev.showSelectedOptions
   }))
 }

//  discover=()=>{
//    if (this.props.content&&this.props.snmpConfig){
//      let obj={
//        content:{...this.props.content,snmpConfig:this.props.snmpConfig}
//      }
//      let json=JSON.stringify(obj);
//      console.log(json);
//     return json
//    }
//  }
  
    render() {
      const { activeIndex } = this.state
    
      return (  
    <Segment inverted className={style.mainSegmentWrapper}>
    <Accordion  inverted fluid  className={style.AccordionWrapper}>
      <Step.Group className = {style.stepGroupWrapper} widths={2} ordered> 
        <Step background='grey'className = {style.stepWrapper} active={activeIndex === 0} completed={this.props.content.inputType}>
          <Step.Content>
              <Step.Title  className={style.stepTitle}>Discovery source</Step.Title>
          </Step.Content>
              </Step>
              <Step className = {style.stepWrapper} active={activeIndex === 1} completed={this.props.snmpConfig.version}>
              <Step.Content >
          <Step.Title className={style.stepTitle} >Discovery options</Step.Title>
        </Step.Content>
      </Step>
      </Step.Group>
    <div className={style.stepsWrapper}>
        <div className={style.accordionDiscoverySource}>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                <Icon name='dropdown'/>
                Discovery source
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
              <DiscoverySource className = {style.DiscoverySourceWrapper} handlerChange ={this.handlerChange} dropdown={this.state.dropdown} ipValid = {this.state.ipValid} ipValidation ={this.ipValidation} handlerChangeIp ={this.handlerChangeIp} ip={this.state.ip} ipStart ={this.state.ipStart} ipEnd = {this.state.ipEnd} ipStartValid = {this.state.ipStartValid} ipEndValid = {this.state.ipEndValid} path = {this.state.path} tooggleModal = {this.tooggleModal} downLoadFile = {this.downLoadFile} showModal = {this.state.showModal}closeModal ={this.closeModal}recordConnectToStore={this.recordConnectToStore}/>
              
              </Accordion.Content>
        </div>
            
     
        <div className={style.accordionDiscoveryOption}>
            <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                <Icon name='dropdown' />
                    Discovery options
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 1}>
                  <DiscoveryOption  className = {style.DiscoveryOption} showSelectedOptions = {this.showSelectedOptions}/>
                  </Accordion.Content>
          </div>
      </div>
    </Accordion>
         
            {this.state.showSelectedOptions&&<SelectedOptions clear={this.state.clear}/>}
            <div className={style.buttonsWrapper}>
                <Button  floated='left' onClick={this.clearFunc}>Clear</Button>
                <DiscoverModal discover={this.discover}/>
            </div>
            
            
       </Segment>
 )
    }
}

function MSTP (state) {
  return {
      content:state.content,
      snmpConfig:state.snmpConfig,
  }
}

function MDTP (dispatch) {
  return {
    setContent: function (data){
          dispatch(setContent(data))
      },
      removeContent:function(){
        dispatch(removeContent())
      },
      removeSnmpConfig:function(){
        dispatch(removeSnmpConfig())
      }
  }
}

export default connect(MSTP, MDTP) (WizardSteps);