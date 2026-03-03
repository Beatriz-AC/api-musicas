const express = require('express');
const router = express.Router();
const MusicaController = require('../controllers/musicaController');

// ============================================================
// DEFINIÇÃO DAS ROTAS
// ============================================================

// Rotas específicas DEVEM vir antes das rotas com parâmetros genéricos

// GET /musicas/titulo/:titulo - Buscar por título
router.get('/titulo/:titulo', MusicaController.buscarPorTitulo);

// GET /musicas/artista/:artista - Buscar por artista
router.get('/artista/:artista', MusicaController.buscarPorArtista);

// GET /musicas - Listar todas as músicas
router.get('/', MusicaController.listarTodas);

// GET /musicas/:id - Buscar música específica por ID
router.get('/:id', MusicaController.buscarPorId);

// POST /musicas - Criar nova música
router.post('/', MusicaController.criar);

// PUT /musicas/:id - Atualizar música completa
router.put('/:id', MusicaController.atualizar);

// DELETE /musicas/:id - Deletar música
router.delete('/:id', MusicaController.deletar);

module.exports = router;