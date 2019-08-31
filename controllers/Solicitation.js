class Solicitation{

	constructor(user){
		this.user = user;
		this.date = Date();
		this.status = "pending";
	}

	verify(){
		let _qualify = (bool) => bool ? this.status = "accepted" : this.status = "rejecteds";
		let status = this.user.canHaveCredCard();

		_qualify(status);
		return status;
	}

}

module.exports = Solicitation;