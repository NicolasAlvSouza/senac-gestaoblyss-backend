

 let usuarios = [
  {
    id: 1,
    "nome": "João Silva",
    "telefone": "27 99999-1111",
    "email": "joao.silva@email.com",
    "idade": 28
  },
  {
    id: 2,
    "nome": "Maria Oliveira",
    "telefone": "27 98888-2222",
    "email": "maria.oliveira@email.com",
    "idade": 34
  },
  {
    id: 3,
    "nome": "Carlos Souza",
    "telefone": "27 97777-3333",
    "email": "carlos.souza@email.com",
    "idade": 22
  },
  {
    id: 4,
    "nome": "Ana Costa",
    "telefone": "27 96666-4444",
    "email": "ana.costa@email.com",
    "idade": 30
  },
  {
    id: 5,
    "nome": "Nicolas alves",
    "telefone": "27 99903-4458",
    "email": "nicolas.alves@email.com",
    "idade": 21
  }
]

class Usuarios {
  constructor(nome, teleone, email, idade) {
    this.id = 6 + 1
    this.nome = nome
    this.telefone = teleone
    this.email = email
    this.idade = idade
  }
   criarUsuario(nome, teleone, email, idade) {
    const usuario1 = new Usuarios(nome, teleone, email, idade)
    usuarios.push(usuario1)
  }
}

const listar = (req, res) => {res.json(usuarios)}
const filtrarId = (req, res) => {
  const id = parseInt(req.params.id)
  const usuario = usuarios.find(t => t.id === id)
  res.json(usuario)
}

criarUsuario("Tomas", "27992345683", "tomas.google@gmail.com", 28)

export default { listar, filtrarId }