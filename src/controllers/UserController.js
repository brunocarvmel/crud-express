const data = require("../database/data.json")

module.exports = {
  index(req, res) {
    res.json(data) //retornando todo o conteudo de data.json
  },
  findOne(req, res) {
    const { id } = req.params //pegando o id por meio do params
    const user = data.find(users => users.id == id) //função find percorre o array
    
    if(!user) return res.status(204).json() //se ele não encontrar o id iqual o da req, retorna o erro 204
  
    res.json(user)
  
  },
  create(req, res) {
    const { name, email } = req.body
  
    //salvar
  
    res.json({ name, email })
    
  },
  update(req, res) {
    const { id } = req.params
    const { name } = req.body
    const user = data.find(users => users.id == id)
  
    if(!user) return res.status(204).json()
  
    user.name = name
  
    res.json(user)
  
  },
  destroy(req, res) {
    const { id } = req.params
    const usersFiltered = data.filter(users => users.id != id)
  
    res.json(usersFiltered)
  
  }
}