const { Model, DataTypes, Sequelize } = require('sequelize');

class Provider extends Model {
  static init(connection) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        active: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
        },
      },
      {
        sequelize: connection,
      },
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
  }
}

module.exports = { Provider };
