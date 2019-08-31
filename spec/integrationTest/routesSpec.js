const supertest = require('supertest');
const app = require('../../app.js');

describe("Testing Routes", () => {

	const require = supertest(app);

	describe("GET /cartao", () => {
    require.get("/cartao").
                          send()
                          .expect(200)
                          .then(response => {
                            expect(response.text).toEqual(jasmine.any(String))
                          });

  });
  
  describe("POST /cartao", () => {
    let solicitationCard = {
      name:"Mateus",
      lastname:"Souza",
      document: "111111111",
      address: "some street",
      budget: 1000
    }

    require.post("/cartao")
                          .send(solicitationCard)
                          .expect(200)
                          .then(response => {
                            expect(response.body.user.name).toEqual("Mateus");
                          })
  });

  describe("DELETE /cartao", () => {
    
    let solicitationCard = {
      name:"Mateus",
      lastname:"Souza",
      document: "111111111",
      address: "some street",
      budget: 1000
    }

    require.delete("/cartao")
                            .send()
                            .expect(200)
                            .then(response => {
                              expect(response.body.user.name).toEqual("Mateus");
                            })

  })
});