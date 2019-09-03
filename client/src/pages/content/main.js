import React, {Component} from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import './styles.css';

export default class Content extends Component{
    state = {
      Solicitations: []
    }

    componentDidMount(){
      this.getSolicitations();
    }
    // "/"
    getSolicitations = () => {
      fetch('/cartao')
                    .then(response => response.json())
      .then( _solicitations => this.setState({Solicitations: _solicitations}))
      .catch(error => console.log(error))
    }

    deleteSolicitation = (event, id) => {
      fetch('/cartao', {method: 'DELETE', body: JSON.stringify({id: id}), headers: {'Content-Type': 'application/json'},} )
      .then(retorno => this.getSolicitations())
    }

    returnInteration(status, limite){
      if (status === "rejected") return "Ops :( Parece que não foi desta vez, tente novamente em uma hora";
      return  "Parabéns :) Agora você possui um Cardzinho com limite de "+limite+'.00';
    }

    render(){
      const {Solicitations} = this.state;
      
      return(

        <div className="solicitations__list">
          {Solicitations.map(solicitation => (
            // [solicitations__list__item, solicitation.status].join(" ")
            <article className={["solicitations__list__item", solicitation.status].join(" ")} key={solicitation.id}>
              <p className="solicitations__list__item__trash" onClick={ (e) => this.deleteSolicitation(e, solicitation.id)}><FaTrashAlt /></p>
              <p><strong>Solicitante: </strong>{solicitation.name} {solicitation.lastname}</p>
              <p><strong>Documento:</strong> {solicitation.document}</p>
              <p><strong>Endereço:</strong> {solicitation.address}</p>
              <p className={solicitation.status+"__p"}>{this.returnInteration(solicitation.status, solicitation.credit)}</p>
              
              
            </article>
          ))}
        </div>
      );
    }
}