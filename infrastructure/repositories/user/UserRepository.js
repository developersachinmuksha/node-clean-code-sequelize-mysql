module.exports = ({ UserSchema, UserRepositoryConverter }) => ({
  get: async (id) => {
    let userDBO = await UserSchema.findOne({ where: { id } });
    return UserRepositoryConverter.userDBOToDomain(userDBO);
  },
  create: async (user) => {
    let userDBO = await UserSchema.create(user);
    return UserRepositoryConverter.userDBOToDomain(userDBO);
  },
});
