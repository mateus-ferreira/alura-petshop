const roteador = require('express').Router()
const TabelaFornecedor = require('./tabelaFornecedor')
const Serializador = require('../../../Serializador').SerializadorProduto

roteador.options('/', (requisicao, resposta) => {
    resposta.set('Access-Control-Allow-Methods', 'GET')
    resposta.set('Access-Control-Allow-Headers', 'Content-Type')
    resposta.status(204)
    resposta.end()
})

roteador.get('/', async (requisicao, resposta) => {
    const resultados = await TabelaFornecedor.listar()
    const serializador = new SerializadorFornecedor(
        resposta.getHeader('Content-Type')
    )
    resposta.status(200).send(
        serializador.serializar(resultados)
    )
})

module.exports = roteador