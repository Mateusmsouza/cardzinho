import React, {Component} from 'react';
import RegisterPopup from '../registerPopUp/main';
import './styles.css';


export default class Header extends Component{
  
    state = {
      showPopup: false
    };
  

  showRegisterPopUp() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render(){
      return(
        <header id="Header">
        <div class="header-wrapper">
          <h1>Cardzinho</h1>
          <button onClick={(e) => this.showRegisterPopUp(e)}>Quero um Cardzinho!</button>
        </div>
        {this.state.showPopup ? <RegisterPopup closePopup={(e) => this.showRegisterPopUp(e)} /> : null}
        </header>
      )
    }

}