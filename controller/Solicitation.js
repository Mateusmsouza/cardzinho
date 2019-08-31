class Solicitation{

	constructor(user){
		this.user = user;
		this.date = Date();
		this.status = "pending";
	}

	verify(){
		return user.canHaveCredCard();
	}

}

module.exports = Solicitation;