solicitationController = require('../controllers/Solicitation');

module.exports = (app) => {

  app.route("/")
          .get((req, res) => res.status(200).send('Volte em breve, amigo. Estamos em desenvolvimento. - Mateus Souza'));

  app.route("/cartao")
      .get( (req, res) => { 
        
        const Solicitation = new solicitationController({}, app.get("modelSolicitation"));
        Solicitation.getAll()
                            .then( (allSolicitations =>  {
                             
                              res.status(200).json(allSolicitations);
                                
                            }))
                            .catch( () => res.status(501).send() )
          
      })

      .post( (req, res) => {
        // instance class
        const Solicitation = new solicitationController(req.body, app.get("modelSolicitation"));
        // verify solicitation
        Solicitation.canHaveCredCard();
        // save to database and return to view
        let obj = {};
        Solicitation.save()
                .then( (solicitation) => res.status(200).json(solicitation).send() )
                .catch(error => res.status(501).json(error).send())               
                   
      })

      .delete( (req, res) => {
        const Solicitation = new solicitationController({}, app.get("modelSolicitation"));
        Solicitation.exclude(req.body)
          .then( excluded =>  res.status(200).json(excluded).send())
          .catch( error => console.log(error) );
       
      })
};