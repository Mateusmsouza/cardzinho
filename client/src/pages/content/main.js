import React, {Component} from 'react';

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
        .then( _solicitations => console.log(_solicitations))
    }

    render(){
      const Solicitations = this.state;

      return(

        <div className="solicitations-list">
          
        </div>
      );
    }
}