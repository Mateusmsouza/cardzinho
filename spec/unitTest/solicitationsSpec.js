const Solicitation = require('../../controllers/Solicitation');

describe("Testing Solicitation class", () => {

	it("Should create a Solicitation", () => {
    const data = {name:"Mateus", lastname: "Machado", document: "1111111", address: "someStreetSP", score: parseInt(Math.random(1, 9999) * 1000) , budget: 299}
    
		var solicitation = new Solicitation(data, null);
		expect(solicitation.name).toEqual("Mateus");
	});

	it("Should verify User score", ()=> {

    const data = {name:"Mateus", lastname: "Machado", document: "1111111", address: "someStreetSP", score: 950 , budget: 299}
		var solicitation = new Solicitation(data, null);
		
		expect(solicitation.status).toEqual("pending");
		expect(solicitation.canHaveCredCard()).toBeTruthy(); 
		expect(solicitation.status).toEqual("accepted");
	})
});