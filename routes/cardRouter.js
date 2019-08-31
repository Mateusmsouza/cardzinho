module.exports = (app) => {

  app.route("/cartao")
      .get( (req, res) => { 
        res.status(200).send('Aqui existem cartoes');
      })

      .post( (req, res) => {
        res.status(200).json({user: {name: "Mateus"} }).send();
      })

      .delete( (req, res) => {
        res.status(200).json({user: {name: "Mateus"} }).send();
      })
};