import React, {Component} from 'react';
import './styles.css';

export default class Popup extends Component {
    constructor(props){
      super(props);
      this.state = {
          name:'',
          lastname:'',
          document:'',
          address:'',
          budget:''
      };
    
      this.handler = this.handler.bind(this);
    }
 
    handler(e){
      this.setState({[e.target.name]: e.target.value});   
    }

    sendServer = (body) => {
      fetch('http://cardzinho.herokuapp.com/cartao', {method: 'POST', body: body, headers: {'Content-Type': 'application/json'},} )
      .then(retorno => this.getSolicitations())
    }

    generateJsonAndSumit = () => {
      
      let body = {
        name: this.state.name,
        lastname:this.state.lastname,
        document: this.state.document,
        address: this.state.address,
        budget: this.state.budget
      }
      this.sendServer(body);
    }

    

    render() {   

      return (

        <div className="blocker">
          <div className="blocker__popup">
          <input name="name" value={this.state.name} onChange={this.handler} type="text" placeholder="Nome" className="blocker__input"/>
          <input name="lastname" value={this.state.lastname} onChange={this.handler} type="text" placeholder="Sobrenome" className="blocker__input"/>
          <input name="document" value={this.state.document} onChange={this.handler} type="text" placeholder="Documento" className="blocker__input"/>
          <input name="address" value={this.state.address} onChange={this.handler} type="text" placeholder="Endereço" className="blocker__input"/>
          <input name="budget" value={this.state.budget} onChange={this.handler} type="text" placeholder="Renda" className="blocker__input"/>
          
          <button onClick={this.props.closePopup}>Close</button>
          <button onClick={this.generateJsonAndSumit}>Test</button>
          </div>
          
        </div>
      );
    }
  }
  