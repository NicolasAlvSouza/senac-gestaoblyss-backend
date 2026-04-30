let usuarios = [
  {
    id: Date.now(),
    "nome": "João Silva",
    "telefone": "27 99999-1111",
    "email": "joao.silva@email.com",
    "idade": 28
  },
  {
    id: Date.now(),
    "nome": "Maria Oliveira",
    "telefone": "27 98888-2222",
    "email": "maria.oliveira@email.com",
    "idade": 34
  },
  {
    id: Date.now(),
    "nome": "Carlos Souza",
    "telefone": "27 97777-3333",
    "email": "carlos.souza@email.com",
    "idade": 22
  },
  {
    id: Date.now(),
    "nome": "Ana Costa",
    "telefone": "27 96666-4444",
    "email": "ana.costa@email.com",
    "idade": 30
  },
  {
    id: Date.now(),
    "nome": "Nicolas alves",
    "telefone": "27 99903-4458",
    "email": "nicolas.alves@email.com",
    "idade": 21
  }
]

const listar = (req, res) => {res.json(usuarios)}

export default { listar }