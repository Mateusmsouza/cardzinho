solicitationController = require('../controllers/Solicitation');
const path = require('path');

module.exports = (app) => {

  let errorJson = "error:'unexpectedError'";
  let warningCoolDown = "warning:'cooldownNotComplete'";
  app.route("/cartao")
      .get( (req, res) => {   
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        const Solicitation = new solicitationController({}, app.get("modelSolicitation"));
        Solicitation.getAll()
                            .then( (allSolicitations =>  {
                              res.status(200).json(allSolicitations);
                                
                            }))
                            .catch(error => res.status(501).json(errorJson).send())
          
      })

      .post( (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        // instance class
        const Solicitation = new solicitationController(req.body, app.get("modelSolicitation"));
        // verify solicitation
        Solicitation.canHaveCredCard();
        // return to home
        Solicitation.checkOldestRegister()
                    .then((registers) => {
                      if (registers.length == 0){
                        Solicitation.save()
                                    .then( (solicitation) => res.status(200).json(solicitation).send() )
                                    .catch(error => res.status(501).json(errorJson).send())
                      }else res.status(400).json(warningCoolDown).send(); 
                    })
                    .catch(error => res.status(501).json(errorJson).send())
          // save to database and return to view         
      })

      .delete( (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        
        const Solicitation = new solicitationController({}, app.get("modelSolicitation"));
        
        Solicitation.exclude(req.body)
          .then( excluded =>  res.status(200).json(excluded).send())
          .catch(error => res.status(501).json(errorJson).send())
      })

  //home    
  app.get('/', (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
        res.sendFile(path.join(__dirname+'/../client/build/index.html'));
      });
};