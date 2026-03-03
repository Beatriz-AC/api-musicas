// Importar as funções do Model
const MusicaModel = require('../models/musicaModel');

// ============================================================
// FUNÇÃO: listarTodas
// ROTA: GET /musicas
// DESCRIÇÃO: Retorna todas as músicas cadastradas
// ============================================================
function listarTodas(req, res) {
try {
const musicas = MusicaModel.listarTodas();
res.status(200).json(musicas);
} catch (erro) {
res.status(500).json({
 mensagem: 'Erro ao listar músicas',
erro: erro.message
 });
}
}

// ============================================================
// FUNÇÃO: buscarPorId
// ROTA: GET /musicas/:id
// DESCRIÇÃO: Retorna uma música específica pelo ID
// ============================================================
function buscarPorId(req, res) {
try {
const id = parseInt(req.params.id);
        
if (isNaN(id)) {
return res.status(400).json({
mensagem: 'ID inválido - deve ser um número'
});
}
        
const musica = MusicaModel.buscarPorId(id);
        
if (musica) {
res.status(200).json(musica);
} else {
res.status(404).json({
mensagem: `Música com ID ${id} não encontrada`
});
}
} catch (erro) {
res.status(500).json({
mensagem: 'Erro ao buscar música',
erro: erro.message
});
}
}

// ============================================================
// FUNÇÃO: buscarPorTitulo
// ROTA: GET /musicas/titulo/:titulo
// DESCRIÇÃO: Filtra músicas por título
// ============================================================
function buscarPorTitulo(req, res) {
try {
const { titulo } = req.params;
const musicas = MusicaModel.buscarPorTitulo(titulo);
res.status(200).json(musicas);
} catch (erro) {
res.status(500).json({
mensagem: 'Erro ao buscar músicas por título',
erro: erro.message
});
}
}

// ============================================================
// FUNÇÃO: buscarPorArtista
// ROTA: GET /musicas/artista/:artista
// DESCRIÇÃO: Filtra músicas por artista
// ============================================================
function buscarPorArtista(req, res) {
try {
const { artista } = req.params;
const musicas = MusicaModel.buscarPorArtista(artista);
res.status(200).json(musicas);
} catch (erro) {
res.status(500).json({
mensagem: 'Erro ao buscar músicas por artista',
erro: erro.message
});
}
}

// ============================================================
// FUNÇÃO: criar
// ROTA: POST /musicas
// DESCRIÇÃO: Cria uma nova música
// ============================================================
function criar(req, res) {
try {
const { titulo, artista, album, ano, genero, duracao } = req.body;
        
// VALIDAÇÃO: campos obrigatórios
if (!titulo || !artista || !album || !ano) {
return res.status(400).json({
mensagem: 'Campos obrigatórios: titulo, artista, album, ano'
});
}
        
// VALIDAÇÃO: ano deve ser válido
const anoAtual = new Date().getFullYear();
if (parseInt(ano) < 1900 || parseInt(ano) > anoAtual + 1) {
return res.status(400).json({
mensagem: 'Ano inválido'
});
}
        
// VALIDAÇÃO: duração (se fornecida) deve ser positiva
if (duracao && parseFloat(duracao) <= 0) {
return res.status(400).json({
mensagem: 'A duração deve ser maior que zero'
});
}
        
const novaMusica = MusicaModel.criar({
titulo,
artista,
album,
ano: parseInt(ano),
genero,
duracao: duracao ? parseFloat(duracao) : null
});
        
res.status(201).json(novaMusica);
} catch (erro) {
res.status(500).json({
mensagem: 'Erro ao criar música',
erro: erro.message
});
}
}

// ============================================================
// FUNÇÃO: atualizar
// ROTA: PUT /musicas/:id
// DESCRIÇÃO: Atualiza todos os dados de uma música
// ============================================================
function atualizar(req, res) {
try {
const id = parseInt(req.params.id);
const { titulo, artista, album, ano, genero, duracao } = req.body;
        
if (isNaN(id)) {
return res.status(400).json({
mensagem: 'ID inválido'
});
}
        
if (!titulo || !artista || !album || !ano) {
return res.status(400).json({
mensagem: 'Campos obrigatórios: titulo, artista, album, ano'
});
}

const anoAtual = new Date().getFullYear();
if (parseInt(ano) < 1900 || parseInt(ano) > anoAtual + 1) {
return res.status(400).json({
mensagem: 'Ano inválido'
});
}
        
if (duracao && parseFloat(duracao) <= 0) {
return res.status(400).json({
mensagem: 'A duração deve ser maior que zero'
});
}
        
const musicaAtualizada = MusicaModel.atualizar(id, {
titulo,
artista,
album,
ano: parseInt(ano),
genero,
duracao: duracao ? parseFloat(duracao) : null
});
        
if (musicaAtualizada) {
res.status(200).json(musicaAtualizada);
} else {
res.status(404).json({
mensagem: `Música com ID ${id} não encontrada`
});
}
} catch (erro) {
res.status(500).json({
mensagem: 'Erro ao atualizar música',
erro: erro.message
});
}
}

// ============================================================
// FUNÇÃO: deletar
// ROTA: DELETE /musicas/:id
// DESCRIÇÃO: Remove uma música do sistema
// ============================================================
function deletar(req, res) {
try {
const id = parseInt(req.params.id);

if (isNaN(id)) {
return res.status(400).json({
mensagem: 'ID inválido'
});
}
        
const deletado = MusicaModel.deletar(id);
        
if (deletado) {
res.status(200).json({
mensagem: `Música com ID ${id} removida com sucesso`
});
} else {
res.status(404).json({
mensagem: `Música com ID ${id} não encontrada`
});
}
} catch (erro) {
res.status(500).json({
mensagem: 'Erro ao deletar música',
erro: erro.message
});
}
}


module.exports = {
    listarTodas,
    buscarPorId,
    buscarPorTitulo,
    buscarPorArtista,
    criar,
    atualizar,
    deletar
};