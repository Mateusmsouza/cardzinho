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
// docker run --name dockerpgsql -e "POSTGRES_PASSWORD=1234" -p 5432:5432 -d postgres