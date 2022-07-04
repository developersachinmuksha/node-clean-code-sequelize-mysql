module.exports =
  ({ UserRepository }) =>
  (user) => {
    return UserRepository.create(user);
  };