class User{
    constructor(name, lastname, document, address, score, budget){
        this.name = name;
        this.lastname = lastname;
        this.document = document;
        this.address = address;
        this.score = score;
        this.budget = budget; 
        this.credit = null;      
    }

    CanHaveCredCard(){
       if(this.score > 299 && this.score < 600){
            this.credit = 1000;
            return true;
        }
        else if(this.score > 599 && this.score < 800){
            // 600 a 799, 50% da renda informada, valor mínimo R$1000,00 
            this.credit = this.budget / 2 > 1000 ? this.budget / 2 : 1000; 
            return true;
        }else if(this.score > 799 && this.score < 951){
            // 800 a 950, 200% da renda informada
            this.credit = this.budget * 2;
            return true;
        }else if(this.score > 950 && this.score < 1000){
            // 951 a 999	Sem limites, considerar R$ 1.000.000
            this.credit = 1000000;
            return true;
        }
        return false;
    }
}

module.exports = User;