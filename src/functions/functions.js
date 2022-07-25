export const calculateDistance = (personagens, combinacao) => {

    const opc = []

    for(const element of personagens) {
        if(element[0] === combinacao[0]) {
            opc.push(element)
        } else {
            opc.push([-1,-1])
        }
    }

    console.log(opc)

    const opc2 = []

    for(const element of opc) {
        if(element[1] === combinacao[1]) {
            opc2.push(element)
        } else {
            opc2.push([-1,-1])
        }
    }

    const personagem = opc2.map((el, index) => {
        if(el[0] !== -1 && el[1] !== -1) return index
    }).filter(el => el !== undefined)


    if(personagem.length > 0) return personagem

    const personagemDeNovo = opc.map((el, index) => {
        if(el[0] !== -1 && el[1] !== -1) {
            const distance = el[1] - combinacao[1]
            if(distance < 0) return distance * -1
            return distance
        } else {
            return 10000000
        }
    })

    console.log(personagemDeNovo)

    const menorValor = Math.min(...personagemDeNovo)

    const index = personagemDeNovo.indexOf(menorValor)

    return index
}