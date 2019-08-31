class Solicitation{

	constructor(user){
		this.user = user;
		this.date = Date();
		this.status = "pending";
	}
}

module.exports = Solicitation;