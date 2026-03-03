const musicas = [
    { id: 1, nome: 'Yellowstone Theme', autor: 'Yellowstone Theme', link: 'https://youtu.be/9ECKaPrAGds' },
    { id: 2, nome: 'The Cowboy In Me', autor: 'The Cowboy In Me', link: 'https://youtu.be/uJD-NK5MMDk?list=RDuJD-NK5MMDk' },
    { id: 3, nome: 'Lady May', autor: 'Lady May', link: 'https://youtu.be/tiwJadn-Nso?list=RDtiwJadn-Nso' },
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