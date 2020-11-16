const express = require('express');
const router = express.Router();


//RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando GET na rota de PEDIDOS/ RETORNA OS PEDIDOS'
    })
});


//Insere um PEDIDOS
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando POST EM PEDIDOS/ CRIA UM PEDIDO'
    })
});


//RETORNA DETALHES UM PEDIDO
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido

        res.status(200).send({
            mensagem: 'Detalhes de um PEDIDO',
            id_pedido : id
        })
    
});


//ALTERA UM Pedido
//router.patch('/', (req, res, next) => {
//    res.status(201).send({
//        mensagem: 'Usando PATCH em Pedidos'
//    })
//});


//EXCLUI UM Pedido
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando DELETE em Pedidos/ PEDIDO EXCLUIDO'
    })
});

module.exports = router;