import React, {Component} from 'react';
import './styles.css'
export default class Content extends Component{
    state = {
      Solicitations: []
    }

    componentDidMount(){
      this.getSolicitations();
    }

    getSolicitations = () => {
      fetch('/cartao')
        .then(response => response.json())
        .then( _solicitations => this.setState({Solicitations: _solicitations}))
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
              <p><strong>Solicitante: </strong>{solicitation.name} {solicitation.lastname}</p>
              <p>Documento: {solicitation.document}</p>
              <p>Endereço: {solicitation.address}</p>
              <p className={solicitation.status+"__p"}>{this.returnInteration(solicitation.status, solicitation.credit)}</p>
              
              
            </article>
          ))}
        </div>
      );
    }
}