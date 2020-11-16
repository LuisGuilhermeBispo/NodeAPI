const express = require('express');
const router = express.Router();


//RETORNA TODOS OS PROD
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando GET na rota de Produtos'
    })
});


//Insere um PROD
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando POST'
    })
});


//RETORNA UM PRDO
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Retorna um Produto Exclusivo',
            id : id
        })
    } else {
        res.status(200).send({
            mensagem: 'Voce passou um ID comum', 
        })
    }
});


//ALTERA UM PROD
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando PATCH'
    })
});


//EXCLUI UM PROD
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando DELETE'
    })
});

module.exports = router;