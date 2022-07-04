module.exports = ({ UserDomain }) => ({
  userDBOToDomain: (userDBO) => {
    if (userDBO == null) return null;
    return new UserDomain(
      userDBO.id,
      userDBO.firstName,
      userDBO.lastName,
      userDBO.age
    );
  },
});
