import React, {Component} from 'react';
import Api from '../../services/api';
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

    generateJsonAndSumit = (e) => {
      let body = {
        name: this.state.name,
        lastname:this.state.lastname,
        document: this.state.document,
        address: this.state.address,
        budget: this.state.budget
      }

      e.persist();
      Api.createNewSolicitation(body)
      .then(() => {
        this.props.closePopup(e);
      })
    }

    

    render() {   

      return (

        <div className="blocker" onClick={this.props.closePopup}>
          <div className="blocker__popup">
              <input name="name" value={this.state.name} onChange={this.handler} type="text" placeholder="Nome" className="blocker__input"/>
              <input name="lastname" value={this.state.lastname} onChange={this.handler} type="text" placeholder="Sobrenome" className="blocker__input"/>
              <input name="document" value={this.state.document} onChange={this.handler} type="text" placeholder="Documento" className="blocker__input"/>
              <input name="address" value={this.state.address} onChange={this.handler} type="text" placeholder="Endereço" className="blocker__input"/>
              <input name="budget" value={this.state.budget} onChange={this.handler} type="text" placeholder="Renda" className="blocker__input"/>
              
              <div className="blocker__popup__actions">
                <button className="blocker__done-btn" onClick={(e) => this.generateJsonAndSumit(e)}>Enviar</button>
                <button className="blocker__close-btn" onClick={this.props.closePopup}>Fechar</button>
                
              </div>
          
          </div>
          
        </div>
      );
    }
  }
  