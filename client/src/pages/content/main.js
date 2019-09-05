import React, {Component} from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Api from '../../services/api';
import RegisterPopup from '../../components/registerPopUp/main';
import './styles.css';
import '../../components/registerPopUp/main'

export default class Content extends Component{
    
      state = {
        Solicitations: [],
        showPopup: false,
        showMessage: false,
        errorOrWanning:''
      }
  
    componentDidMount(){
      this.getSolicitations();
    }
    // "/"
    getSolicitations = () => {
      Api.getAllSolicitations()
        .then(response => this.setState({Solicitations: response}))
        .catch(() => {
          this.setState({errorOrWanning:'Oops, parece que o servidor está fora do ar :(.'})
          this.setState({showMessage:true});
        })
    }

    deleteSolicitation = (event, id) => {
      Api.deleteSolicitation(id)
        .then(retorno => this.getSolicitations())
    }

    returnInteration(status, limite){
      if (status === "rejected") return "Ops :( Parece que não foi desta vez, tente novamente em cinco minutos";
      return  "Parabéns :) Agora você possui um Cardzinho com limite de "+limite+'.00';
    }
    /*button*/
  showRegisterPopUp(e){
    let hasClass = e.target.classList.contains.bind(e.target.classList);
    let isClosingElement = hasClass('blocker') || hasClass('blocker__close-btn');
    let isOpenningButton = hasClass('header__open-popup')
    let isSubmitButton = hasClass('blocker__done-btn');
    if(isClosingElement || isSubmitButton)this.setState({showPopup: false});
    if(isOpenningButton) this.setState({showPopup: true});
    if(isSubmitButton) this.getSolicitations(); 
  }

  closeMessenger(e){
    // caso exista um erro ou warnning armazenado, será limpado após o uso
    if(this.state.showMessage) this.setState({errorOrWanning:''})
    this.setState({showMessage: false});
  }

  setWarningOrError(e, setWarnOrErr){
    console(e.target)
    console.log("fui ativado")
    console.log(setWarnOrErr);
    this.setState({errorOrWanning:'Parece que você ainda precisa esperar um pouco'});
    this.setState({showMessage: true});
    console.log(this.state.errorOrWanning)
    console.log(this.state.showMessage)
  } 
    render(){

      const {Solicitations} = this.state;
      
      return(

        <div className="solicitations__list">
          <button className="header__open-popup" onClick={(e) => this.showRegisterPopUp(e)}>Quero um Cardzinho!</button>
          
          {this.state.showPopup ? <RegisterPopup closePopup={(e) => this.showRegisterPopUp(e)} openMessage={(e)=>this.setWarningOrError(e)}/> : null}

          {Solicitations.length === 0 ? <p className="solicitations__message">Ops, parece que não há nenhuma solicitação. Você pode criar uma nova clicando no botão acima :]</p>: null}

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
