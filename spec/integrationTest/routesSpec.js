const supertest = require('super-test');
const app = require('../../app.js');

describe("Testing Routes", () => {

	const require = supertest(app);

	describe("GET /Cartao", () => {
		require.get

	});
});