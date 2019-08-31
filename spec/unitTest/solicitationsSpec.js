const Solicitation = require('../../controllers/Solicitation');
const User = require('../../controllers/User');

describe("Testing Solicitation class", () => {

	it("Should create a Solicitation", () => {
    const data = {name:"Mateus", lastname: "Machado", document: "1111111", address: "someStreetSP", score: parseInt(Math.random(1, 9999) * 1000) , budget: 299}
    const user = new User(data, null);
		var solicitation = new Solicitation(user);
		expect(solicitation.user.name).toEqual("Mateus");
	});

	it("Should verify User score", ()=> {

    const data = {name:"Mateus", lastname: "Machado", document: "1111111", address: "someStreetSP", score: 950 , budget: 299}
		var solicitation = new Solicitation(new User(data, null));
		
		expect(solicitation.status).toEqual("pending");
		expect(solicitation.verify()).toBeTruthy(); 
		expect(solicitation.status).toEqual("accepted");
	})
});