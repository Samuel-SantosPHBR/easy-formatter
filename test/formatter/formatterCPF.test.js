const formatterCPF = require("../../src/formatter/formatterCPF")

describe("Testa a função formatterCPF",() => {
    it('O valor sai formatado corretamente se colocar um int', () => {
        expect(formatterCPF(11111111111)).toBe("111.111.111-11")
    })

    it('O valor sai formatado corretamente se colocar uma string', () => {
        expect(formatterCPF("11111111111")).toBe("111.111.111-11")
    })

    it('Retorna falso ao adicionar menos que 9 numeros', () => {
        expect(formatterCPF(1111111111)).toBe(false)
    })

    it('Retorna falso ao adicionar menos que 9 caracters strings', () => {
        expect(formatterCPF("1111111111")).toBe(false)
    })

    it('O retorno sai corretamente ao inseri caractres especiais', () => {
        expect(formatterCPF("111*111.111-11")).toBe("111.111.111-11")
    })
})