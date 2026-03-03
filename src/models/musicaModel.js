let musicas = [
  { id: 5, nome: "Let Them Come", artista: "Brian Tyler" },
  { id: 6, nome: "Valley of The Soul", artista: "Brian Tyler" },
  { id: 7, nome: "Dawn", artista: "Brian Tyler" }
];


const getAll = () => musicas;

const getById = (id) => musicas.find(m => m.id === parseInt(id));

const getByNome = (nome) => musicas.filter(m =>
  m.nome.toLowerCase().includes(nome.toLowerCase())
);

const add = (novaMusica) => {
  const novoId = musicas.length ? Math.max(...musicas.map(m => m.id)) + 1 : 1;
  novaMusica.id = novoId;
  musicas.push(novaMusica);
  return novaMusica;
};

const update = (id, dadosAtualizados) => {
  const index = musicas.findIndex(m => m.id === parseInt(id));
  if (index === -1) return null;
  musicas[index] = { ...musicas[index], ...dadosAtualizados, id: parseInt(id) };
  return musicas[index];
};

const remove = (id) => {
  const index = musicas.findIndex(m => m.id === parseInt(id));
  if (index === -1) return null;
  return musicas.splice(index, 1)[0];
};

module.exports = {
  getAll,
  getById,
  getByNome,
  add,
  update,
  remove
};