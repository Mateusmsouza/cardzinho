export default class Api {

  static getAllSolicitations(){
    return fetch('/cartao')
        .then(response => response.json())
        .catch(error => error)
  }

  static createNewSolicitation(body){
    return fetch('/cartao', {method: 'POST', body: JSON.stringify(body), headers: {'Content-Type': 'application/json'},} )
  }

  static deleteSolicitation(id){
    return fetch('/cartao', 
        { 
          method: 'DELETE', 
          body: JSON.stringify({id: id}), 
          headers: {'Content-Type': 'application/json'}
        }
      );
  }
}