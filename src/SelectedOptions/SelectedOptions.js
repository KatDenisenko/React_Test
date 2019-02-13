import React, { Component } from 'react';
import {Accordion, Form,Checkbox, Icon, Segment, Header} from 'semantic-ui-react'
import Authentication from '../Authentication/Authentication';
import style from './SelectedOptions.module.css';

class SelectedOptions extends Component {
    state = {
        activeIndex: 0,
    }
    handleChange = (e, { value }) => this.setState({ value })

    handleChangeInput = (e)=>{
        
        let value = e.target.value;
        let key = e.target.name;
               
        this.setState({
                [key]:value,
        })
       
       
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
          if (this.props.clear) {
              this.setState({
                readCommunity:'',//
                value:'',
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
        const { activeIndex } = this.state
      return (
          <Accordion fluid inverted className={style.borderWrapper}>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
              <Icon name='dropdown' />
              Selected options
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
              <Segment inverted>
                  <Header as='h3' color='blue' textAlign='left'>SNMP version</Header>
                    <Form inverted>
                      <Form.Group inline widths='equal'>
                          <Form.Field>
                            <Checkbox
                              radio
                              label='v1'
                              name='checkboxRadioGroup'
                              value='v1'
                              checked={this.state.value === 'v1'}
                              onChange={this.handleChange}
                            />
                          </Form.Field>
                          <Form.Field>
                            <Checkbox
                              radio
                              label='v2'
                              name='checkboxRadioGroup'
                              value='v2'
                              checked={this.state.value === 'v2'}
                              onChange={this.handleChange}
                            />
                          </Form.Field>
                          <Form.Field>
                            <Checkbox
                              radio
                              label='v3'
                              name='checkboxRadioGroup'
                              value='v3'
                              checked={this.state.value === 'v3'}
                              onChange={this.handleChange}
                            />
                        </Form.Field>    
                      </Form.Group>
                    </Form>
                {this.state.value?
                <Segment inverted>
                  <Form inverted>
                    <Form.Field>
                      <Form.Input 
                        fluid label='Read community' 
                        placeholder='Read community'
                        name = 'readCommunity'
                        value ={this.state.readCommunity}
                        onChange={this.handleChangeInput}/>
                    </Form.Field>
                  </Form>
                      {this.state.value==='v3'&& 
                      <Authentication clear = {this.props.clear} optionCompletedFunc={this.props.optionCompletedFunc} readCommunity = {this.state.readCommunity} version = {this.state.value}/>}
                </Segment>
                  :null
                }
              
                </Segment>
        </Accordion.Content>
        </Accordion>
        
      )
    }
}

export default SelectedOptions;