import { soma,multiplica } from "./soma"


describe('soma',()=>{

    it("Valor deve somar o número informado mais 1",()=>{
        const value = soma(1);
        expect(value).toBe(2);
    })

    it("Valor deve Multiplicar o número informado por 2",()=>{
        const value = multiplica(2);
        expect(value).toBe(4);
    })
})

