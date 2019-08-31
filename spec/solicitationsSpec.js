const Solicitation = require('../controller/Solicitation');
const User = require('../controller/User');

describe("Testing Solicitation class", () => {

	it("Should create a Solicitation", () => {

		var user = new User("Mateus", "Machado", "11111111", "address", parseInt(Math.random(1, 9999) * 1000), 100);
		var solicitation = new Solicitation(user);
		expect(solicitation.user.name).toEqual("Mateus");
	});

	it("Should verify User score", ()=> {

		var user = new User("Mateus", "Machado", "11111111", "address", parseInt(Math.random(1, 9999) * 1000), 100);
		var solicitation = new Solicitation(user);
		
		expect(solicitation.status) 
	})
});