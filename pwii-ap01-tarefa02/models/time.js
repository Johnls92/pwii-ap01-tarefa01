module.exports = (sequelize, Sequelize) => {
  const Time = sequelize.define('time', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        allowEmpty: false
    },
    fundacao: {
        type: Sequelize.BIGINT,
        allowNull: false,
        allowEmpty: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
        allowEmpty: false
    }
  });

  return Time;
};
