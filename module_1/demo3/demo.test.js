const multiply = require('./script.js')


describe("Mon premier scénario", () => {

    it('vrai == vrai ?', () => {
        expect(true).toBe(true)
    });

    it('la multiplcation est bonne', () => {
        expect(multiply(2,5)).toBe(10)
    })

    it("la multiplcation n'est pas bonne", () => {
        expect(multiply(2,5)).not.toBe(15)
    })

})