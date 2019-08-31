class User{
    
    constructor(data, model){
        this.name = data.name;
        this.lastname = data.lastname;
        this.document = data.document;
        this.address = data.address;
        this.budget = data.budget;
        this.model = model 
        this.score = data.score || parseInt(Math.random(1, 9999) * 1000);
        this.credit = null;      
    }

    _setCreditAndReturnTrue(credit){
        this.credit = credit;
        return true;
    }

    canHaveCredCard(){
        let isScoreBetween = (x,y) => this.score > x && this.score < y;

       if(isScoreBetween(299, 600)){
            return this._setCreditAndReturnTrue(1000);
        }
        else if(isScoreBetween(599, 800)){
            // 600 a 799, 50% da renda informada, valor mínimo R$1000,00 
            let credit = this.budget / 2 > 1000 ? this.budget / 2 : 1000;
            return this._setCreditAndReturnTrue(credit);
        }else if(isScoreBetween(799, 951)){
            // 800 a 950, 200% da renda informada
            return this._setCreditAndReturnTrue(this.budget * 2);
        }else if(isScoreBetween(950, 1000)){
            // 951 a 999	Sem limites, considerar R$ 1.000.000
            return this._setCreditAndReturnTrue(1000000)
        }
        return false;
    }

    
}

module.exports = User;