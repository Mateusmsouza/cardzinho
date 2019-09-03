import React, {Component} from 'react';
//import Popup from './popup';
import './styles.css';

class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
        <h1>this.props.text</h1>       
        <button onClick={this.props.createPopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default class Header extends Component{
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });

  render(){

    return(
      <header id="Header">
      <div class="header-wrapper">
        <h1>Cardzinho</h1>
        <button onClick={this.togglePopup.bind(this)}>show popup</button>
        <button onClick={(e) => this.createPopup(e)}>Quero um Cardzinho!</button>
      </div>
      {this.state.showPopup ? 
        <Popup
          text='Close Me'
          closePopup={this.togglePopup.bind(this)}
        />
        : null
      }
      </header>
    )
  }
}