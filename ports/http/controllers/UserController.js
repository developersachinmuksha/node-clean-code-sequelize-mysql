const UsersController = (container) => ({
  findUser: async (req, res) => {
    try {
      const { GetUser, FindUserConverter, Success } = container

      const reqDTO = FindUserConverter.requestToDTO(req.params.id)

      const user = await GetUser(reqDTO)
  
      const response = FindUserConverter.toResponse(user)

      return Success.send(res, "User detail", response)
      
    } catch (error) {
      return res.status(400).send("Oop! something bad happend."+error.message)
    }
  },

  listUsers: async (req, res) => {
    return res.send("listUsers")
  },

  createUser: async (req, res) => {
    const { CreateUser, CreateUserConverter } = container
    const body = req.body

    const reqDTO = CreateUserConverter.requestToDTO(body)

    const user = await CreateUser(reqDTO)

    const response = CreateUserConverter.toResponse(user)

    res.status(201).send(response)
  },

  deleteUser: async (req, res) => {
    const { DeleteUser } = container

    const user = await DeleteUser(req.params.id)
    return user
  },

  updateUser: async (req, res) => {
    const { UpdateUser } = container

    const permitted = [
      'name',
      'cpf',
      'birthdate',
      'subscription',
      'dependents'
    ]

    // const user = await UpdateUser(req.params.id, pick(permitted, req.body))
    return null
  }
})

module.exports = UsersController
