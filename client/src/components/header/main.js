import React, {Component} from 'react';
import RegisterPopup from '../registerPopUp/main';
import './styles.css';


export default class Header extends Component{
  
    state = {
      showPopup: false
    };
  

  showRegisterPopUp(e) {
    console.log('entrou');
    let hasClass = e.target.classList.contains.bind(e.target.classList);
    let isClosingElement = hasClass('blocker') || hasClass('blocker__close-btn');
    let isOpenningButton = hasClass('header__open-popup');
    
    if(isClosingElement || isOpenningButton) {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
  }
  render(){
      return(
        <header id="Header">
        <div class="header-wrapper">
          <h1>Cardzinho</h1>
          
          </div>
        
        </header>
      )
    }

}