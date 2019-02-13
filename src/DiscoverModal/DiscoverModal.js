import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import {connect} from 'react-redux';
import style from './DiscoverModal.module.css'

class DiscoverModal extends Component {

    state={
        data:{},
    }
    discover=()=>{
        if (this.props.content&&this.props.snmpConfig){
          let obj={
            content:{...this.props.content,snmpConfig:this.props.snmpConfig}
          }     
          this.setState({
            data:{...obj}
        })
      }
      }

    render() {
        return (
        <Modal className={style.discoverModalWrapper} trigger={<Button floated='right' color='teal' onClick={this.discover}>Discover</Button>}>
            <Modal.Content>
              <Modal.Header as='h3'>Data result</Modal.Header>
                <Modal.Description>
                  {/* {this.props.content.inputType&&this.props.snmpConfig.version} */}
                  {this.props.content.inputType&&this.props.snmpConfig.version?
                  <pre>{JSON.stringify(this.state.data,null,'\t')}</pre>
                  :<p className={style.errorMessage}>Please check all fields, some fields are empty...</p>}
                
              </Modal.Description>
            </Modal.Content>
        </Modal>
        );
    }
}

function MSTP (state) {
    return {
        content:state.content,
        snmpConfig:state.snmpConfig,
    }
  }

export default connect (MSTP, null) (DiscoverModal);