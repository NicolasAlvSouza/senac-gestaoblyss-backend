

 let usuarios = [
  {
    id: 1,
    "nome": "João Silva",
    "telefone": "27 99999-1111",
    "email": "joao.silva@email.com",
    "idade": 28,
    "senha": "12345678"
  },
  {
    id: 2,
    "nome": "Maria Oliveira",
    "telefone": "27 98888-2222",
    "email": "maria.oliveira@email.com",
    "idade": 34,
    "senha": "12345678"
  },
  {
    id: 3,
    "nome": "Carlos Souza",
    "telefone": "27 97777-3333",
    "email": "carlos.souza@email.com",
    "idade": 22,
    "senha": "12345678"
  },
  {
    id: 4,
    "nome": "Ana Costa",
    "telefone": "27 96666-4444",
    "email": "ana.costa@email.com",
    "idade": 30,
    "senha": "12345678"
  },
  {
    id: 5,
    "nome": "Nicolas alves",
    "telefone": "27 99903-4458",
    "email": "nicolas.alves@email.com",
    "idade": 21,
    "senha": "12345678"
  }
]



const listar = (req, res) => {res.json(usuarios)}

const filtrarId = (req, res) => {
  const id = parseInt(req.params.id)
  const usuario = usuarios.find(t => t.id === id)
  res.json(usuario)
}

const criar = (req, res) => {
  const {nome, telefone, email, idade, senha} = req.body

  if (!nome || !email || !telefone || !senha) {
    return res.status(400).json({
      erro: 'nome, email, telefone e senha são obrigatórios'
    });
  }
  const novoUsuario = {
    id: usuarios[usuarios.length-1].id + 1,
    nome: nome,
    telefone: telefone,
    email: email,
    idade: idade,
    senha: senha,
    criadoEm: Date.now()
  }
  usuarios.push(novoUsuario)
  res.status(201).json(novoUsuario) // 201 Criado
}

function atualizar(req, res) {
  const id = Number(req.params.id);
  const indice = usuarios.findIndex(u => u.id === id);

  if (indice === -1) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }

  const { nome, email, telefone, senha } = req.body;

  // spread + short-circuit: só sobrescreve campos enviados no body
  usuarios[indice] = {
    ...usuarios[indice],
    ...(nome && { nome }),
    ...(email && { email }),
    ...(telefone && { telefone }),
    ...(senha && { senha })
  };

  res.json(usuarios[indice]);
}

export function remover(req, res) {
  const id = Number(req.params.id);
  const indice = usuarios.findIndex(u => u.id === id);

  if (indice === -1) {
    return res.status(404).json({ erro: 'Usuário não encontrado' });
  }

  // splice retorna um array com os itens removidos; desestruturamos o primeiro
  const [removido] = usuarios.splice(indice, 1);
  res.json({ mensagem: 'Usuário removido', usuario: removido });
}

export default { listar, filtrarId, criar, atualizar, remover }