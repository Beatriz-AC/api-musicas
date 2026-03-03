const express = require('express');
const router = express.Router();
const controller = require('../controllers/musicaController');


router.get('/', controller.getAllMusicas);                    
router.get('/nome/:nome', controller.getMusicasPorNome);      
router.get('/:id', controller.getMusicaPorId);                


router.post('/', controller.adicionarMusica);                 
router.put('/:id', controller.atualizarMusica);               
router.delete('/:id', controller.removerMusica);              
module.exports = router;