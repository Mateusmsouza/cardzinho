userController = require('../controllers/User');
solicitationController = require('../controllers/Solicitation');

module.exports = (app) => {

  app.route("/cartao")
      .get( (req, res) => { 
        res.status(200).send('Aqui existem cartoes');
      })

      .post( (req, res) => {
        /*const user = new user(req, app.get("modelUser"))
        const Solicitation = new solicitationController(  )*/
        res.status(200).send();
      })

      .delete( (req, res) => {
        res.status(200).json({user: {name: "Mateus"} }).send();
      })
};