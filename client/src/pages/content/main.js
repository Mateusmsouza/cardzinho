import React, {Component} from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Api from '../../services/api';
import RegisterPopup from '../../components/registerPopUp/main';

import './styles.css';
import '../../components/registerPopUp/main'

export default class Content extends Component{
    
      state = {
        Solicitations: [],
        showPopup: false
      }
  
    componentDidMount(){
      this.getSolicitations();
    }
    // "/"
    getSolicitations = () => {
      console.log("Fui Chamado");
      Api.getAllSolicitations()
        .then(response => this.setState({Solicitations: response}))
    }

    deleteSolicitation = (event, id) => {
      Api.deleteSolicitation(id)
        .then(retorno => this.getSolicitations())
    }

    returnInteration(status, limite){
      if (status === "rejected") return "Ops :( Parece que não foi desta vez, tente novamente em uma hora";
      return  "Parabéns :) Agora você possui um Cardzinho com limite de "+limite+'.00';
    }
    /*button*/
  showRegisterPopUp = (e) => {

    console.log(e.target);
    let hasClass = e.target.classList.contains.bind(e.target.classList);
    let isClosingElement = hasClass('blocker') || hasClass('blocker__close-btn');
    let isOpenningButton = hasClass('header__open-popup');
    let isSubmitButton = hasClass('blocker__done-btn');
    
    if(isClosingElement || isOpenningButton || isSubmitButton) {
      if(isSubmitButton) {
        console.log("entrou no atualiza");
        setTimeout(this.getSolicitations(), 3000);
        
      }
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
  }
    
    render(){
      const {Solicitations} = this.state;
      
      return(

        <div className="solicitations__list">
          <button className="header__open-popup" onClick={(e) => this.showRegisterPopUp(e)}>Quero um Cardzinho!</button>
          {this.state.showPopup ? <RegisterPopup closePopup={(e) => this.showRegisterPopUp(e)} /> : null}
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