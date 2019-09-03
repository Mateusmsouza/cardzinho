import React, {Component} from 'react';
import './styles.css';

export default class Popup extends Component {
    state = {
        name:'',
        lastname:''
    };

    handler(e){
        console.log(this.props.value)
        console.log(e.target.value)
        console.log(e.target.text)
        this.setState({value: e.target.value});
    }

    render() {
      return (
        <div className="blocker">
          <div className="blocker__popup">
          <input className="blocker__input" placeholder="Nome" value="name" onChange={this.handler.bind(this)}></input>
          <input className="blocker__input" placeholder="Sobrenome"></input>
          <input className="blocker__input" placeholder="Endereço"></input>
          <input className="blocker__input" placeholder="Documento"></input>
          <input className="blocker__input" placeholder="Renda"></input>
          <button onClick={this.props.closePopup}>Enviar</button>
          </div>
          
        </div>
      );
    }
  }
  