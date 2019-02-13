import React, { Component } from 'react';
import style from './App.module.css';
import WizardSteps from './WizardSteps/WizardSteps';




class App extends Component {
  render() {
    return (
      <div className={style.AppWrapper}>
      <WizardSteps/>   
      </div>
    );
  }
}

export default App;
