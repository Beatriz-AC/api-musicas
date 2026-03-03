const model = require('../models/musicaModel');

const getAllMusicas = (req, res) => {
  res.status(200).json(model.getAll());
};

const getMusicaPorId = (req, res) => {
  const musica = model.getById(req.params.id);
  if (!musica) return res.status(404).json({ mensagem: 'Música não encontrada' });
  res.status(200).json(musica);
};

const getMusicasPorNome = (req, res) => {
  const musicas = model.getByNome(req.params.nome);
  if (musicas.length === 0) {
    return res.status(404).json({ mensagem: 'Nenhuma música encontrada com esse nome' });
  }
  res.status(200).json(musicas);
};

const adicionarMusica = (req, res) => {
  const nova = req.body;
  if (!nova.nome || !nova.artista) {
    return res.status(400).json({ mensagem: 'Nome e artista são obrigatórios' });
  }
  const musicaAdicionada = model.add(nova);
  res.status(201).json(musicaAdicionada);
};

const atualizarMusica = (req, res) => {
  const musicaAtualizada = model.update(req.params.id, req.body);
  if (!musicaAtualizada) return res.status(404).json({ mensagem: 'Música não encontrada' });
  res.status(200).json(musicaAtualizada);
};

const removerMusica = (req, res) => {
  const musicaRemovida = model.remove(req.params.id);
  if (!musicaRemovida) return res.status(404).json({ mensagem: 'Música não encontrada' });
  res.status(200).json({ mensagem: 'Música removida com sucesso', musica: musicaRemovida });
};

module.exports = {
  getAllMusicas,
  getMusicaPorId,
  getMusicasPorNome,
  adicionarMusica,
  atualizarMusica,
  removerMusica
};