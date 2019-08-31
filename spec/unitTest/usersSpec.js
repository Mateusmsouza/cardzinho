const User = require('../../controller/User');

describe('Testing User Class', ()=>{
    it('Should create a new user', ()=>{
        const user = new User("Mateus", "Machado", "1111111", "someStreetSP", 100);
        expect(user.name).toEqual("Mateus");
        expect(user.lastname).toEqual("Machado");
        expect(user.document).toEqual("1111111");
        expect(user.address).toEqual("someStreetSP");
        expect(user.score).toEqual(100);
    })

    it('Should pass CanHaveCard() method', ()=>{
        const user = new User("Mateus", "Machado", "1111111", "someStreetSP", 299);
        // 1 a 299
        expect(user.canHaveCredCard()).toBeFalsy();
        user.score = 1;
        expect(user.canHaveCredCard()).toBeFalsy();
        //300 a 599
        user.score = 300;
        expect(user.canHaveCredCard()).toBeTruthy();
        user.score = 799;
        expect(user.canHaveCredCard()).toBeTruthy();
        //600 a 799
        user.score = 600;
        expect(user.canHaveCredCard()).toBeTruthy();
        expect(user.credit).toBe(1000);
        user.budget = 3000;
        expect(user.canHaveCredCard()).toBeTruthy();
        expect(user.credit).toBe(1500);
        user.score = 799;
        expect(user.canHaveCredCard()).toBeTruthy();
        // 800 a 950
        user.budget = 100;
        user.score = 800;
        expect(user.canHaveCredCard()).toBeTruthy();
        user.score = 950;      
        expect(user.canHaveCredCard()).toBeTruthy();
        expect(user.credit).toBe(200);
        // 951 a 999
        user.score = 951;
        expect(user.canHaveCredCard()).toBeTruthy();
        user.score = 999;
        expect(user.canHaveCredCard()).toBeTruthy();
        expect(user.credit).toBe(1000000);
    })
});