module.exports =
  ({ UserRepository }) =>
  (user) => {
    console.log("in use case");
    return UserRepository.get(user.id);
  };