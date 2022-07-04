module.exports = (container) => ({
  requestToDTO: (reqBody) => {
    const { CreateUserRequest } = container;
    return new CreateUserRequest(
      reqBody.firstName,
      reqBody.lastName,
      reqBody.age
    );
  },
  toResponse: (user) => {
    const { CreateUserResponse } = container;
    return new CreateUserResponse(
      user.id,
      user.firstName,
      user.lastName,
      user.age
    );
  },
});
