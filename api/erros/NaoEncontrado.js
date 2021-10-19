class NaoEncontrado extends Error {
    constructor(nome){
        super(`${nome} não foi encontrado!`)
        this.name = 'NãoEncontrado'
        this.idErro = 0
    }
}

module.exports = NaoEncontrado