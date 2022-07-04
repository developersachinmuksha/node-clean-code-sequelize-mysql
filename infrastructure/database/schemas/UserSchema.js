module.exports = ({db}) => {
    const User = db.sequelize.define('User', {
        id:{
            type: db.Sequelize.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
          type: db.Sequelize.DataTypes.STRING,
          allowNull: false
        },
        lastName: {
          type: db.Sequelize.DataTypes.STRING,
          allowNull: false
        },
        age: {
          type: db.Sequelize.DataTypes.INTEGER,
          allowNull: false
        },
      }, {
        tableName:'users',
        timestamps: false,
        paranoid:false
      });
      return User;
}