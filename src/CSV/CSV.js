import React from 'react';
import {Button} from 'semantic-ui-react';
import style from './CSV.module.css';
import {connect} from 'react-redux';
import FileModal from '../FileModal/FileModal';

const CSV = ({tooggleModal,recordConnectToStore, downLoadFile,showModal,closeModal,content}) => {
    
  // console.log(this);
    return (
        <div className={style.csv}>
            <Button color='teal' onClick={tooggleModal}>Select a file ...</Button>
            <FileModal recordConnectToStore ={recordConnectToStore} downLoadFile = {downLoadFile} showModal={showModal} tooggleModal={tooggleModal} closeModal={closeModal}/>

             {content && <p className={style.message}>Selected file:{content.path}</p>}
        </div>
    );
};

function MSTP (state) {

  return {
    content:state.content,
  }
}

export default connect(MSTP)(CSV);