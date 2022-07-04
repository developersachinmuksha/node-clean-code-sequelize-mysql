module.exports = (container) => ({
  requestToDTO: (id) => {
    const { FindUserRequest } = container;
    return new FindUserRequest(
      id
    );
  },
  toResponse: (user) => {
    const { UserDomain } = container;
    return new UserDomain(
      user.id,
      user.firstName,
      user.lastName,
      user.age
    );
  },
});
