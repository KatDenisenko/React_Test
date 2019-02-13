import React, { Component } from 'react';
import { Modal, Input, Button, Icon } from 'semantic-ui-react';


class FileModal extends Component {

    state={
        file:null,
        fileName:'',
        fileUrl:'',
        path:'',
    }

    addFile=e=>{

         const file = e.target.files[0];
         if (file) {
            const url =URL.createObjectURL(e.target.files[0]);
            const  path=e.target.value;

         this.setState({
             fileName:e.target.files[0].name,
             path:path,
             fileUrl:url,
         })
        }
    }

    saveFile=(e)=>{
        // console.log(this.messagesEnd);
        if(this.state.path) {
            this.props.recordConnectToStore('CSV',this.state.path)
            this.props.tooggleModal()
                // console.log(metadata);
                //  this.props.uploadFile(this.state.file,metadata);
                // this.props.closeModal();
                // this.setState({
                //     file:null,
                // })
        }
        else {
            console.log('File not choosen')
        }
    }

    render() {

        const {showModal, closeModal} = this.props;
        return (
            
            <Modal open={showModal}>
            <Modal.Header>Select File</Modal.Header>
            <Modal.Content>
                <Input
                onChange={this.addFile} fluid  name="file" type="file"/>
            </Modal.Content>
            <Modal.Actions>
                <Button color='teal'  onClick={this.saveFile}>
                <Icon name="checkmark"/> Save
                </Button>
                <Button color='red' onClick={closeModal}>
                <Icon name="remove"/> Cancel
                </Button>
            </Modal.Actions>
            </Modal>
        );
    }
}

export default FileModal;